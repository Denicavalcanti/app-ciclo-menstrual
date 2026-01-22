'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function SonoEHormoniosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4">
        <div className="flex items-center mb-4">
          <Link href="/" className="mr-3">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-bold">Sono e Hormônios</h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="text-center mb-6">
            <span className="text-6xl mb-4 block">😴</span>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Como o Ciclo Afeta seu Sono</h2>
            <p className="text-gray-600">Entenda a relação entre hormônios femininos e qualidade do sono</p>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-4">
              <h3 className="text-lg font-bold text-blue-800 mb-3">🌙 Fase Menstrual</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>O que acontece:</strong> Queda de estrogênio e progesterona</p>
                <p><strong>Efeitos no sono:</strong> Sono mais leve, possíveis despertares noturnos</p>
                <p><strong>Dicas:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Use bolsa de água quente para relaxar</li>
                  <li>• Evite cafeína após 14h</li>
                  <li>• Mantenha o quarto mais fresco</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-4">
              <h3 className="text-lg font-bold text-green-800 mb-3">🌱 Fase Folicular</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>O que acontece:</strong> Estrogênio começa a subir</p>
                <p><strong>Efeitos no sono:</strong> Melhora gradual da qualidade do sono</p>
                <p><strong>Dicas:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Aproveite para estabelecer rotina de sono</li>
                  <li>• Pratique exercícios matinais</li>
                  <li>• Exponha-se à luz natural pela manhã</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-4">
              <h3 className="text-lg font-bold text-yellow-800 mb-3">🥚 Ovulação</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>O que acontece:</strong> Pico de estrogênio e LH</p>
                <p><strong>Efeitos no sono:</strong> Sono geralmente de boa qualidade</p>
                <p><strong>Dicas:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Mantenha horários regulares</li>
                  <li>• Aproveite a energia extra durante o dia</li>
                  <li>• Evite telas 1h antes de dormir</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-4">
              <h3 className="text-lg font-bold text-purple-800 mb-3">🌙 Fase Lútea</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>O que acontece:</strong> Progesterona alta, depois queda</p>
                <p><strong>Efeitos no sono:</strong> Sonolência diurna, sono fragmentado</p>
                <p><strong>Dicas:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Permita-se dormir mais cedo</li>
                  <li>• Evite refeições pesadas à noite</li>
                  <li>• Pratique técnicas de relaxamento</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="bg-indigo-50 rounded-xl p-4">
              <h3 className="text-lg font-bold text-indigo-800 mb-3">🛏️ Higiene do Sono</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Horário fixo:</strong> Durma e acorde sempre no mesmo horário</li>
                <li>• <strong>Ambiente:</strong> Quarto escuro, silencioso e fresco (18-21°C)</li>
                <li>• <strong>Rotina:</strong> Atividades relaxantes antes de dormir</li>
                <li>• <strong>Evitar:</strong> Telas, cafeína e álcool antes de dormir</li>
              </ul>
            </div>

            <div className="p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl">
              <h3 className="text-lg font-bold text-gray-800 mb-2">💡 Sinais de Alerta</h3>
              <p className="text-gray-700 text-sm mb-2">Procure ajuda médica se tiver:</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Insônia persistente por mais de 2 semanas</li>
                <li>• Sonolência excessiva durante o dia</li>
                <li>• Ronco alto ou pausas na respiração</li>
                <li>• Movimentos involuntários das pernas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}