// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
  },
  vite: {
    plugins: [
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: ["favicon.ico", "avatar2.png"],
        manifest: {
          name: "Nikhil Kumar — Portfolio",
          short_name: "Portfolio",
          description: "Nikhil Kumar — Engineer · Learner · Builder",
          start_url: "/",
          display: "standalone",
          background_color: "#0b1024",
          theme_color: "#0b1024",
          icons: [
            { src: "/avatar2.png", sizes: "192x192", type: "image/png" },
            { src: "/avatar2.png", sizes: "512x512", type: "image/png" }
          ]
        },
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,woff2,woff,ttf,otf}"] ,
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/api\.github\.com\/.*$/,
              handler: "NetworkFirst",
              options: {
                cacheName: "github-api",
                expiration: { maxEntries: 50, maxAgeSeconds: 24 * 60 * 60 },
                networkTimeoutSeconds: 10
              }
            },
            {
              urlPattern: /^https?:.*\.(?:png|jpg|jpeg|svg|gif|webp)$/, 
              handler: "CacheFirst",
              options: {
                cacheName: "images",
                expiration: { maxEntries: 200, maxAgeSeconds: 30 * 24 * 60 * 60 }
              }
            },
            {
              urlPattern: /^https?:.*\.(?:js|css)$/, 
              handler: "StaleWhileRevalidate",
              options: { cacheName: "static-resources" }
            },
            {
              urlPattern: /^https?:.*\.(?:woff2|woff|ttf|otf)$/, 
              handler: "CacheFirst",
              options: {
                cacheName: "fonts",
                expiration: { maxEntries: 20, maxAgeSeconds: 365 * 24 * 60 * 60 }
              }
            }
          ]
        }
      }),
    ],
  },
});
