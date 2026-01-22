'use client'

import { useState } from 'react'
import { ArrowLeft, Bell, Droplets, Moon, Heart, Sparkles, Save } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function NotificacoesPage() {
  const router = useRouter()
  const [notifications, setNotifications] = useState({
    agua: { enabled: true, times: ['08:00', '12:00', '16:00', '20:00'] },
    sono: { enabled: true, time: '22:00' },
    sintomas: { enabled: true, time: '20:00' },
    autocuidado: { enabled: false, time: '19:00' }
  })

  const handleToggle = (type: string) => {
    setNotifications({
      ...notifications,
      [type]: {
        ...notifications[type as keyof typeof notifications],
        enabled: !notifications[type as keyof typeof notifications].enabled
      }
    })
  }

  const handleSave = () => {
    // Aqui salvaria no Supabase
    console.log('Salvando notificações:', notifications)
    router.back()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-400 via-pink-500 to-yellow-400 p-4 text-white">
        <div className="flex items-center space-x-3 mb-2">
          <button onClick={() => router.back()}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <span className="text-lg font-bold">Notificações</span>
        </div>
        <div className="text-sm opacity-90">
          Configure seus lembretes
        </div>
      </div>

      <div className="p-4 space-y-4 max-w-md mx-auto">
        {/* Lembrete de Água */}
        <div className="bg-white rounded-[18px] shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Droplets className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Lembrete de Água</h3>
                <p className="text-sm text-gray-600">4 vezes ao dia</p>
              </div>
            </div>
            <button
              onClick={() => handleToggle('agua')}
              className={`w-12 h-6 rounded-full transition-colors ${
                notifications.agua.enabled ? 'bg-[#F25D8E]' : 'bg-gray-300'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                notifications.agua.enabled ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
          {notifications.agua.enabled && (
            <div className="grid grid-cols-4 gap-2">
              {notifications.agua.times.map((time, index) => (
                <div key={index} className="text-center p-2 bg-blue-50 rounded-lg">
                  <span className="text-sm font-medium text-blue-800">{time}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Lembrete de Sono */}
        <div className="bg-white rounded-[18px] shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Moon className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Lembrete de Sono</h3>
                <p className="text-sm text-gray-600">Hora de dormir</p>
              </div>
            </div>
            <button
              onClick={() => handleToggle('sono')}
              className={`w-12 h-6 rounded-full transition-colors ${
                notifications.sono.enabled ? 'bg-[#F25D8E]' : 'bg-gray-300'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                notifications.sono.enabled ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
          {notifications.sono.enabled && (
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <span className="text-lg font-semibold text-purple-800">{notifications.sono.time}</span>
            </div>
          )}
        </div>

        {/* Lembrete de Sintomas */}
        <div className="bg-white rounded-[18px] shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Registrar Sintomas</h3>
                <p className="text-sm text-gray-600">Acompanhe seu bem-estar</p>
              </div>
            </div>
            <button
              onClick={() => handleToggle('sintomas')}
              className={`w-12 h-6 rounded-full transition-colors ${
                notifications.sintomas.enabled ? 'bg-[#F25D8E]' : 'bg-gray-300'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                notifications.sintomas.enabled ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
          {notifications.sintomas.enabled && (
            <div className="text-center p-3 bg-red-50 rounded-lg">
              <span className="text-lg font-semibold text-red-800">{notifications.sintomas.time}</span>
            </div>
          )}
        </div>

        {/* Lembrete de Autocuidado */}
        <div className="bg-white rounded-[18px] shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Momento Autocuidado</h3>
                <p className="text-sm text-gray-600">Tempo para você</p>
              </div>
            </div>
            <button
              onClick={() => handleToggle('autocuidado')}
              className={`w-12 h-6 rounded-full transition-colors ${
                notifications.autocuidado.enabled ? 'bg-[#F25D8E]' : 'bg-gray-300'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                notifications.autocuidado.enabled ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
          {notifications.autocuidado.enabled && (
            <div className="text-center p-3 bg-yellow-50 rounded-lg">
              <span className="text-lg font-semibold text-yellow-800">{notifications.autocuidado.time}</span>
            </div>
          )}
        </div>

        <button
          onClick={handleSave}
          className="w-full bg-[#F25D8E] text-white py-3 rounded-full font-medium flex items-center justify-center space-x-2 hover:bg-[#E54A7A] transition-colors"
        >
          <Save className="w-5 h-5" />
          <span>Salvar Configurações</span>
        </button>
      </div>
    </div>
  )
}