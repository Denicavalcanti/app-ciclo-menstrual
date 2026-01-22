'use client'

import { useState, useEffect } from 'react'
import { Heart, Mail, User, Chrome } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

export default function AuthPage() {
  const router = useRouter()
  const [showAuth, setShowAuth] = useState<'login' | 'signup' | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Verificar se usuário já está logado
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        router.push('/perfil/configuracoes-ciclo')
      }
    }
    checkUser()

    // Escutar mudanças de autenticação
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session) {
        // Criar perfil do usuário se não existir
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single()

        if (!profile) {
          await supabase
            .from('profiles')
            .insert({
              id: session.user.id,
              email: session.user.email,
              name: session.user.user_metadata?.full_name || null,
              cycle_duration: 28,
              menstruation_duration: 5
            })
        }

        router.push('/perfil/configuracoes-ciclo')
      }
    })

    return () => subscription.unsubscribe()
  }, [router])

  const handleAnonymousLogin = async () => {
    setLoading(true)
    try {
      // Criar um usuário anônimo temporário
      const anonymousId = `anon_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      
      // Salvar no localStorage para permitir migração posterior
      localStorage.setItem('anonymous_user', JSON.stringify({
        id: anonymousId,
        isAnonymous: true,
        createdAt: new Date().toISOString()
      }))

      // Redirecionar para configuração inicial
      router.push('/perfil/configuracoes-ciclo')
    } catch (error) {
      console.error('Erro no login anônimo:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    setLoading(true)
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/perfil/configuracoes-ciclo`
        }
      })
      if (error) throw error
    } catch (error) {
      console.error('Erro no login com Google:', error)
      setLoading(false)
    }
  }

  if (showAuth) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-400 via-pink-500 to-yellow-400 p-6 text-white text-center">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <Heart className="w-8 h-8" />
            <span className="text-2xl font-bold">CICLO</span>
          </div>
          <p className="text-sm opacity-90">
            {showAuth === 'signup' ? 'Crie sua conta' : 'Entre na sua conta'}
          </p>
        </div>

        <div className="flex-1 p-6">
          <div className="max-w-md mx-auto">
            <button
              onClick={() => setShowAuth(null)}
              className="mb-6 text-pink-500 hover:text-pink-600 text-sm font-medium"
            >
              ← Voltar
            </button>

            <Auth
              supabaseClient={supabase}
              view={showAuth === 'signup' ? 'sign_up' : 'sign_in'}
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: '#F25D8E',
                      brandAccent: '#E91E63',
                    },
                  },
                },
              }}
              localization={{
                variables: {
                  sign_up: {
                    email_label: 'E-mail',
                    password_label: 'Senha',
                    button_label: 'Criar conta',
                    loading_button_label: 'Criando conta...',
                    social_provider_text: 'Entrar com {{provider}}',
                    link_text: 'Já tem uma conta? Entre aqui',
                    confirmation_text: 'Verifique seu e-mail para confirmar a conta'
                  },
                  sign_in: {
                    email_label: 'E-mail',
                    password_label: 'Senha',
                    button_label: 'Entrar',
                    loading_button_label: 'Entrando...',
                    social_provider_text: 'Entrar com {{provider}}',
                    link_text: 'Não tem uma conta? Crie aqui'
                  }
                }
              }}
              providers={['google']}
              redirectTo={`${window.location.origin}/perfil/configuracoes-ciclo`}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col">
      {/* Header com Logo */}
      <div className="bg-gradient-to-r from-pink-400 via-pink-500 to-yellow-400 p-8 text-white text-center flex-1 flex flex-col justify-center">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Heart className="w-10 h-10" />
          </div>
          <span className="text-4xl font-bold">CICLO</span>
        </div>
        <p className="text-lg opacity-90 mb-2">Bem-vinda!</p>
        <p className="text-sm opacity-80 max-w-sm mx-auto">
          Acompanhe seu ciclo menstrual de forma inteligente e cuide da sua saúde feminina
        </p>
      </div>

      {/* Botões de Ação */}
      <div className="p-6 space-y-4">
        <button
          onClick={() => setShowAuth('signup')}
          disabled={loading}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center space-x-2 min-h-[56px] disabled:opacity-50"
        >
          <User className="w-5 h-5" />
          <span>Criar conta</span>
        </button>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center space-x-2 min-h-[56px] disabled:opacity-50"
        >
          <Chrome className="w-5 h-5 text-red-500" />
          <span>Entrar com Google</span>
        </button>

        <button
          onClick={() => setShowAuth('login')}
          disabled={loading}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center space-x-2 min-h-[56px] disabled:opacity-50"
        >
          <Mail className="w-5 h-5" />
          <span>Entrar com e-mail</span>
        </button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">ou</span>
          </div>
        </div>

        <button
          onClick={handleAnonymousLogin}
          disabled={loading}
          className="w-full bg-transparent border-2 border-pink-200 hover:border-pink-300 text-pink-600 font-semibold py-4 px-6 rounded-xl transition-colors min-h-[56px] disabled:opacity-50"
        >
          {loading ? 'Carregando...' : 'Continuar sem login'}
        </button>

        <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
          Ao continuar, você concorda com nossos Termos de Uso e Política de Privacidade. 
          Seus dados são protegidos e você pode migrar para uma conta real a qualquer momento.
        </p>
      </div>
    </div>
  )
}