import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVitePlugin } from '@tanstack/router-vite-plugin'
import { TanStackStartVitePlugin } from '@tanstack/start-vite-plugin'

export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVitePlugin(),
    TanStackStartVitePlugin(),
  ],
})
