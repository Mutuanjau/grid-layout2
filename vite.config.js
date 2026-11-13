import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  base: "/grid-layout2/",
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
}