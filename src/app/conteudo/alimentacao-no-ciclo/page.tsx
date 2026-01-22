'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function AlimentacaoNoCicloPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4">
        <div className="flex items-center mb-4">
          <Link href="/" className="mr-3">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-bold">Alimentação no Ciclo</h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="text-center mb-6">
            <span className="text-6xl mb-4 block">🥗</span>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Nutrição Durante o Ciclo</h2>
            <p className="text-gray-600">Descubra como se alimentar melhor em cada fase do seu ciclo menstrual</p>
          </div>

          <div className="space-y-6">
            <div className="bg-pink-50 rounded-xl p-4">
              <h3 className="text-lg font-bold text-pink-800 mb-3">🩸 Fase Menstrual (Dias 1-5)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Ferro:</strong> Carnes vermelhas, espinafre, feijão</li>
                <li>• <strong>Vitamina C:</strong> Laranja, morango, kiwi</li>
                <li>• <strong>Magnésio:</strong> Chocolate amargo, nozes, abacate</li>
                <li>• <strong>Hidratação:</strong> Chás quentes, água com limão</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-4">
              <h3 className="text-lg font-bold text-green-800 mb-3">🌱 Fase Folicular (Dias 1-13)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Proteínas:</strong> Ovos, peixes, leguminosas</li>
                <li>• <strong>Carboidratos complexos:</strong> Aveia, quinoa, batata doce</li>
                <li>• <strong>Antioxidantes:</strong> Frutas vermelhas, chá verde</li>
                <li>• <strong>Gorduras boas:</strong> Azeite, castanhas, salmão</li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-xl p-4">
              <h3 className="text-lg font-bold text-yellow-800 mb-3">🥚 Ovulação (Dia 14)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Fibras:</strong> Vegetais folhosos, frutas com casca</li>
                <li>• <strong>Zinco:</strong> Sementes de abóbora, carne bovina</li>
                <li>• <strong>Ômega-3:</strong> Sardinha, chia, linhaça</li>
                <li>• <strong>Folato:</strong> Brócolis, aspargos, lentilha</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-4">
              <h3 className="text-lg font-bold text-purple-800 mb-3">🌙 Fase Lútea (Dias 15-28)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Complexo B:</strong> Cereais integrais, banana</li>
                <li>• <strong>Cálcio:</strong> Iogurte, queijo, gergelim</li>
                <li>• <strong>Triptofano:</strong> Peru, leite, amendoim</li>
                <li>• <strong>Evitar:</strong> Excesso de sal, açúcar, cafeína</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl">
            <h3 className="text-lg font-bold text-gray-800 mb-2">💡 Dicas Importantes</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Mantenha refeições regulares para estabilizar hormônios</li>
              <li>• Beba pelo menos 2L de água por dia</li>
              <li>• Evite dietas restritivas durante a menstruação</li>
              <li>• Ouça seu corpo e seus desejos alimentares</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}