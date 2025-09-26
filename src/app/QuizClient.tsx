"use client"

import { useState } from 'react'
import { CheckCircle, Brain, Clock, ArrowRight, RotateCcw, Star } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Question {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
  subject: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "Qual das alternativas apresenta a sequência correta dos processos de formação das chuvas?",
    options: [
      "Evaporação → Condensação → Precipitação",
      "Condensação → Evaporação → Precipitação", 
      "Precipitação → Evaporação → Condensação",
      "Evaporação → Precipitação → Condensação",
      "Condensação → Precipitação → Evaporação"
    ],
    correct: 0,
    explanation: "O ciclo da água segue a sequência: evaporação (água vira vapor), condensação (vapor vira gotículas) e precipitação (chuva).",
    subject: "Geografia"
  },
  {
    id: 2,
    question: "Em relação ao movimento literário do Realismo no Brasil, é correto afirmar que:",
    options: [
      "Privilegiava a idealização da realidade e o subjetivismo",
      "Caracterizava-se pela objetividade e crítica social",
      "Valorizava principalmente os aspectos místicos e religiosos",
      "Enfatizava o nacionalismo romântico exagerado",
      "Focava exclusivamente em temas urbanos contemporâneos"
    ],
    correct: 1,
    explanation: "O Realismo brasileiro caracterizou-se pela objetividade na descrição da realidade e forte crítica aos problemas sociais da época.",
    subject: "Literatura"
  },
  {
    id: 3,
    question: "A função f(x) = 2x + 3 é uma função:",
    options: [
      "Quadrática crescente",
      "Linear decrescente", 
      "Linear crescente",
      "Exponencial",
      "Logarítmica"
    ],
    correct: 2,
    explanation: "f(x) = 2x + 3 é uma função linear (1º grau) crescente, pois o coeficiente angular (2) é positivo.",
    subject: "Matemática"
  },
  {
    id: 4,
    question: "Qual processo celular é responsável pela produção de ATP nas células eucarióticas?",
    options: [
      "Fotossíntese apenas",
      "Respiração celular apenas",
      "Fermentação apenas", 
      "Respiração celular e fermentação",
      "Digestão celular"
    ],
    correct: 3,
    explanation: "Tanto a respiração celular quanto a fermentação produzem ATP, sendo a respiração mais eficiente.",
    subject: "Biologia"
  },
  {
    id: 5,
    question: "A Lei da Inércia, primeira lei de Newton, estabelece que:",
    options: [
      "Todo corpo em movimento tende a parar",
      "A força é igual ao produto da massa pela aceleração",
      "Todo corpo em repouso ou movimento retilíneo uniforme permanece nesse estado até que uma força atue sobre ele",
      "Para toda ação existe uma reação igual e contrária",
      "A velocidade é diretamente proporcional à força aplicada"
    ],
    correct: 2,
    explanation: "A Lei da Inércia afirma que um corpo mantém seu estado de repouso ou movimento retilíneo uniforme até que uma força externa atue sobre ele.",
    subject: "Física"
  }
]

export default function QuizClient() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)
  const [quizStarted, setQuizStarted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutos

  // Timer effect
  useState(() => {
    if (quizStarted && !showResult && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0) {
      handleFinishQuiz()
    }
  })

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      handleFinishQuiz()
    }
  }

  const handleFinishQuiz = () => {
    setShowResult(true)
  }

  const calculateScore = () => {
    let correct = 0
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct) {
        correct++
      }
    })
    return correct
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const score = calculateScore()
  const percentage = Math.round((score / questions.length) * 100)

  // Tela inicial do quiz
  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-xl text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Brain className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Quiz ENEM IA Pro
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Teste seus conhecimentos com 5 questões no estilo ENEM. 
            Descubra como nossa IA pode te ajudar a alcançar seus objetivos!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-sm">
            <div className="bg-blue-50 p-4 rounded-lg">
              <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">5 minutos</div>
              <div className="text-gray-600">Tempo limite</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">5 questões</div>
              <div className="text-gray-600">Multidisciplinar</div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <Star className="w-6 h-6 text-orange-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Resultado</div>
              <div className="text-gray-600">Instantâneo</div>
            </div>
          </div>

          <button 
            onClick={() => setQuizStarted(true)}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center mx-auto"
          >
            Iniciar Quiz
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    )
  }

  // Tela de resultado
  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-xl">
          <div className="text-center mb-8">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${
              percentage >= 70 ? 'bg-green-100' : percentage >= 50 ? 'bg-yellow-100' : 'bg-red-100'
            }`}>
              <div className={`text-3xl font-bold ${
                percentage >= 70 ? 'text-green-600' : percentage >= 50 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {percentage}%
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {percentage >= 70 ? 'Excelente!' : percentage >= 50 ? 'Bom trabalho!' : 'Continue estudando!'}
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Você acertou <strong>{score} de {questions.length}</strong> questões
            </p>
          </div>

          {/* Revisão das questões */}
          <div className="space-y-4 mb-8 max-h-64 overflow-y-auto">
            {questions.map((question, index) => {
              const isCorrect = selectedAnswers[index] === question.correct
              const wasAnswered = selectedAnswers[index] !== undefined
              
              return (
                <div key={question.id} className={`p-4 rounded-lg border-2 ${
                  isCorrect ? 'border-green-200 bg-green-50' : 
                  wasAnswered ? 'border-red-200 bg-red-50' : 'border-gray-200 bg-gray-50'
                }`}>
                  <div className="flex items-start space-x-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                      isCorrect ? 'bg-green-500' : wasAnswered ? 'bg-red-500' : 'bg-gray-500'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 mb-2">{question.subject}</div>
                      <div className="text-sm text-gray-600 mb-2">{question.question}</div>
                      <div className="text-xs text-gray-500">
                        Resposta correta: {question.options[question.correct]}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <div className="bg-blue-50 p-6 rounded-xl mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                🎯 Quer melhorar ainda mais seus resultados?
              </h3>
              <p className="text-gray-600 mb-4">
                Descubra como nossa IA especializada pode te ajudar a alcançar a nota dos seus sonhos no ENEM 2025!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  setCurrentQuestion(0)
                  setSelectedAnswers([])
                  setShowResult(false)
                  setQuizStarted(false)
                  setTimeLeft(300)
                }}
                className="bg-gray-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-600 transition-all duration-300 flex items-center justify-center"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Refazer Quiz
              </button>
              
              <button 
                onClick={() => router.push('/landing')}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                Conhecer ENEM IA Pro
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Tela da questão atual
  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header com timer e progresso */}
      <div className="bg-white shadow-sm p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-lg font-bold text-gray-900">
              Questão {currentQuestion + 1} de {questions.length}
            </div>
            <div className="text-sm text-gray-600 bg-blue-100 px-3 py-1 rounded-full">
              {question.subject}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className={`flex items-center space-x-2 ${timeLeft < 60 ? 'text-red-600' : 'text-gray-600'}`}>
              <Clock className="w-5 h-5" />
              <span className="font-mono font-bold">{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>
        
        {/* Barra de progresso */}
        <div className="max-w-4xl mx-auto mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Questão */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-8 leading-relaxed">
            {question.question}
          </h2>
          
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md ${
                  selectedAnswers[currentQuestion] === index
                    ? 'border-blue-500 bg-blue-50 text-blue-900'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold ${
                    selectedAnswers[currentQuestion] === index
                      ? 'border-blue-500 bg-blue-500 text-white'
                      : 'border-gray-300 text-gray-400'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="flex-1">{option}</span>
                </div>
              </button>
            ))}
          </div>
          
          {selectedAnswers[currentQuestion] !== undefined && (
            <div className="mt-8 text-center">
              <button
                onClick={handleNextQuestion}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center mx-auto"
              >
                {currentQuestion === questions.length - 1 ? 'Finalizar Quiz' : 'Próxima Questão'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}