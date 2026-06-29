import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'

export default defineConfig({
  plugins: [
    tsConfigPaths({ projects: ['./tsconfig.json'], ignoreConfigErrors: true }),
    tailwindcss(),
    tanstackStart(),
    nitro(),
    react(),
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  ssr: {
    external: ['isbot', 'googleapis', 'google-auth-library', 'googleapis-common'],
  },
})