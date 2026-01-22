import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Criar cliente apenas se as variáveis estiverem disponíveis
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export type Database = {
  public: {
    Tables: {
      conteudos: {
        Row: {
          id: string
          titulo: string
          subtitulo: string | null
          descricao: string | null
          conteudo_completo: string
          icone: string | null
          categoria: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          titulo: string
          subtitulo?: string | null
          descricao?: string | null
          conteudo_completo: string
          icone?: string | null
          categoria?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          titulo?: string
          subtitulo?: string | null
          descricao?: string | null
          conteudo_completo?: string
          icone?: string | null
          categoria?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          name: string | null
          age: number | null
          email: string | null
          cycle_duration: number | null
          menstruation_duration: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          name?: string | null
          age?: number | null
          email?: string | null
          cycle_duration?: number | null
          menstruation_duration?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string | null
          age?: number | null
          email?: string | null
          cycle_duration?: number | null
          menstruation_duration?: number | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}