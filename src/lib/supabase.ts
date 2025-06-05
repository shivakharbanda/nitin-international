import { createClient } from '@supabase/supabase-js'

// Client-side credentials
const publicUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

// Browser/client instance
export const supabase = createClient(publicUrl, anonKey)

// Server-side credentials (service role)
const serviceUrl = (process.env.SUPABASE_URL as string) || publicUrl
const serviceKey = (process.env.SUPABASE_SERVICE_ROLE_KEY as string) || anonKey

// Server instance with elevated privileges (falls back to anon key if service key is missing)
export const supabaseServer = createClient(serviceUrl, serviceKey)
