// @ts-ignore
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "assets": path.resolve(__dirname, "src/assets"),
      "hooks": path.resolve(__dirname, "src/hooks"),
      "components": path.resolve(__dirname, "src/components"),
      "utils": path.resolve(__dirname, "src/utils"),
      "pages": path.resolve(__dirname, "src/pages"),
      "stores": path.resolve(__dirname, "src/stores"),
    },
  },
  plugins: [react()],
});
