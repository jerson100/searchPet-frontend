import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [reactRefresh(), svgr()],
  server: {
    port: 3000,
  },
});
