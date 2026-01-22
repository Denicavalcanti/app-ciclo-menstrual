'use client'

import { useState } from 'react'
import { ArrowLeft, HelpCircle, ChevronDown, ChevronUp, Mail, MessageCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function AjudaPage() {
  const router = useRouter()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Como funciona o cálculo do ciclo?",
      answer: "O app calcula seu ciclo com base nas datas que você registra. Utilizamos algoritmos que consideram a duração média do seu ciclo e fazem previsões personalizadas para você."
    },
    {
      question: "Posso confiar nas previsões?",
      answer: "As previsões são estimativas baseadas no seu histórico. Quanto mais dados você registrar, mais precisas elas se tornam. Lembre-se que cada corpo é único e variações são normais."
    },
    {
      question: "Como registrar sintomas?",
      answer: "Vá na aba 'Saúde' e toque em 'Registrar sintomas'. Você pode adicionar informações sobre humor, sintomas físicos, fluxo e muito mais."
    },
    {
      question: "Meus dados estão seguros?",
      answer: "Sim! Todos os seus dados são criptografados e armazenados com segurança. Não compartilhamos informações pessoais com terceiros."
    },
    {
      question: "Como alterar as configurações do ciclo?",
      answer: "Acesse 'Perfil' > 'Configurações do Ciclo'. Lá você pode ajustar a duração do seu ciclo, menstruação e outras configurações."
    },
    {
      question: "Posso usar o app para contracepção?",
      answer: "O CICLO é uma ferramenta de acompanhamento, não um método contraceptivo. Para questões de contracepção, sempre consulte um profissional de saúde."
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-400 via-pink-500 to-yellow-400 p-4 text-white">
        <div className="flex items-center space-x-3 mb-2">
          <button onClick={() => router.back()}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <span className="text-lg font-bold">Ajuda e Suporte</span>
        </div>
        <div className="text-sm opacity-90">
          Tire suas dúvidas
        </div>
      </div>

      <div className="p-4 space-y-4 max-w-md mx-auto">
        {/* FAQ */}
        <div className="bg-white rounded-[18px] shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Perguntas Frequentes</h3>
          
          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-100 last:border-b-0 pb-3 last:pb-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left py-2"
                >
                  <span className="font-medium text-gray-800 text-sm">{item.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contato */}
        <div className="bg-white rounded-[18px] shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Entre em Contato</h3>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Email</h4>
                <p className="text-sm text-gray-600">suporte@cicloapp.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Chat</h4>
                <p className="text-sm text-gray-600">Disponível das 9h às 18h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dicas de Uso */}
        <div className="bg-white rounded-[18px] shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Dicas de Uso</h3>
          
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-xs font-bold text-pink-600">1</span>
              </div>
              <p className="text-sm text-gray-600">
                Registre sua menstruação todos os meses para previsões mais precisas
              </p>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-xs font-bold text-pink-600">2</span>
              </div>
              <p className="text-sm text-gray-600">
                Anote sintomas e humor para entender melhor seu corpo
              </p>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-xs font-bold text-pink-600">3</span>
              </div>
              <p className="text-sm text-gray-600">
                Configure lembretes para não esquecer de registrar informações
              </p>
            </div>
          </div>
        </div>

        {/* Informação Adicional */}
        <div className="bg-yellow-50 rounded-[18px] p-4">
          <h4 className="font-medium text-yellow-800 mb-2">💡 Precisa de Mais Ajuda?</h4>
          <p className="text-sm text-yellow-700">
            Nossa equipe está sempre disponível para ajudar. Não hesite em entrar em contato conosco!
          </p>
        </div>
      </div>
    </div>
  )
}