import fs from 'fs'
import path from 'path'

export async function fetchGSCData(days: number) {
  // Import ONLY here on server
  const { google } = await import('googleapis')
  
  const keyPath = path.resolve(process.cwd(), 'google-search-console-key.json')
  
  if (!fs.existsSync(keyPath)) {
    throw new Error('Service account key file not found')
  }
  
  const keyData = JSON.parse(fs.readFileSync(keyPath, 'utf-8'))
  
  const auth = new google.auth.GoogleAuth({
    credentials: keyData,
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  })
  
  const client = await auth.getClient()
  const searchconsole = google.searchconsole({ version: 'v1', auth: client })

  const endDate = new Date()
  const startDate = new Date()
  startDate.setDate(startDate.getDate() - days)

  const response = await searchconsole.searchanalytics.query({
    siteUrl: 'https://toptonmedia.com/',
    requestBody: {
      startDate: startDate.toISOString().split('T')[0],
      endDate: endDate.toISOString().split('T')[0],
      dimensions: ['query'],
      rowLimit: 25,
    },
  })

  const rows = response.data.rows || []
  
  if (rows.length === 0) {
    return { impressions: 0, clicks: 0, ctr: '0', avgPosition: '0', topQueries: [] }
  }

  const impressions = rows.reduce((sum, row) => sum + (row.impressions || 0), 0)
  const clicks = rows.reduce((sum, row) => sum + (row.clicks || 0), 0)
  const avgCtr = clicks > 0 ? ((clicks / impressions) * 100).toFixed(2) : '0'
  const avgPosition = (rows.reduce((sum, row) => sum + (row.position || 0), 0) / rows.length).toFixed(1)

  return {
    impressions,
    clicks,
    ctr: avgCtr,
    avgPosition,
    topQueries: rows.map((row) => ({
      query: row.keys?.[0] || 'N/A',
      clicks: row.clicks || 0,
      impressions: row.impressions || 0,
      ctr: ((row.ctr || 0) * 100).toFixed(2),
      position: (row.position || 0).toFixed(1),
    })),
  }
}
