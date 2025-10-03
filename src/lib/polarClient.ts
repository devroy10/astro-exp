import { Polar } from '@polar-sh/sdk'
import { POLAR_OAT, POLAR_MODE } from 'astro:env/server'

export type PolarMode = 'sandbox' | 'production' | undefined

export const createPolarClient = async () => {

  if (!POLAR_OAT) {
    throw new Error(`Missing POLAR_OAT environment variable`)
  }

  return new Polar({
    accessToken: POLAR_OAT,
    server: POLAR_MODE as PolarMode,
  })
}

export const polarClient = await createPolarClient()