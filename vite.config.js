import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/cibertec-efsrt2/' : '/',
  resolve: {
    alias: {
		'@icons': path.resolve(__dirname, './src/assets/icons'),
		'@images': path.resolve(__dirname, './src/assets/images'),
		'@components': path.resolve(__dirname, './src/components'),
		'@css': path.resolve(__dirname, './src/assets/css') 
    }
  }
}))
