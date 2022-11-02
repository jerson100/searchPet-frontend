import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import svgr from "vite-plugin-svgr";
/*import basicSsl from "@vitejs/plugin-basic-ssl";*/

export default defineConfig({
  plugins: [reactRefresh(), svgr() /*, basicSsl()*/],
  server: {
    port: 3000,
  },
});
