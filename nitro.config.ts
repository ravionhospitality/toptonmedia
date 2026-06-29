import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
  routeRules: {
    '/api/**': { cache: false },
  },
})
