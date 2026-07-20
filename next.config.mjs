import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const config = {
  // silences the multi-lockfile workspace-root warning
  outputFileTracingRoot: __dirname,
  // EXPORT=1 npm run build → static site in out/ (separate distDir so the dev server cache survives)
  ...(process.env.EXPORT === "1"
    ? { output: "export", distDir: ".next-export" }
    : {}),
};

export default config;
