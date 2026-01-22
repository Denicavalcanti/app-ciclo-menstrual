'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft, Heart, Bell, User } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function ConteudoPage() {
  const router = useRouter()
  const params = useParams()
  const [conteudo, setConteudo] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      loadConteudo(params.id as string)
    }
  }, [params.id])

  const loadConteudo = async (id: string) => {
    try {
      const { data, error } = await supabase
        .from('conteudos')
        .select('*')
        .eq('id', id)
        .single()

      if (error) {
        console.error('Erro ao carregar conteúdo:', error)
        // Fallback para conteúdo estático se não encontrar no banco
        setConteudo({
          id: id,
          titulo: 'Contraceptivos Naturais',
          subtitulo: 'Métodos Naturais',
          icone: '🌿',
          conteudo_completo: `
            <h2>Contraceptivos Naturais: Uma Abordagem Consciente</h2>
            
            <p>Os métodos contraceptivos naturais são baseados no conhecimento do ciclo menstrual e na identificação dos períodos férteis e inférteis da mulher.</p>
            
            <h3>Principais Métodos:</h3>
            
            <h4>1. Método da Temperatura Basal</h4>
            <p>Consiste em medir a temperatura corporal todos os dias pela manhã, antes de se levantar. Após a ovulação, a temperatura aumenta ligeiramente.</p>
            
            <h4>2. Método do Muco Cervical</h4>
            <p>Observação das mudanças no muco cervical ao longo do ciclo. Durante o período fértil, o muco torna-se mais claro e elástico.</p>
            
            <h4>3. Método do Calendário</h4>
            <p>Baseado no registro dos ciclos menstruais para identificar os dias férteis. Requer ciclos regulares para maior eficácia.</p>
            
            <h4>4. Método Sintotérmico</h4>
            <p>Combina a observação da temperatura basal, muco cervical e outros sinais corporais para maior precisão.</p>
            
            <h3>Vantagens:</h3>
            <ul>
              <li>Sem efeitos colaterais hormonais</li>
              <li>Aumenta o autoconhecimento corporal</li>
              <li>Pode ser usado para engravidar ou evitar gravidez</li>
              <li>Sem custos com medicamentos</li>
            </ul>
            
            <h3>Considerações Importantes:</h3>
            <ul>
              <li>Requer disciplina e consistência</li>
              <li>Eficácia depende do uso correto</li>
              <li>Não protege contra ISTs</li>
              <li>Pode ser menos eficaz em ciclos irregulares</li>
            </ul>
            
            <h3>Dicas para Sucesso:</h3>
            <p>• Mantenha um registro detalhado dos sinais corporais</p>
            <p>• Busque orientação profissional para aprender corretamente</p>
            <p>• Seja paciente - pode levar alguns ciclos para dominar o método</p>
            <p>• Considere usar aplicativos especializados para facilitar o registro</p>
            
            <p><strong>Importante:</strong> Consulte sempre um profissional de saúde para orientação personalizada sobre métodos contraceptivos.</p>
          `
        })
      } else {
        setConteudo(data)
      }
    } catch (error) {
      console.error('Erro ao carregar conteúdo:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F25D8E] mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando conteúdo...</p>
        </div>
      </div>
    )
  }

  if (!conteudo) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Conteúdo não encontrado</p>
          <button
            onClick={() => router.back()}
            className="mt-4 bg-[#F25D8E] text-white px-6 py-2 rounded-full hover:bg-[#E54A7A] transition-colors"
          >
            Voltar
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pb-20">
      {/* Header com navegação */}
      <div className="bg-gradient-to-r from-pink-400 via-pink-500 to-yellow-400 p-4 text-white">
        <div className="flex items-center justify-between mb-2">
          <button 
            onClick={() => router.back()}
            className="p-2 rounded-full hover:bg-white/20 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <h1 className="text-lg font-bold text-center flex-1">
            {conteudo.titulo}
          </h1>
          
          <div className="flex items-center space-x-3">
            <Bell className="w-5 h-5" />
            <User className="w-5 h-5" />
          </div>
        </div>
        <div className="text-sm opacity-90 text-center">
          {conteudo.subtitulo}
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-4">
        <div className="bg-white rounded-xl shadow-md p-6 max-w-4xl mx-auto">
          {/* Ícone e título */}
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">{conteudo.icone}</div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{conteudo.titulo}</h1>
            <p className="text-pink-500 font-medium">{conteudo.subtitulo}</p>
          </div>

          {/* Conteúdo completo */}
          <div 
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ 
              __html: conteudo.conteudo_completo?.replace(/\n/g, '<br>') || 'Conteúdo não disponível.' 
            }}
            style={{
              fontSize: '16px',
              lineHeight: '1.6'
            }}
          />
        </div>
      </div>
    </div>
  )
}