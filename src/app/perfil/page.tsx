'use client'

import { useState, useEffect } from 'react'
import { User, Settings, Bell, Shield, HelpCircle, LogOut, Edit3, ChevronLeft, ArrowRight } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { MigrationModal } from '@/components/MigrationModal'

interface UserProfile {
  id: string
  name: string | null
  age: number | null
  email: string | null
  cycle_duration: number | null
  menstruation_duration: number | null
}

export default function PerfilPage() {
  const router = useRouter()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showMigrationModal, setShowMigrationModal] = useState(false)
  const [loading, setLoading] = useState(true)
  const [editData, setEditData] = useState({
    name: '',
    age: '',
    email: ''
  })

  useEffect(() => {
    loadProfile()
  }, [])

  const loadProfile = async () => {
    try {
      // Verificar se há sessão ativa no Supabase
      const { data: { session } } = await supabase.auth.getSession()
      
      if (session) {
        // Usuário autenticado - carregar perfil do banco
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single()

        if (error) {
          console.error('Erro ao carregar perfil:', error)
        } else {
          setProfile(data)
          setEditData({
            name: data.name || '',
            age: data.age?.toString() || '',
            email: data.email || ''
          })
        }
        setIsAnonymous(false)
      } else {
        // Verificar se há usuário anônimo
        const anonymousUser = localStorage.getItem('anonymous_user')
        if (anonymousUser) {
          const userData = JSON.parse(anonymousUser)
          setProfile({
            id: userData.id,
            name: 'Usuária Anônima',
            age: null,
            email: null,
            cycle_duration: 28,
            menstruation_duration: 5
          })
          setEditData({
            name: 'Usuária Anônima',
            age: '',
            email: ''
          })
          setIsAnonymous(true)
        } else {
          // Não há usuário logado, redirecionar para auth
          router.push('/auth')
          return
        }
      }
    } catch (error) {
      console.error('Erro ao carregar perfil:', error)
      router.push('/auth')
    } finally {
      setLoading(false)
    }
  }

  const handleEditProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isAnonymous) return

    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) return

      const { error } = await supabase
        .from('profiles')
        .update({
          name: editData.name,
          age: editData.age ? parseInt(editData.age) : null,
          email: editData.email
        })
        .eq('id', session.user.id)

      if (error) throw error

      // Atualizar estado local
      setProfile(prev => prev ? {
        ...prev,
        name: editData.name,
        age: editData.age ? parseInt(editData.age) : null,
        email: editData.email
      } : null)

      setShowEditModal(false)
      alert('Perfil atualizado com sucesso!')
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error)
      alert('Erro ao atualizar perfil')
    }
  }

  const handleLogout = async () => {
    try {
      if (isAnonymous) {
        localStorage.removeItem('anonymous_user')
      } else {
        await supabase.auth.signOut()
      }
      router.push('/auth')
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
    }
  }

  const navigateToPage = (path: string) => {
    router.push(path)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center">
        <div className="text-center">
          <User className="w-12 h-12 text-pink-500 mx-auto mb-4 animate-pulse" />
          <p className="text-gray-600">Carregando perfil...</p>
        </div>
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Erro ao carregar perfil</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-400 via-pink-500 to-yellow-400 p-4 text-white">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => router.back()}
            className="p-2 hover:bg-white/20 rounded-full min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Perfil</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Card do Usuário */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800">
                {profile.name || 'Usuária'}
              </h2>
              {profile.age && (
                <p className="text-gray-600">{profile.age} anos</p>
              )}
              {profile.email && (
                <p className="text-gray-500 text-sm">{profile.email}</p>
              )}
              {isAnonymous && (
                <p className="text-pink-500 text-sm font-medium">Conta temporária</p>
              )}
            </div>
          </div>
          
          {isAnonymous ? (
            <button
              onClick={() => setShowMigrationModal(true)}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2 min-h-[44px]"
            >
              <ArrowRight className="w-4 h-4" />
              <span>Criar Conta Real</span>
            </button>
          ) : (
            <button
              onClick={() => setShowEditModal(true)}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2 min-h-[44px]"
            >
              <Edit3 className="w-4 h-4" />
              <span>Editar Perfil</span>
            </button>
          )}
        </div>

        {/* Estatísticas */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Estatísticas</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-500">28</div>
              <div className="text-xs text-gray-600">Ciclos registrados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-500">5.2</div>
              <div className="text-xs text-gray-600">Duração média</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">92%</div>
              <div className="text-xs text-gray-600">Precisão</div>
            </div>
          </div>
        </div>

        {/* Informações do Ciclo */}
        <div 
          className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => navigateToPage('/perfil/configuracoes-ciclo')}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Informações do Ciclo</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Duração do ciclo</span>
              <span className="font-semibold text-gray-800">{profile.cycle_duration || 28} dias</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Duração da menstruação</span>
              <span className="font-semibold text-gray-800">{profile.menstruation_duration || 5} dias</span>
            </div>
          </div>
        </div>

        {/* Configurações */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Configurações</h3>
          <div className="space-y-1">
            <button
              onClick={() => navigateToPage('/perfil/configuracoes-ciclo')}
              className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors min-h-[44px]"
            >
              <div className="flex items-center space-x-3">
                <Settings className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">Configurações do Ciclo</span>
              </div>
              <ChevronLeft className="w-4 h-4 text-gray-400 rotate-180" />
            </button>
            
            <button
              onClick={() => navigateToPage('/perfil/notificacoes')}
              className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors min-h-[44px]"
            >
              <div className="flex items-center space-x-3">
                <Bell className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">Notificações</span>
              </div>
              <ChevronLeft className="w-4 h-4 text-gray-400 rotate-180" />
            </button>
            
            <button
              onClick={() => navigateToPage('/perfil/privacidade')}
              className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors min-h-[44px]"
            >
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">Privacidade</span>
              </div>
              <ChevronLeft className="w-4 h-4 text-gray-400 rotate-180" />
            </button>
            
            <button
              onClick={() => navigateToPage('/perfil/ajuda')}
              className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors min-h-[44px]"
            >
              <div className="flex items-center space-x-3">
                <HelpCircle className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">Ajuda e Suporte</span>
              </div>
              <ChevronLeft className="w-4 h-4 text-gray-400 rotate-180" />
            </button>
          </div>
        </div>

        {/* Botão Sair */}
        <button
          onClick={handleLogout}
          className="w-full bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-4 px-6 rounded-2xl transition-colors flex items-center justify-center space-x-2 min-h-[44px]"
        >
          <LogOut className="w-5 h-5" />
          <span>Sair da Conta</span>
        </button>
      </div>

      {/* Modal de Edição */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full">
            <div className="bg-gradient-to-r from-pink-400 via-pink-500 to-yellow-400 p-6 text-white text-center rounded-t-2xl">
              <h2 className="text-xl font-bold">Editar Perfil</h2>
            </div>
            
            <form onSubmit={handleEditProfile} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  value={editData.name}
                  onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Idade
                </label>
                <input
                  type="number"
                  value={editData.age}
                  onChange={(e) => setEditData({ ...editData, age: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Sua idade"
                  min="13"
                  max="100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  value={editData.email}
                  onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-xl transition-colors min-h-[44px]"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors min-h-[44px]"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de Migração */}
      <MigrationModal 
        isOpen={showMigrationModal}
        onClose={() => setShowMigrationModal(false)}
      />
    </div>
  )
}