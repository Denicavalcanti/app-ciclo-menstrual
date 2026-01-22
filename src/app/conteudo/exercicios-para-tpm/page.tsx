'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ExerciciosParaTpmPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4">
        <div className="flex items-center mb-4">
          <Link href="/" className="mr-3">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-bold">Exercícios para TPM</h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="text-center mb-6">
            <span className="text-6xl mb-4 block">🏃‍♀️</span>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Atividades para Aliviar a TPM</h2>
            <p className="text-gray-600">Exercícios que ajudam a reduzir os sintomas da tensão pré-menstrual</p>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-4">
              <h3 className="text-lg font-bold text-blue-800 mb-3">🧘‍♀️ Exercícios de Baixo Impacto</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Yoga:</strong> Posturas que aliviam cólicas e tensão</li>
                <li>• <strong>Pilates:</strong> Fortalece o core e melhora postura</li>
                <li>• <strong>Caminhada:</strong> 20-30 minutos diários</li>
                <li>• <strong>Natação:</strong> Exercício completo e relaxante</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-4">
              <h3 className="text-lg font-bold text-green-800 mb-3">💪 Exercícios de Força Leve</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Alongamentos:</strong> Foco em quadris e lombar</li>
                <li>• <strong>Exercícios com peso corporal:</strong> Agachamentos suaves</li>
                <li>• <strong>Resistência com elástico:</strong> Movimentos controlados</li>
                <li>• <strong>Exercícios de respiração:</strong> 4-7-8 respiração</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-4">
              <h3 className="text-lg font-bold text-purple-800 mb-3">🎯 Exercícios Específicos</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Para Cólicas:</h4>
                  <p className="text-gray-600 text-sm">Posição do gato-vaca, torção espinal suave, posição da criança</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Para Inchaço:</h4>
                  <p className="text-gray-600 text-sm">Elevação das pernas, caminhada, exercícios de drenagem linfática</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Para Humor:</h4>
                  <p className="text-gray-600 text-sm">Dança, exercícios aeróbicos leves, meditação em movimento</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-4">
              <h3 className="text-lg font-bold text-red-800 mb-3">⚠️ O que Evitar</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Exercícios intensos:</strong> Podem aumentar a fadiga</li>
                <li>• <strong>Levantamento de peso pesado:</strong> Pode piorar cólicas</li>
                <li>• <strong>Exercícios de alto impacto:</strong> Corrida intensa, jump</li>
                <li>• <strong>Treinos longos:</strong> Prefira sessões de 20-40 minutos</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl">
            <h3 className="text-lg font-bold text-gray-800 mb-2">💡 Dicas Importantes</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Ouça seu corpo e ajuste a intensidade conforme necessário</li>
              <li>• Mantenha-se hidratada durante os exercícios</li>
              <li>• Use roupas confortáveis e absorventes</li>
              <li>• Pratique exercícios regularmente, não apenas durante a TPM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}