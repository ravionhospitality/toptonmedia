import { json } from '@tanstack/start'
import { createAPIFileRoute } from '@tanstack/start/api'
import { getGSCData } from '../../../lib/gsc'

export const APIRoute = createAPIFileRoute('/api/gsc/$days')({
  GET: async ({ params }) => {
    const days = parseInt(params.days) || 7
    const data = await getGSCData(days)
    
    if (!data) {
      return json({ error: 'Failed to fetch GSC data' }, { status: 500 })
    }
    
    return json(data)
  },
})
