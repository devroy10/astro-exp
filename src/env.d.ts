/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly POLAR_MODE: string
  readonly POLAR_OAT: string
  readonly POLAR_SUCCESS_URL: string
  readonly POLAR_WEBHOOK_SECRET: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
