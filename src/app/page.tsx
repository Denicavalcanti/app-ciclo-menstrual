'use client'

import { useState, useEffect } from 'react'
import { Calendar, Heart, Bell, User, ChevronLeft, ChevronRight, Lightbulb } from 'lucide-react'

export default function HomePage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [contentItems, setContentItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate)
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1)
    } else {
      newDate.setMonth(newDate.getMonth() + 1)
    }
    setCurrentDate(newDate)
  }

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()
    
    const days = []
    
    // Dias vazios do início
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // Dias do mês
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day)
    }
    
    return days
  }

  useEffect(() => {
    loadStaticContent()
  }, [])

  const loadStaticContent = () => {
    setContentItems([
      {
        id: '1',
        icone: '🍎',
        titulo: 'Alimentação no Ciclo',
        subtitulo: 'Nutrição',
        descricao: 'Dicas de alimentação para cada fase',
        conteudo_completo: 'Conteúdo completo sobre alimentação...'
      },
      {
        id: '2',
        icone: '🧘‍♀️',
        titulo: 'Exercícios para TPM',
        subtitulo: 'Bem-estar',
        descricao: 'Atividades que aliviam sintomas',
        conteudo_completo: 'Conteúdo completo sobre exercícios...'
      },
      {
        id: '3',
        icone: '😴',
        titulo: 'Sono e Hormônios',
        subtitulo: 'Descanso',
        descricao: 'Como o ciclo afeta seu sono',
        conteudo_completo: 'Conteúdo completo sobre sono...'
      },
      {
        id: '4',
        icone: '💊',
        titulo: 'Suplementação',
        subtitulo: 'Saúde',
        descricao: 'Vitaminas importantes para mulheres',
        conteudo_completo: 'Conteúdo completo sobre suplementação...'
      }
    ])
    setLoading(false)
  }

  const handleContentClick = (contentId: string) => {
    console.log('Conteúdo clicado:', contentId)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pb-20">
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
          {formatDate(new Date())}
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Card de Menstruação */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="font-semibold text-gray-800">Menstruação</span>
            </div>
            <span className="text-sm text-gray-600">Dia 2 de 5</span>
          </div>
          <p className="text-gray-600 text-sm">
            Sua menstruação começou há 2 dias. Lembre-se de se hidratar bem.
          </p>
        </div>

        {/* Card do Calendário */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">
              {currentDate.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
            </h3>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => navigateMonth('prev')}
                className="p-1 rounded-full hover:bg-gray-100 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button 
                onClick={() => navigateMonth('next')}
                className="p-1 rounded-full hover:bg-gray-100 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
          
          {/* Calendário */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, index) => (
              <div key={index} className="text-center text-xs font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {getDaysInMonth(currentDate).map((day, index) => (
              <div key={index} className="aspect-square flex items-center justify-center">
                {day && (
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full text-sm min-h-[44px] min-w-[44px] ${
                    day === new Date().getDate() && 
                    currentDate.getMonth() === new Date().getMonth() &&
                    currentDate.getFullYear() === new Date().getFullYear()
                      ? 'bg-pink-500 text-white font-semibold' 
                      : day >= 1 && day <= 5 
                        ? 'bg-red-100 text-red-600' 
                        : day >= 12 && day <= 16 
                          ? 'bg-green-100 text-green-600'
                          : 'text-gray-700 hover:bg-gray-100'
                  }`}>
                    {day}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Conteúdo do Dia */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex items-center space-x-2 mb-4">
            <Lightbulb className="w-5 h-5 text-yellow-500" />
            <h3 className="font-semibold text-gray-800">Conteúdo do Dia</h3>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-3 animate-pulse">
                  <div className="w-8 h-8 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-1"></div>
                  <div className="h-3 bg-gray-200 rounded mb-1"></div>
                  <div className="h-3 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {contentItems.map((item, index) => (
                <div 
                  key={item.id || index} 
                  className="bg-gray-50 rounded-lg p-3 cursor-pointer hover:bg-gray-100 transition-colors min-h-[44px]"
                  onClick={() => handleContentClick(item.id)}
                >
                  <div className="text-2xl mb-2">{item.icone}</div>
                  <h4 className="font-semibold text-sm text-gray-800 mb-1">{item.titulo}</h4>
                  <p className="text-xs text-pink-500 font-medium mb-1">{item.subtitulo}</p>
                  <p className="text-xs text-gray-600">{item.descricao}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
