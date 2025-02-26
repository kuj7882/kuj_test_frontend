import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // '@'를 'src' 폴더로 설정
    },
  },
  plugins: [vue()],
  server: {
    proxy: {
      // 프록시할 경로
      "/api": {
        // 대상 서버
        target: "http://192.168.254.63:8080",
        // 대상 서버의 호스트 헤더 변경 여부
        changeOrigin: true,
        // '/api' 부분 제거
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});