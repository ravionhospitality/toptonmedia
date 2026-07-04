import { createServerFn } from '@tanstack/react-start'

export interface LeadNotification {
  kind: 'contact_form' | 'qualifier_form'
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  budget?: string
  message?: string
  qualified?: boolean
}

function esc(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

// Sends a lead alert email via Resend. Requires RESEND_API_KEY in the
// environment; silently no-ops without it so form submissions never fail
// because of a notification problem.
export const sendLeadNotification = createServerFn({ method: 'POST' })
  .validator((lead: LeadNotification) => lead)
  .handler(async ({ data: lead }) => {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) return { sent: false, reason: 'RESEND_API_KEY not set' }

    const to = process.env.LEAD_NOTIFY_EMAIL || 'ravionhospitality@gmail.com'
    const isQualifier = lead.kind === 'qualifier_form'
    const subject = isQualifier
      ? `${lead.qualified ? '🔥 Qualified lead' : 'New qualifier lead'}: ${lead.name}`
      : `New contact form lead: ${lead.name}`

    const rows: [string, string | undefined][] = [
      ['Name', lead.name],
      ['Email', lead.email],
      ['Phone', lead.phone],
      ['Company', lead.company],
      ['Service / Goal', lead.service],
      ['Budget', lead.budget],
    ]
    const tableRows = rows
      .filter(([, v]) => v)
      .map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;color:#888;white-space:nowrap;">${k}</td><td style="padding:6px 0;font-weight:600;">${esc(v!)}</td></tr>`)
      .join('')

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:560px;">
        <h2 style="color:#7B0D2A;">${isQualifier ? 'New /apply submission' : 'New contact form submission'}</h2>
        <table style="border-collapse:collapse;font-size:14px;">${tableRows}</table>
        ${lead.message ? `<p style="font-size:13px;color:#444;white-space:pre-wrap;border-left:3px solid #C9A84C;padding-left:12px;margin-top:16px;">${esc(lead.message).slice(0, 3000)}</p>` : ''}
        <p style="margin-top:20px;"><a href="https://toptonmedia.com/admin" style="color:#7B0D2A;font-weight:600;">Open the admin dashboard →</a></p>
      </div>`

    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.LEAD_NOTIFY_FROM || 'Topton Media Leads <onboarding@resend.dev>',
          to: [to],
          reply_to: lead.email || undefined,
          subject,
          html,
        }),
      })
      if (!res.ok) {
        const body = await res.text()
        console.error('Lead notification failed:', res.status, body)
        return { sent: false, reason: `Resend ${res.status}` }
      }
      return { sent: true }
    } catch (err) {
      console.error('Lead notification error:', err)
      return { sent: false, reason: String(err) }
    }
  })
