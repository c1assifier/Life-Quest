import { defineConfig } from 'vitest/config';
import path from 'path'
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Life-Quest',
  resolve: {
    alias: {
      '@': path.resolve('src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
});
