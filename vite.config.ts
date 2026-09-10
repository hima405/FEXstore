import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: {
    // The Netlify site's publish directory is configured as dist/client; pin
    // nitro's static output there so it matches (the auto-detected "netlify"
    // preset otherwise emits static assets straight into dist).
    output: { publicDir: "dist/client" },
  },
});
