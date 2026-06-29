import { fetchGSCData } from '../utils/gsc'

export default defineEventHandler(async (event) => {
  console.log('[GSC API] Request received for days:', getQuery(event).days)
  
  try {
    const query = getQuery(event)
    const days = parseInt((query.days as string) || '7')
    
    console.log('[GSC API] Fetching data for', days, 'days')
    const data = await fetchGSCData(days)
    console.log('[GSC API] Success, returning data')
    
    return {
      success: true,
      data: {
        period: `Last ${days} days`,
        ...data,
      },
    }
  } catch (error: any) {
    console.error('[GSC API] Error:', error.message)
    console.error('[GSC API] Stack:', error.stack)
    return {
      success: false,
      error: error.message,
    }
  }
})
