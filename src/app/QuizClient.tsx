"use client"

import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface Question {
  id: number
  title: string
  options: Array<{
    value: string
    text: string
    description: string
  }>
}

interface Profile {
  name: string
  description: string
}

const questions: Question[] = [
  {
    id: 1,
    title: "Como você se sente em relação ao ENEM?",
    options: [
      {
        value: "ansioso",
        text: "😰 Ansioso e sobrecarregado",
        description: "Sinto que há muito para estudar e pouco tempo"
      },
      {
        value: "confiante",
        text: "😎 Confiante, mas preciso de foco",
        description: "Sei que posso ir bem, mas quero otimizar meus estudos"
      },
      {
        value: "perdido",
        text: "😕 Perdido e sem direção",
        description: "Não sei por onde começar nem como organizar"
      }
    ]
  },
  {
    id: 2,
    title: "Qual sua maior dificuldade no ENEM?",
    options: [
      {
        value: "redacao",
        text: "✍️ Redação",
        description: "Tenho dificuldade para estruturar e argumentar"
      },
      {
        value: "exatas",
        text: "🧮 Matemática e Ciências Exatas",
        description: "Fórmulas e cálculos são meu ponto fraco"
      },
      {
        value: "humanas",
        text: "📚 Ciências Humanas",
        description: "História, Geografia e Sociologia me confundem"
      },
      {
        value: "linguagens",
        text: "📖 Linguagens e Códigos",
        description: "Interpretação de texto e literatura são desafios"
      }
    ]
  },
  {
    id: 3,
    title: "Em qual área você se sente mais confortável?",
    options: [
      {
        value: "humanas",
        text: "📚 Humanas (História, Geografia, Filosofia)",
        description: "Gosto de ler, interpretar e contextualizar"
      },
      {
        value: "exatas",
        text: "🧮 Exatas (Matemática, Física, Química)",
        description: "Me dou bem com números, fórmulas e lógica"
      },
      {
        value: "equilibrado",
        text: "⚖️ Equilibrado em ambas",
        description: "Consigo me virar tanto em humanas quanto exatas"
      }
    ]
  },
  {
    id: 4,
    title: "Quanto tempo você tem para estudar por dia?",
    options: [
      {
        value: "pouco",
        text: "⏰ 1-3 horas",
        description: "Trabalho/estudo em período integral"
      },
      {
        value: "medio",
        text: "📚 4-6 horas",
        description: "Consigo me dedicar uma boa parte do dia"
      },
      {
        value: "muito",
        text: "🎯 Mais de 6 horas",
        description: "Estou focado 100% nos estudos"
      }
    ]
  },
  {
    id: 5,
    title: "Qual seu maior desafio com organização?",
    options: [
      {
        value: "procrastinacao",
        text: "😴 Procrastinação",
        description: "Sempre deixo para depois"
      },
      {
        value: "planejamento",
        text: "📋 Falta de planejamento",
        description: "Não sei como organizar meu cronograma"
      },
      {
        value: "foco",
        text: "🎯 Falta de foco",
        description: "Me distraio facilmente durante os estudos"
      }
    ]
  },
  {
    id: 6,
    title: "Qual sua meta de pontuação no ENEM?",
    options: [
      {
        value: "boa",
        text: "🎯 700-799 pontos",
        description: "Busco uma boa universidade pública"
      },
      {
        value: "excelente",
        text: "⭐ 800-899 pontos",
        description: "Quero cursos concorridos e renomados"
      },
      {
        value: "elite",
        text: "🏆 900+ pontos",
        description: "Mira em Medicina, Direito e cursos de elite"
      }
    ]
  }
]

const profiles: Record<string, Profile> = {
  'generalista_ansioso': {
    name: '🧠 O Generalista Ansioso',
    description: 'Você tem conhecimento amplo mas se sente sobrecarregado. Precisa de foco e organização para canalizar seu potencial.'
  },
  'especialista_lacunas': {
    name: '⚡ O Especialista com Lacunas', 
    description: 'Você domina algumas áreas mas tem pontos fracos específicos. Seu plano será focado em cobrir essas lacunas estratégicas.'
  },
  'procrastinador_redacao': {
    name: '✍️ O Procrastinador de Redação',
    description: 'Você evita a redação por insegurança. Vamos transformar isso com técnicas específicas e muito treino personalizado.'
  },
  'guerreiro_tempo': {
    name: '⏰ O Guerreiro do Tempo',
    description: 'Você tem pouco tempo mas muita determinação. Seu plano será ultra-otimizado para máximo resultado em mínimo tempo.'
  },
  'perfeccionista_perdido': {
    name: '🎯 O Perfeccionista Perdido',
    description: 'Você quer excelência mas não sabe por onde começar. Vamos criar uma estratégia clara para suas altas metas.'
  }
}

export default function QuizClient() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResult, setShowResult] = useState(false)
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null)

  const totalQuestions = questions.length
  const progress = ((currentQuestion - 1) / totalQuestions) * 100

  const selectOption = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: value
    }))
  }

  const nextQuestion = () => {
    if (!answers[currentQuestion]) return

    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      showResultHandler()
    }
  }

  const calculateProfile = (): string => {
    const sentiment = answers[1]
    const difficulty = answers[2]
    const area = answers[3]
    const time = answers[4]
    const organization = answers[5]
    const goal = answers[6]
    
    if (sentiment === 'ansioso' && area !== 'equilibrado') {
      return 'generalista_ansioso'
    } else if (difficulty === 'redacao' || organization === 'procrastinacao') {
      return 'procrastinador_redacao'
    } else if (time === 'pouco') {
      return 'guerreiro_tempo'
    } else if (goal === 'elite') {
      return 'perfeccionista_perdido'
    } else {
      return 'especialista_lacunas'
    }
  }

  const showResultHandler = () => {
    const profileKey = calculateProfile()
    const profile = profiles[profileKey]
    setSelectedProfile(profile)
    setShowResult(true)
  }

  const redirectToLanding = () => {
    router.push('/landing')
  }

  if (showResult && selectedProfile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-700 flex items-center justify-center p-5">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-10 shadow-2xl max-w-2xl w-full relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600"></div>
          
          <div className="w-full h-2 bg-gray-200 rounded-full mb-8">
            <div className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full w-full transition-all duration-300"></div>
          </div>

          <div className="text-center mb-8">
            <div className="text-6xl mb-5 animate-bounce">🎉</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4 leading-tight">
              Parabéns! Seu perfil foi definido
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Seu perfil personalizado foi enviado para o ENEM IA Pro e está sendo processado por nossa inteligência artificial.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-700 text-white p-8 rounded-2xl my-8 text-left">
            <h2 className="text-2xl font-bold mb-3">{selectedProfile.name}</h2>
            <p className="text-base opacity-90 leading-relaxed">{selectedProfile.description}</p>
          </div>

          <button 
            onClick={redirectToLanding}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-5 px-10 rounded-2xl text-lg font-bold cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
          >
            ✨ Continuar
          </button>
        </div>
      </div>
    )
  }

  const currentQuestionData = questions[currentQuestion - 1]
  const hasAnswer = answers[currentQuestion]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-700 flex items-center justify-center p-5">
      <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-10 shadow-2xl max-w-2xl w-full relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600"></div>
        
        <div className="w-full h-2 bg-gray-200 rounded-full mb-8 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-2.5">
            <Image 
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iNiIgZmlsbD0iIzQyNjFGRiIvPgo8cGF0aCBkPSJNMTIgMTcuNUMxNS4wMzc2IDE3LjUgMTcuNSAxNS4wMzc2IDE3LjUgMTJDMTcuNSA4Ljk2MjQ0IDE1LjAzNzYgNi41IDEyIDYuNUM4Ljk2MjQ0IDYuNSA2LjUgOC45NjI0NCA2LjUgMTJDNi41IDE1LjAzNzYgOC45NjI0NCAxNy41IDEyIDE3LjVaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMiA5QzEyIDkgMTMgMTAgMTUgMTJDMTMgMTQgMTIgMTUgMTIgMTUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==" 
              alt="ENEM IA Pro" 
              width={32}
              height={32}
              className="w-8 h-8 mr-3 align-middle"
            />
            <span className="text-3xl font-extrabold text-gray-800">ENEM IA Pro</span>
          </div>
          <p className="text-gray-600 text-base font-medium">Descubra seu perfil de estudante em 1 minuto</p>
        </div>

        <div className="mb-8">
          <div className="text-indigo-600 font-semibold text-sm mb-2">
            PERGUNTA {currentQuestion}/{totalQuestions}
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-5 leading-tight">
            {currentQuestionData.title}
          </h2>
          
          <div className="flex flex-col gap-3">
            {currentQuestionData.options.map((option, index) => (
              <button
                key={index}
                onClick={() => selectOption(option.value)}
                className={`bg-gray-50 border-2 border-gray-200 rounded-2xl p-5 cursor-pointer transition-all duration-200 relative overflow-hidden text-left hover:border-indigo-500 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-indigo-500/15 ${
                  answers[currentQuestion] === option.value
                    ? 'border-indigo-500 bg-gradient-to-br from-indigo-500 to-purple-600 text-white -translate-y-0.5 shadow-2xl shadow-indigo-500/30'
                    : ''
                }`}
              >
                <div className="font-semibold text-base mb-1">{option.text}</div>
                <div className={`text-sm ${answers[currentQuestion] === option.value ? 'opacity-80' : 'opacity-80'}`}>
                  {option.description}
                </div>
              </button>
            ))}
          </div>
        </div>

        <button 
          onClick={nextQuestion}
          disabled={!hasAnswer}
          className={`w-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-4.5 px-9 rounded-2xl text-base font-bold cursor-pointer transition-all duration-300 mt-8 ${
            hasAnswer 
              ? 'opacity-100 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-indigo-500/40' 
              : 'opacity-50 cursor-not-allowed'
          }`}
        >
          {currentQuestion === totalQuestions ? 'Ver Meu Perfil' : 'Próxima Pergunta'}
        </button>
      </div>
    </div>
  )
}