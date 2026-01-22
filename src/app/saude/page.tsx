'use client'

import { Heart, Bell, User, Activity, Thermometer, Droplets, Moon } from 'lucide-react'

export default function SaudePage() {
  const healthMetrics = [
    {
      icon: <Activity className="w-6 h-6 text-pink-500" />,
      title: 'Humor',
      value: 'Bom',
      description: 'Como você está se sentindo hoje?',
      color: 'from-pink-100 to-rose-100'
    },
    {
      icon: <Thermometer className="w-6 h-6 text-orange-500" />,
      title: 'Temperatura',
      value: '36.5°C',
      description: 'Temperatura basal registrada',
      color: 'from-orange-100 to-yellow-100'
    },
    {
      icon: <Droplets className="w-6 h-6 text-blue-500" />,
      title: 'Fluxo',
      value: 'Moderado',
      description: 'Intensidade do fluxo menstrual',
      color: 'from-blue-100 to-cyan-100'
    },
    {
      icon: <Moon className="w-6 h-6 text-purple-500" />,
      title: 'Sono',
      value: '7h 30min',
      description: 'Qualidade do sono na noite passada',
      color: 'from-purple-100 to-indigo-100'
    }
  ]

  const symptoms = [
    'Cólicas leves',
    'Dor de cabeça',
    'Inchaço',
    'Mudanças de humor',
    'Fadiga',
    'Sensibilidade nos seios'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-400 via-pink-500 to-yellow-400 p-4 text-white">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center space-x-2">
            <Heart className="w-6 h-6" />
            <span className="text-lg font-bold">CICLO</span>
          </div>
          <div className="flex items-center space-x-3">
            <Bell className="w-5 h-5" />
            <User className="w-5 h-5" />
          </div>
        </div>
        <div className="text-sm opacity-90">
          Monitore sua saúde
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Métricas de Saúde */}
        <div className="space-y-3">
          {healthMetrics.map((metric, index) => (
            <div key={index} className={`bg-gradient-to-r ${metric.color} rounded-xl shadow-md p-4`}>
              <div className="flex items-center space-x-3">
                <div className="bg-white rounded-full p-2 shadow-sm">
                  {metric.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800">{metric.title}</h3>
                    <span className="text-lg font-bold text-gray-800">{metric.value}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{metric.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sintomas */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h3 className="font-semibold text-gray-800 mb-4">Sintomas Comuns</h3>
          <div className="grid grid-cols-2 gap-2">
            {symptoms.map((symptom, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                <span className="text-sm text-gray-700">{symptom}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dicas de Bem-estar */}
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl shadow-md p-4">
          <h3 className="font-semibold text-gray-800 mb-3">💡 Dica do Dia</h3>
          <p className="text-gray-700 text-sm">
            Durante a menstruação, pratique exercícios leves como caminhada ou yoga para aliviar cólicas e melhorar o humor.
          </p>
        </div>

        {/* Botão de Registro */}
        <div className="pt-4">
          <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-4 px-6 rounded-xl shadow-md">
            Registrar sintomas de hoje
          </button>
        </div>
      </div>
    </div>
  )
}