import fs from 'fs'
import path from 'path'

export default defineEventHandler(async (event) => {
  try {
    const days = parseInt(getQuery(event).days as string) || 7
    
    const { google } = await import('googleapis')
    
    let keyData
    if (process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
      const decoded = Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT_KEY, 'base64').toString('utf-8')
      keyData = JSON.parse(decoded)
    } else {
      const keyPath = path.resolve(process.cwd(), 'google-search-console-key.json')
      if (!fs.existsSync(keyPath)) {
        throw new Error('Service account key not found')
      }
      keyData = JSON.parse(fs.readFileSync(keyPath, 'utf-8'))
    }
    
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
    
    const impressions = rows.reduce((sum, row) => sum + (row.impressions || 0), 0)
    const clicks = rows.reduce((sum, row) => sum + (row.clicks || 0), 0)
    const avgCtr = clicks > 0 ? ((clicks / impressions) * 100).toFixed(2) : '0'
    const avgPosition = rows.length > 0 ? (rows.reduce((sum, row) => sum + (row.position || 0), 0) / rows.length).toFixed(1) : '0'

    return {
      success: true,
      data: {
        period: `Last ${days} days`,
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
      },
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    }
  }
})
