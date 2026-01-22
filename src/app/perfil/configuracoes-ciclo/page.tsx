'use client'

import { useState } from 'react'
import { ArrowLeft, Save } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function ConfiguracoesCicloPage() {
  const router = useRouter()
  const [cycleSettings, setCycleSettings] = useState({
    cycleDuration: 28,
    menstruationDuration: 5,
    lutealPhase: 14,
    ovulationDay: 14
  })

  const handleSave = () => {
    // Aqui salvaria no Supabase
    console.log('Salvando configurações:', cycleSettings)
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
          <span className="text-lg font-bold">Configurações do Ciclo</span>
        </div>
        <div className="text-sm opacity-90">
          Ajuste as informações do seu ciclo
        </div>
      </div>

      <div className="p-4 space-y-4 max-w-md mx-auto">
        <div className="bg-white rounded-[18px] shadow-sm p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Configurações Básicas</h3>
          
          <div className="space-y-6">
            {/* Duração do Ciclo */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duração do Ciclo (dias)
              </label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setCycleSettings({...cycleSettings, cycleDuration: Math.max(21, cycleSettings.cycleDuration - 1)})}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg font-bold"
                >
                  -
                </button>
                <span className="text-2xl font-bold text-gray-800 w-12 text-center">
                  {cycleSettings.cycleDuration}
                </span>
                <button
                  onClick={() => setCycleSettings({...cycleSettings, cycleDuration: Math.min(45, cycleSettings.cycleDuration + 1)})}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg font-bold"
                >
                  +
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">Entre 21 e 45 dias</p>
            </div>

            {/* Duração da Menstruação */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duração da Menstruação (dias)
              </label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setCycleSettings({...cycleSettings, menstruationDuration: Math.max(2, cycleSettings.menstruationDuration - 1)})}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg font-bold"
                >
                  -
                </button>
                <span className="text-2xl font-bold text-gray-800 w-12 text-center">
                  {cycleSettings.menstruationDuration}
                </span>
                <button
                  onClick={() => setCycleSettings({...cycleSettings, menstruationDuration: Math.min(10, cycleSettings.menstruationDuration + 1)})}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg font-bold"
                >
                  +
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">Entre 2 e 10 dias</p>
            </div>

            {/* Fase Lútea */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fase Lútea (dias)
              </label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setCycleSettings({...cycleSettings, lutealPhase: Math.max(10, cycleSettings.lutealPhase - 1)})}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg font-bold"
                >
                  -
                </button>
                <span className="text-2xl font-bold text-gray-800 w-12 text-center">
                  {cycleSettings.lutealPhase}
                </span>
                <button
                  onClick={() => setCycleSettings({...cycleSettings, lutealPhase: Math.min(18, cycleSettings.lutealPhase + 1)})}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg font-bold"
                >
                  +
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">Entre 10 e 18 dias</p>
            </div>
          </div>

          <button
            onClick={handleSave}
            className="w-full bg-[#F25D8E] text-white py-3 rounded-full font-medium mt-8 flex items-center justify-center space-x-2 hover:bg-[#E54A7A] transition-colors"
          >
            <Save className="w-5 h-5" />
            <span>Salvar Configurações</span>
          </button>
        </div>

        {/* Informações Adicionais */}
        <div className="bg-blue-50 rounded-[18px] p-4">
          <h4 className="font-medium text-blue-800 mb-2">💡 Dica</h4>
          <p className="text-sm text-blue-700">
            Essas configurações ajudam a personalizar suas previsões. Você pode ajustá-las a qualquer momento conforme conhece melhor seu corpo.
          </p>
        </div>
      </div>
    </div>
  )
}