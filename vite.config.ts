import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import path from 'path';
import react from '@vitejs/plugin-react-swc';

dotenv.config();
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [react()],
  define: {
    'process.env': process.env
  }
});
