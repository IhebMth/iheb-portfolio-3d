import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  input: 'src/main.jsx',
  output: {
    file: 'dist/bundle.js',
    format: 'esm',
    manualChunks: {
      'lottie.js': ['node_modules/three-stdlib/libs/lottie.js'],
    },
   
  },
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
 
})

