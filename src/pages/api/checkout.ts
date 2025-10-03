import { Checkout } from '@polar-sh/astro'
import { POLAR_MODE, POLAR_OAT, POLAR_SUCCESS_URL } from 'astro:env/server'
import { type PolarMode } from '../../lib/polarClient'

if (!POLAR_OAT) {
  throw new Error('Missing POLAR_OAT environment variable')
}

export const GET = Checkout({
  accessToken: POLAR_OAT,
  successUrl: POLAR_SUCCESS_URL,
  server: POLAR_MODE as PolarMode,
  theme: 'light', // optional
})
