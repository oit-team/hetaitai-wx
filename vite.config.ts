import { defineConfig } from 'vite'
import Vue2 from '@vitejs/plugin-vue2'
import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'

export default defineConfig({
  plugins: [
    Vue2(),
    Unocss({
      presets: [
        presetUno(),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
