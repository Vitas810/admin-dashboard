import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
          transformAssetUrls: {
              base: null,
              includeAbsolute: false,
          },
      },
  }),
  ],
  resolve: {
    alias: {
        'fonts@' : resolve(__dirname, './src/shared/assets/fonts/'),
    },
},
})
