'use client'

import { useState } from 'react'
import { Heart, User, Mail, ArrowRight } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

interface MigrationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function MigrationModal({ isOpen, onClose }: MigrationModalProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  })

  if (!isOpen) return null

  const handleGoogleMigration = async () => {
    setLoading(true)
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/perfil`
        }
      })
      if (error) throw error
      
      // Remover dados anônimos após migração bem-sucedida
      localStorage.removeItem('anonymous_user')
    } catch (error) {
      console.error('Erro na migração com Google:', error)
      setLoading(false)
    }
  }

  const handleEmailMigration = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.name
          }
        }
      })

      if (error) throw error

      if (data.user) {
        // Criar perfil do usuário
        await supabase
          .from('profiles')
          .insert({
            id: data.user.id,
            email: formData.email,
            name: formData.name,
            cycle_duration: 28,
            menstruation_duration: 5
          })

        // Remover dados anônimos
        localStorage.removeItem('anonymous_user')
        
        alert('Conta criada com sucesso! Verifique seu e-mail para confirmar.')
        onClose()
        router.push('/perfil')
      }
    } catch (error: any) {
      console.error('Erro na migração:', error)
      alert(error.message || 'Erro ao criar conta')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-400 via-pink-500 to-yellow-400 p-6 text-white text-center rounded-t-2xl">
          <Heart className="w-12 h-12 mx-auto mb-3" />
          <h2 className="text-xl font-bold mb-2">Criar Conta Real</h2>
          <p className="text-sm opacity-90">
            Salve seus dados e tenha acesso completo ao CICLO
          </p>
        </div>

        <div className="p-6">
          {!showForm ? (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Escolha como criar sua conta
                </h3>
                <p className="text-sm text-gray-600">
                  Seus dados atuais serão preservados
                </p>
              </div>

              <button
                onClick={handleGoogleMigration}
                disabled={loading}
                className="w-full bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center space-x-2 min-h-[56px] disabled:opacity-50"
              >
                <div className="w-5 h-5 bg-red-500 rounded"></div>
                <span>Continuar com Google</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setShowForm(true)}
                disabled={loading}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center space-x-2 min-h-[56px] disabled:opacity-50"
              >
                <Mail className="w-5 h-5" />
                <span>Criar com e-mail</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onClose}
                className="w-full text-gray-500 hover:text-gray-700 py-2 text-sm"
              >
                Continuar sem conta por enquanto
              </button>
            </div>
          ) : (
            <form onSubmit={handleEmailMigration} className="space-y-4">
              <div className="text-center mb-6">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="text-pink-500 hover:text-pink-600 text-sm font-medium mb-2"
                >
                  ← Voltar
                </button>
                <h3 className="font-semibold text-gray-800">
                  Criar conta com e-mail
                </h3>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Senha
                </label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Mínimo 6 caracteres"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors min-h-[56px] disabled:opacity-50"
              >
                {loading ? 'Criando conta...' : 'Criar conta'}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Ao criar sua conta, você concorda com nossos Termos de Uso e Política de Privacidade
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}