'use client'

import { useParams } from 'next/navigation'
import { ArrowLeft, BookOpen, Apple, Dumbbell, Droplets, Activity, Moon, Heart } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase, isSupabaseConfigured, Conteudo } from '@/lib/supabase'

const conteudosFallback: Conteudo[] = [
  {
    id: '1',
    titulo: 'Alimentação no Ciclo',
    categoria: 'Nutrição',
    cor: '#FF6B9D',
    icone: 'Apple',
    resumo: 'Descubra como nutrir seu corpo em cada fase do ciclo menstrual.',
    conteudo_completo: `**Nutra seu corpo em sintonia com seu ciclo**

Cada fase do seu ciclo menstrual tem necessidades nutricionais específicas. Quando você alinha sua alimentação com essas mudanças hormonais, pode reduzir sintomas desconfortáveis e aumentar sua energia natural.

**Fase Menstrual (Dias 1-5)**
Durante a menstruação, seu corpo trabalha intensamente e perde nutrientes importantes.

• Ferro: carnes magras, feijão preto, espinafre
• Magnésio: chocolate amargo (70% cacau), castanhas
• Vitamina C: laranja, morango, kiwi (melhora absorção do ferro)
• Líquidos: chás mornos, água com limão

**Fase Folicular (Dias 6-13)**
Seus hormônios estão baixos, é hora de energizar o corpo.

• Proteínas: ovos, peixes, quinoa
• Vegetais crucíferos: brócolis, couve-flor, rúcula
• Sementes: linhaça, chia (ricas em ômega-3)
• Frutas cítricas: limão, laranja, acerola

**Fase Ovulatória (Dias 14-16)**
Seu corpo se prepara para a ovulação, apoie esse processo.

• Antioxidantes: frutas vermelhas, açaí
• Folato: vegetais verdes escuros, aspargos
• Zinco: sementes de abóbora, castanha do Pará
• Fibras: aveia, frutas com casca

**Fase Lútea (Dias 17-28)**
Controle os sintomas da TPM com escolhas inteligentes.

• Magnésio: abacate, banana, amêndoas
• Vitamina B6: batata doce, grão de bico
• Carboidratos complexos: batata, arroz integral
• Evite: excesso de sal, açúcar refinado, cafeína

**Dicas Práticas**
• Faça refeições menores e mais frequentes
• Mantenha-se hidratada (2-3 litros por dia)
• Escute os sinais do seu corpo
• Prepare lanches saudáveis com antecedência`,
    slug: 'alimentacao-ciclo',
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    titulo: 'Exercícios para TPM',
    categoria: 'Bem-estar',
    cor: '#8B5CF6',
    icone: 'Dumbbell',
    resumo: 'Movimente-se de forma inteligente para aliviar os sintomas da TPM.',
    conteudo_completo: `**Movimento como medicina natural**

O exercício é uma das ferramentas mais poderosas para combater os sintomas da TPM. Quando você se move, libera endorfinas - os analgésicos naturais do corpo.

**Por que funciona?**
• Reduz cólicas menstruais
• Melhora o humor e diminui irritabilidade
• Alivia inchaço e retenção de líquidos
• Aumenta energia e disposição
• Melhora qualidade do sono

**Exercícios Aeróbicos Leves**
Ideais para liberar endorfinas sem sobrecarregar o corpo.

• Caminhada de 20-30 minutos
• Natação ou hidroginástica
• Dança livre ou aulas de dança
• Ciclismo em ritmo moderado
• Subir e descer escadas

**Yoga e Alongamento**
Posturas específicas que trazem alívio imediato.

• Postura da criança: alivia cólicas e acalma
• Torção espinal: massageia órgãos internos
• Gato-vaca: relaxa lombar e abdômen
• Pernas na parede: melhora circulação
• Respiração profunda: reduz ansiedade

**Exercícios de Força Suave**
Mantenha o tônus muscular sem exagerar.

• Pilates com foco no core
• Exercícios com peso corporal
• Elásticos de resistência
• Agachamentos e lunges leves
• Pranchas modificadas

**Exercícios de Respiração**
Técnicas simples para alívio imediato.

• 4-7-8: inspire por 4, segure por 7, expire por 8
• Respiração diafragmática
• Meditação de 5-10 minutos
• Visualização relaxante

**Dicas Importantes**
• Comece devagar e aumente gradualmente
• Hidrate-se antes, durante e depois
• Use roupas confortáveis
• Pare se sentir dor intensa
• Seja gentil consigo mesma`,
    slug: 'exercicios-tpm',
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    titulo: 'Sono e Hormônios',
    categoria: 'Descanso',
    cor: '#6366F1',
    icone: 'Moon',
    resumo: 'Entenda como o sono afeta seus hormônios e vice-versa.',
    conteudo_completo: `**O sono é o reset do seu corpo**

Seus hormônios e o sono trabalham em perfeita sintonia. Quando um está desequilibrado, o outro também sofre. Compreender essa relação é fundamental para sua saúde.

**Como os hormônios afetam o sono**

**Estrogênio**
• Níveis altos: sono mais profundo
• Níveis baixos: insônia e sono fragmentado
• Queda antes da menstruação: dificuldade para dormir

**Progesterona**
• Efeito sedativo natural
• Promove relaxamento
• Queda na TPM causa insônia

**Cortisol**
• Alto à noite: impede o adormecer
• Desequilibrado: acordar durante a madrugada
• Estresse crônico: ciclo vicioso

**Melatonina**
• Regulada pela luz
• Produção diminui com a idade
• Afetada por telas e luz artificial

**Fases do ciclo e padrões de sono**

**Fase Menstrual**
• Sono pode ser mais pesado
• Cólicas podem interromper o descanso
• Temperatura corporal mais baixa

**Fase Folicular**
• Geralmente melhor qualidade de sono
• Mais energia durante o dia
• Facilidade para adormecer

**Fase Ovulatória**
• Sono pode ficar mais leve
• Possível aumento da libido
• Sonhos mais vívidos

**Fase Lútea**
• Insônia é comum
• Sono fragmentado
• Sonolência durante o dia

**Estratégias para melhor sono**

**Higiene do sono**
• Durma 7-9 horas por noite
• Mantenha horários regulares
• Quarto escuro, silencioso e fresco
• Colchão e travesseiros confortáveis

**Rotina noturna**
• Desligue telas 1 hora antes de dormir
• Banho morno relaxante
• Leitura ou meditação
• Chá de camomila ou melissa

**Durante o dia**
• Exposição à luz solar pela manhã
• Exercícios regulares (não à noite)
• Evite cafeína após 14h
• Refeições leves no jantar

**Suplementos naturais**
• Magnésio: relaxa músculos
• Melatonina: sob orientação médica
• Valeriana: efeito calmante
• L-teanina: reduz ansiedade`,
    slug: 'sono-hormonios',
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    titulo: 'Autocuidado Menstrual',
    categoria: 'Cuidados',
    cor: '#F472B6',
    icone: 'Heart',
    resumo: 'Práticas de amor próprio durante o período menstrual.',
    conteudo_completo: `**Sua menstruação merece cuidado especial**

O período menstrual não é apenas sobre sangramento - é uma oportunidade de se conectar com seu corpo e praticar o autocuidado de forma mais profunda.

**Mudando a perspectiva**
• Menstruação é saúde, não doença
• Cada ciclo é único e válido
• Sintomas são sinais do seu corpo
• Autocuidado não é luxo, é necessidade

**Cuidados físicos essenciais**

**Higiene íntima**
• Use produtos com pH adequado (3,5-5,5)
• Troque absorventes a cada 4 horas
• Prefira calcinha de algodão
• Evite duchas vaginais

**Alívio para cólicas**
• Bolsa de água quente no abdômen
• Massagem circular suave
• Banho morno relaxante
• Posições que aliviam: fetal, joelhos no peito

**Produtos menstruais**
• Absorventes: externos ou internos
• Coletores menstruais: ecológicos e econômicos
• Calcinhas absorventes: conforto total
• Escolha o que faz você se sentir melhor

**Cuidados emocionais**

**Aceite suas emoções**
• Irritabilidade é normal
• Choro pode ser libertador
• Sensibilidade aumentada é natural
• Seja gentil consigo mesma

**Práticas de bem-estar**
• Journaling: escreva seus sentimentos
• Meditação: 5-10 minutos diários
• Respiração consciente
• Gratidão: liste 3 coisas boas do dia

**Nutrição emocional**
• Chocolate amargo: libera endorfinas
• Chás calmantes: camomila, melissa
• Comidas que trazem conforto
• Hidratação constante

**Criando rituais de autocuidado**

**Ritual matinal**
• Alongamento suave
• Chá ou café especial
• Afirmações positivas
• Roupas confortáveis

**Durante o dia**
• Pausas para respirar
• Lanches nutritivos
• Movimento gentil
• Momentos de silêncio

**Ritual noturno**
• Banho relaxante
• Skincare especial
• Leitura inspiradora
• Sono reparador

**Dicas práticas**
• Tenha um kit de emergência sempre
• Use aplicativos para rastrear sintomas
• Comunique suas necessidades
• Celebre seu corpo e sua força
• Lembre-se: você é incrível todos os dias`,
    slug: 'autocuidado-menstrual',
    created_at: new Date().toISOString()
  },
  {
    id: '5',
    titulo: 'Mitos sobre Fertilidade',
    categoria: 'Educação',
    cor: '#22D3EE',
    icone: 'BookOpen',
    resumo: 'Desmistifique crenças sobre fertilidade e conheça os fatos.',
    conteudo_completo: `**Separando fatos de ficção**

Existem muitos mitos sobre fertilidade que podem causar ansiedade desnecessária ou decisões equivocadas. Vamos esclarecer os principais.

**Mito 1: "Só engravida no dia da ovulação"**
**Verdade:** Você pode engravidar até 5 dias antes da ovulação, pois os espermatozoides sobrevivem no trato reprodutivo feminino por esse período.

**Mito 2: "Ciclo irregular significa infertilidade"**
**Verdade:** Ciclos irregulares podem indicar desequilíbrios hormonais, mas não necessariamente infertilidade. Muitas mulheres com ciclos irregulares engravidam naturalmente.

**Mito 3: "Após os 35 anos é impossível engravidar"**
**Verdade:** A fertilidade diminui gradualmente após os 35, mas muitas mulheres engravidam naturalmente nessa idade e além.

**Mito 4: "Pílula anticoncepcional causa infertilidade"**
**Verdade:** A pílula não causa infertilidade. A fertilidade geralmente retorna dentro de 1-3 meses após parar o uso.

**Mito 5: "Estresse impede a gravidez"**
**Verdade:** Embora o estresse extremo possa afetar a ovulação, o estresse normal do dia a dia não impede a gravidez.

**Fatores que realmente afetam a fertilidade**

**Idade**
• Mulheres: declínio gradual após 30, mais acentuado após 35
• Homens: declínio mais lento, mas também ocorre
• Qualidade dos óvulos diminui com o tempo

**Estilo de vida**
• Tabagismo: reduz fertilidade em ambos os sexos
• Álcool em excesso: afeta ovulação e qualidade espermática
• Peso: muito baixo ou muito alto pode afetar hormônios
• Exercício extremo: pode suprimir ovulação

**Condições médicas**
• Síndrome dos ovários policísticos (SOP)
• Endometriose
• Problemas de tireoide
• Diabetes não controlado

**Fatores ambientais**
• Exposição a toxinas
• Radiação
• Alguns medicamentos
• Produtos químicos industriais

**Sinais de fertilidade saudável**

**Ciclo menstrual regular**
• Entre 21-35 dias
• Duração consistente
• Ovulação detectável

**Muco cervical**
• Mudanças ao longo do ciclo
• Clara de ovo próximo à ovulação
• Indica função hormonal adequada

**Outros sinais**
• Energia estável
• Humor equilibrado
• Sono reparador
• Libido saudável

**Quando buscar ajuda**
• Tentando há 12 meses (mulheres até 35 anos)
• Tentando há 6 meses (mulheres acima de 35 anos)
• Ciclos muito irregulares ou ausentes
• Histórico de problemas reprodutivos
• Sintomas de condições como SOP ou endometriose

**Dicas para otimizar fertilidade**
• Mantenha peso saudável
• Pratique exercícios moderados
• Tenha alimentação balanceada
• Tome ácido fólico
• Evite tabaco e álcool em excesso
• Gerencie o estresse
• Faça check-ups regulares`,
    slug: 'mitos-fertilidade',
    created_at: new Date().toISOString()
  },
  {
    id: '6',
    titulo: 'Contraceptivos Naturais',
    categoria: 'Planejamento',
    cor: '#10B981',
    icone: 'Activity',
    resumo: 'Métodos naturais baseados no conhecimento do seu ciclo.',
    conteudo_completo: `**Conhecimento é poder reprodutivo**

Os métodos contraceptivos naturais se baseiam na observação cuidadosa dos sinais que seu corpo emite durante o ciclo menstrual. Quando bem aplicados, podem ser muito eficazes.

**Como funcionam**
• Identificam período fértil
• Baseiam-se em sinais corporais
• Requerem observação diária
• Não usam hormônios ou dispositivos

**Método da Temperatura Basal Corporal (TBC)**

**Como funciona:**
A temperatura corporal aumenta 0,2-0,5°C após a ovulação devido à progesterona.

**Como fazer:**
• Meça temperatura ao acordar, antes de levantar
• Use termômetro específico para TBC
• Anote diariamente em gráfico
• Após 3 dias de temperatura alta, período fértil passou

**Vantagens:**
• Confirma ovulação
• Ajuda a entender padrões
• Sem efeitos colaterais

**Limitações:**
• Não prevê ovulação
• Afetada por febre, álcool, sono irregular
• Requer disciplina diária

**Método do Muco Cervical (Billings)**

**Como funciona:**
O muco cervical muda de consistência ao longo do ciclo.

**Padrões do muco:**
• Pós-menstruação: seco ou pouco muco
• Pré-ovulação: cremoso, pegajoso
• Ovulação: clara de ovo, elástico, abundante
• Pós-ovulação: seco novamente

**Como observar:**
• Verifique ao usar o banheiro
• Observe cor, consistência, quantidade
• Anote mudanças diariamente
• Período fértil: do primeiro muco até 4 dias após pico

**Método Sintotérmico**

**Combina múltiplos sinais:**
• Temperatura basal
• Muco cervical
• Posição do colo do útero
• Sintomas secundários

**Sinais secundários:**
• Dor na ovulação (mittelschmerz)
• Sensibilidade nos seios
• Mudanças no humor
• Aumento da libido

**Vantagens:**
• Maior precisão
• Dupla verificação
• Melhor compreensão do corpo

**Método do Calendário (Ogino-Knaus)**

**Como calcular:**
• Registre ciclos por 6-12 meses
• Ciclo mais curto - 18 = primeiro dia fértil
• Ciclo mais longo - 11 = último dia fértil

**Limitações:**
• Menos preciso
• Baseado apenas em estatísticas
• Não considera variações individuais

**Eficácia dos métodos**
• Uso perfeito: 95-99%
• Uso típico: 76-88%
• Combinação de métodos aumenta eficácia
• Requer educação e prática

**Quem pode usar**
• Mulheres com ciclos regulares
• Casais comprometidos com o método
• Quem pode aceitar gravidez não planejada
• Mulheres que querem conhecer melhor seu corpo

**Contraindicações**
• Ciclos muito irregulares
• Condições que afetam sinais (SOP, tireoide)
• Uso de medicamentos que alteram temperatura
• Situações de vida muito estressantes

**Dicas para sucesso**
• Educação adequada é essencial
• Use aplicativos para registro
• Seja consistente na observação
• Considere orientação profissional
• Tenha paciência para aprender
• Comunique-se com seu parceiro`,
    slug: 'contraceptivos-naturais',
    created_at: new Date().toISOString()
  }
]

const iconMap = {
  BookOpen,
  Apple,
  Dumbbell,
  Droplets,
  Activity,
  Moon,
  Heart
}

export default function ConteudoPage() {
  const params = useParams()
  const slug = params.slug as string
  const [conteudo, setConteudo] = useState<Conteudo | null>(null)
  const [loading, setLoading] = useState(true)
  const [showFullContent, setShowFullContent] = useState(false)

  useEffect(() => {
    async function fetchConteudo() {
      if (!isSupabaseConfigured()) {
        const found = conteudosFallback.find(c => c.slug === slug)
        setConteudo(found || null)
        setLoading(false)
        return
      }

      try {
        const { data, error } = await supabase
          .from('conteudos')
          .select('*')
          .eq('slug', slug)
          .single()

        if (error) {
          console.error('Erro ao buscar conteúdo:', error)
          const found = conteudosFallback.find(c => c.slug === slug)
          setConteudo(found || null)
        } else {
          setConteudo(data)
        }
      } catch (error) {
        console.error('Erro ao conectar com Supabase:', error)
        const found = conteudosFallback.find(c => c.slug === slug)
        setConteudo(found || null)
      } finally {
        setLoading(false)
      }
    }

    fetchConteudo()
  }, [slug])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#F25D8E]"></div>
      </div>
    )
  }

  if (!conteudo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center p-4">
        <div className="text-center bg-white rounded-3xl p-8 shadow-lg">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Conteúdo não encontrado</h1>
          <Link 
            href="/" 
            className="inline-flex items-center space-x-2 bg-[#F25D8E] text-white px-6 py-3 rounded-2xl font-medium hover:bg-[#E14A7A] transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Voltar para Home</span>
          </Link>
        </div>
      </div>
    )
  }

  const IconComponent = iconMap[conteudo.icone as keyof typeof iconMap] || BookOpen

  // Função para renderizar o conteúdo formatado
  const renderContent = (content: string, isPreview: boolean = false) => {
    const paragraphs = content.split('\n').filter(p => p.trim() !== '')
    const previewLimit = isPreview ? 3 : paragraphs.length

    return paragraphs.slice(0, previewLimit).map((paragraph, index) => {
      if (paragraph.trim() === '') return null
      
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <h3 key={index} className="text-lg font-semibold text-gray-900 mt-6 mb-3 first:mt-0">
            {paragraph.replace(/\*\*/g, '')}
          </h3>
        )
      }
      
      if (paragraph.startsWith('• ')) {
        return (
          <div key={index} className="flex items-start space-x-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-[#F25D8E] mt-2 flex-shrink-0"></div>
            <p className="text-gray-700 leading-relaxed flex-1">
              {paragraph.substring(2)}
            </p>
          </div>
        )
      }
      
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-4">
          {paragraph}
        </p>
      )
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header com botão de voltar */}
      <div className="bg-white/80 backdrop-blur-sm px-4 py-4 shadow-sm sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <Link 
            href="/" 
            className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft size={20} className="text-gray-700" />
            <span className="text-sm font-medium text-gray-700">Voltar</span>
          </Link>
          <h1 className="text-lg font-semibold text-gray-900 text-center flex-1 mx-4 truncate">
            {conteudo.titulo}
          </h1>
          <div className="w-16"></div>
        </div>
      </div>

      <div className="px-4 py-6 max-w-md mx-auto">
        {/* Header do Conteúdo */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border border-white/50 mb-6">
          <div className="flex items-start space-x-4">
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm"
              style={{ backgroundColor: conteudo.cor }}
            >
              <IconComponent size={28} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span 
                  className="text-xs font-medium px-3 py-1 rounded-full text-white shadow-sm"
                  style={{ backgroundColor: conteudo.cor }}
                >
                  {conteudo.categoria}
                </span>
              </div>
              <h1 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                {conteudo.titulo}
              </h1>
              <p className="text-gray-600 leading-relaxed text-sm">
                {conteudo.resumo}
              </p>
            </div>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border border-white/50 mb-6">
          <div className="prose prose-gray max-w-none">
            {renderContent(conteudo.conteudo_completo, !showFullContent)}
          </div>
          
          {!showFullContent && (
            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                onClick={() => setShowFullContent(true)}
                className="w-full bg-gradient-to-r from-[#F25D8E] to-[#E14A7A] text-white py-3 rounded-2xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
              >
                Ver conteúdo completo
              </button>
            </div>
          )}
        </div>

        {/* Dica do dia */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-6 shadow-lg border border-white/50 mb-6">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
              <Heart size={20} className="text-[#F25D8E]" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Dica do dia</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Lembre-se: cada corpo é único. Use essas informações como guia, mas sempre escute os sinais do seu próprio corpo.
              </p>
            </div>
          </div>
        </div>

        {/* Botão de voltar */}
        <div className="pb-6">
          <Link
            href="/"
            className="w-full bg-white text-[#F25D8E] py-4 rounded-2xl font-medium flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors shadow-lg border border-gray-100"
          >
            <ArrowLeft size={20} />
            <span>Voltar para Home</span>
          </Link>
        </div>
      </div>
    </div>
  )
}