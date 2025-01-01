import { defineConfig } from 'vite'
import { one } from 'one/vite'

export default defineConfig({
  resolve: {
    preserveSymlinks: true,
  },
  plugins: [
    one({
      web: {
        defaultRenderMode: 'ssg',
      },
    }),
  ],
})
