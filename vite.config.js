import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5300, // local dev port → http://localhost:5300
    strictPort: true,
    // OneDrive locks files while syncing, which can crash Vite's file watcher
    // (EBUSY). Ignore PDFs so the resume file never breaks the dev server.
    watch: { ignored: ["**/*.pdf"] },
  },
});
