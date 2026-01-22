'use client'

import { useState } from 'react'
import { Calendar, Heart, Bell, User, Plus } from 'lucide-react'

export default function CicloPage() {
  const [cycleDay, setCycleDay] = useState(2)
  const [nextPeriod, setNextPeriod] = useState(26)
  const [ovulation, setOvulation] = useState(12)

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
          Acompanhe seu ciclo
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Lembretes de Hoje */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
              <Bell className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-semibold text-gray-800">Lembretes de Hoje</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Lembre-se de beber água e descansar bem durante a menstruação.
          </p>
        </div>

        {/* Próxima Menstruação */}
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl shadow-md p-4">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
              <Calendar className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-semibold text-gray-800">Próxima menstruação</h3>
          </div>
          <p className="text-2xl font-bold text-gray-800 mb-1">{nextPeriod} dias</p>
          <p className="text-gray-600 text-sm">Previsão para 22 de novembro</p>
        </div>

        {/* Ovulação */}
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl shadow-md p-4">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <h3 className="font-semibold text-gray-800">Ovulação</h3>
          </div>
          <p className="text-2xl font-bold text-gray-800 mb-1">{ovulation} dias</p>
          <p className="text-gray-600 text-sm">Período fértil em 8 de novembro</p>
        </div>

        {/* Dia do Ciclo */}
        <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-xl shadow-md p-4">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">{cycleDay}</span>
            </div>
            <h3 className="font-semibold text-gray-800">Dia do ciclo</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Você está no {cycleDay}º dia do seu ciclo menstrual
          </p>
        </div>

        {/* Botão Registrar Menstruação */}
        <div className="pt-4">
          <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-4 px-6 rounded-xl shadow-md flex items-center justify-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Registrar menstruação</span>
          </button>
        </div>
      </div>
    </div>
  )
}