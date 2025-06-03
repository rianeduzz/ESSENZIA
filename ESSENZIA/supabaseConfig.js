import { createClient } from '@supabase/supabase-js'

// Substitua com as credenciais do projeto do seu grupo:
const supabaseUrl = 'https://gkoaraoalglgphckonjr.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdrb2FyYW9hbGdsZ3BoY2tvbmpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MzUzNTYsImV4cCI6MjA2MzUxMTM1Nn0.0z2IOu72MpK0160xvwsdM-NnG5p5px1C44kCIVnR7sI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
