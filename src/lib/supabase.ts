import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Missing Supabase environment variables. Contact form will not work.')
}

// Create a client only if keys allow it, or create a mock/safe client that warns on use?
// The safest for 'rendering' is to export a client that might fail on calls but passes init.
// However, createClient throws if url is empty. 
// We will use a fallback url to prevent crash if missing, but log error.

export const supabase = createClient(
    supabaseUrl || 'https://placeholder.supabase.co',
    supabaseAnonKey || 'placeholder-key'
)
