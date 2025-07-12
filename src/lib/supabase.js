import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gotnsgrghhnifvdbizph.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvdG5zZ3JnaGhuaWZ2ZGJpenBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIzNDQ4ODMsImV4cCI6MjA2NzkyMDg4M30.C09Ocd1bd7xl6yuGQz5BSJQ-yl5AKAYsZsQECts1AVI'
export const supabase = createClient(supabaseUrl, supabaseKey)