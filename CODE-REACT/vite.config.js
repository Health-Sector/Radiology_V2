import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const baseUrl = mode == "production" ? env.PUBLIC_URL : "/";
  const backendUrl = env.VITE_BACKEND_URL || 'http://rugrel-db.ctwu8i8qk05m.ap-south-1.rds.amazonaws.com:5432';

  return {
    base: baseUrl,
    plugins: [react()],
    build: {
      outDir: "build",
      minify: true,
    },
    server: {
      host: '0.0.0.0',
      port: 5175,
      allowedHosts: [
        'rugrel.in', // ✅ your custom domain
        '.rugrel.in', // ✅ wildcard for subdomains like www.rugrel.in, api.rugrel.in etc.
        'medixscan-1740781977.ap-south-1.elb.amazonaws.com',
        'medixscan-727142310.ap-south-1.elb.amazonaws.com'
      ],
      proxy: {
        '/api': {
          target: backendUrl,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        '/token': {
          target: backendUrl,
          changeOrigin: true,
          secure: false
        }
      }
    }
  };
});
