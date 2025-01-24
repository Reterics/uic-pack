import { defineConfig } from "vite";
import react from '@vitejs/plugin-react-swc'
import path from "path";
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      outDir: "dist",
      rollupTypes: true,
      tsconfigPath: './tsconfig.app.json'
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "uic-pack",
      fileName: (format) => `uic-pack.${format}.js`
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ["react", "react-dom"]
    }
  },
});
