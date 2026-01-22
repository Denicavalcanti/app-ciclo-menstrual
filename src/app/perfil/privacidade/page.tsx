'use client'

import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function PrivacidadePage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-400 via-pink-500 to-yellow-400 p-4 text-white">
        <div className="flex items-center space-x-3 mb-2">
          <button onClick={() => router.back()}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <span className="text-lg font-bold">Privacidade</span>
        </div>
        <div className="text-sm opacity-90">
          Segurança dos seus dados
        </div>
      </div>

      <div className="p-4 space-y-4 max-w-md mx-auto">
        {/* Segurança dos Dados */}
        <div className="bg-white rounded-[18px] shadow-sm p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Segurança dos Dados</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Seus dados são criptografados e armazenados com segurança. Utilizamos protocolos de segurança avançados para proteger suas informações pessoais e de saúde.
          </p>
        </div>

        {/* Criptografia */}
        <div className="bg-white rounded-[18px] shadow-sm p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Lock className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Criptografia</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Todas as informações são criptografadas tanto em trânsito quanto em repouso. Seus dados do ciclo menstrual são tratados com o mais alto nível de confidencialidade.
          </p>
        </div>

        {/* Controle de Acesso */}
        <div className="bg-white rounded-[18px] shadow-sm p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <Eye className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Controle de Acesso</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Apenas você tem acesso aos seus dados. Não compartilhamos informações pessoais com terceiros sem seu consentimento explícito.
          </p>
        </div>

        {/* Armazenamento Local */}
        <div className="bg-white rounded-[18px] shadow-sm p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <Database className="w-5 h-5 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Armazenamento</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Seus dados são armazenados em servidores seguros com backup automático. Você pode exportar ou excluir seus dados a qualquer momento.
          </p>
        </div>

        {/* Conformidade */}
        <div className="bg-white rounded-[18px] shadow-sm p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
              <UserCheck className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Conformidade</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Estamos em conformidade com a LGPD (Lei Geral de Proteção de Dados) e seguimos as melhores práticas internacionais de privacidade.
          </p>
        </div>

        {/* Informação Adicional */}
        <div className="bg-pink-50 rounded-[18px] p-4">
          <h4 className="font-medium text-pink-800 mb-2">🔒 Sua Privacidade é Prioridade</h4>
          <p className="text-sm text-pink-700">
            Entendemos a sensibilidade dos dados de saúde feminina. Por isso, implementamos as mais rigorosas medidas de segurança para proteger sua privacidade.
          </p>
        </div>
      </div>
    </div>
  )
}