"use client"

import { CircleCheck as CheckCircle, BookOpen, PenTool, Brain, Star, Clock, Users, Trophy, ArrowRight, Zap, Shield, Gift, Download } from 'lucide-react'

export default function LandingPageClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ENEM IA Pro</span>
            </div>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Começar Agora
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center">
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Clock className="w-4 h-4 mr-2" />
            ENEM 2025 Prepare-se agora!
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Aprovação</span> no ENEM
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Garantida com IA</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Prepare-se para o ENEM 2025 com inteligência artificial especializada. 
            Redações corrigidas como na prova oficial, resumos personalizados e questões 
            que realmente podem cair na sua prova com correção instantânea.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="https://pay.kirvano.com/75ae3352-6cba-4a2a-a1fe-394206f3fff5" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Acesso Imediato - Começar Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <div className="flex items-center text-gray-600">
              <Star className="w-5 h-5 text-yellow-500 mr-1" />
              <span className="font-medium">4.9/5 - Mais de 3.000 aprovados</span>
            </div>
          </div>

          {/* Garantias */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 text-sm">
            <div className="flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <Shield className="w-4 h-4 mr-2" />
              Garantia de 7 dias ou seu dinheiro de volta
            </div>
            <div className="flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              <Zap className="w-4 h-4 mr-2" />
              Acesso liberado na hora
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">98%</div>
              <div className="text-gray-600">Taxa de Aprovação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">+50k</div>
              <div className="text-gray-600">Redações Corrigidas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">24h</div>
              <div className="text-gray-600">Suporte Disponível</div>
            </div>
          </div>
        </div>
      </section>

      {/* O que você vai receber */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <Gift className="w-10 h-10 inline-block mr-3 text-green-600" />
              O que você vai receber
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tudo que você precisa para dominar o ENEM 2025 em um só lugar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <PenTool className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Guru de Redação IA</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  50+ temas exclusivos com alta probabilidade de cair
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Correção automática nos critérios oficiais 
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Feedback personalizado para cada redação
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Banco de repertórios socioculturais atualizados
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Resumos Inteligentes</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Resumos de qualquer tema em qualquer matéria 
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Mapas mentais automáticos
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Foco nos assuntos mais cobrados
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Linguagem adaptada ao seu nível
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Questões Preditivas</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  +1000 questões baseadas em provas anteriores
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Análise de tendências para ENEM 2025
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Explicação detalhada de cada alternativa
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Simulados cronometrados
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Bônus Exclusivos</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Cronograma de estudos personalizado
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Atualizações gratuitas vitalícias
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Suporte prioritário 24/7
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ferramentas Poderosas para sua <span className="text-blue-600">Aprovação</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Desenvolvidas por especialistas em ENEM e potencializadas por IA de última geração
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Guru de Redação */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <PenTool className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Guru de Redação</h3>
              <p className="text-gray-600 mb-6">
                Receba temas que podem cair no ENEM 2025 e tenha sua redação corrigida na hora por um agente de i.a especialista
                exatamente como os avaliadores oficiais fazem. Melhore sua nota a cada texto!
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Temas baseados em tendências atuais
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Correção nos 5 critérios oficiais
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Feedback detalhado e personalizado
                </li>
              </ul>
            </div>

            {/* Gerador de Resumos */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">📚 Resumos Inteligentes</h3>
              <p className="text-gray-600 mb-6">
                Digite qualquer tema de qualquer matéria e nosso agente te fornecerá resumos focados 
                no que realmente importa para o ENEM. Estude menos, aprenda mais!
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Todas as matérias do ENEM
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Foco nos pontos mais cobrados
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Linguagem clara e objetiva
                </li>
              </ul>
            </div>

            {/* Gerador de Questões */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🎲 Questões Preditivas</h3>
              <p className="text-gray-600 mb-6">
                Pratique com questões que têm alta probabilidade de cair no ENEM 2025, 
                baseadas em análise de provas anteriores e tendências atuais. Digite qualquer tema e receba questões de multipla escolha na hora e com correção instantânea!
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Baseadas em provas anteriores
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Correção detalhada de cada alternativa
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Dificuldade progressiva
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Por que escolher o ENEM IA Pro?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Mais de 3.000 estudantes já conquistaram suas aprovações conosco
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">IA Especializada</h3>
              <p className="text-blue-100">Agentes de inteligência artificial treinados especificamente para o ENEM brasileiro</p>
            </div>

            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Resultados Comprovados</h3>
              <p className="text-blue-100">98% dos nossos alunos melhoram suas notas</p>
            </div>

            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Disponível 24/7</h3>
              <p className="text-blue-100">Estude quando quiser, no seu ritmo</p>
            </div>

            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Comunidade Ativa</h3>
              <p className="text-blue-100">Conecte-se com outros estudantes em nossa plataforma!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Histórias reais de aprovação
            </h2>
            <p className="text-xl text-gray-600">
              Veja como nossos alunos transformaram seus sonhos em realidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face" 
                  alt="Maria Silva" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold text-gray-900">Maria Silva</div>
                  <div className="text-gray-600 text-sm">Medicina - USP</div>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Eu estava desesperada com a redação... Minha nota era sempre baixa. Com o Guru de Redação, consegui 980 pontos! O tema que caiu era quase idêntico ao que pratiquei. Chorei de emoção quando vi o resultado. Hoje estou no 3º período de Medicina na USP realizando meu sonho!"
              </p>
              <div className="text-green-600 font-semibold">
                ✅ Nota da redação: 980/1000
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" 
                  alt="João Santos" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold text-gray-900">João Santos</div>
                  <div className="text-gray-600 text-sm">Engenharia - UFMG</div>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Trabalhava durante o dia e só tinha a noite para estudar. Os resumos inteligentes foram minha salvação! Consegui revisar 3 anos de conteúdo em 2 meses. As questões preditivas eram muito similares à prova real. Passei em 1º lugar no meu curso!"
              </p>
              <div className="text-green-600 font-semibold">
                ✅ Classificação: 1º lugar geral
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face" 
                  alt="Ana Costa" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold text-gray-900">Ana Costa</div>
                  <div className="text-gray-600 text-sm">Direito - UFPE</div>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Vinha de escola pública e me sentia insegura para competir. O ENEM IA Pro me deu confiança! As questões eram tão parecidas que me senti em casa na prova. Quando saiu o resultado, não acreditei: 850 pontos! Minha família chorou comigo. Gratidão eterna!"
              </p>
              <div className="text-green-600 font-semibold">
                ✅ Nota geral: 920 pontos
              </div>
            </div>
          </div>

          {/* Mais depoimentos em formato compacto */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <div className="flex items-center mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face" 
                  alt="Pedro Lima" 
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <div className="font-semibold text-gray-900">Pedro Lima</div>
                  <div className="text-gray-600 text-sm">Psicologia - UFRJ</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm italic">
                "Era minha terceira tentativa. Com o ENEM IA Pro finalmente consegui! A diferença foi absurda."
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
              <div className="flex items-center mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&crop=face" 
                  alt="Carla Mendes" 
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <div className="font-semibold text-gray-900">Carla Mendes</div>
                  <div className="text-gray-600 text-sm">Enfermagem - UFBA</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm italic">
                "Mãe solteira, trabalhava e estudava. Sem tempo para cursinho. Esse sistema mudou minha vida!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia Section */}
      <section className="bg-gradient-to-r from-green-500 to-emerald-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <Shield className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Garantia Blindada de 7 Dias
            </h2>
            <p className="text-xl text-green-100 mb-6">
              Teste por 7 dias completos. Se não ficar 100% satisfeito, devolvemos todo seu dinheiro. 
              Sem perguntas, sem burocracia, sem enrolação.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-green-100">
              <div className="flex items-center justify-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                Reembolso em até 24h
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                Sem perguntas
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                100% do valor de volta
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Não deixe sua aprovação para a sorte!
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Mais de 500 vagas já foram preenchidas este mês. Garante a sua agora!
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="text-white mb-4">
              <span className="text-4xl font-bold">R$ 47</span>
              <span className="text-xl ml-2 line-through opacity-60">R$ 197</span>
            </div>
            <div className="text-orange-100 mb-6">
              Oferta especial por tempo limitado - Últimas 48 horas
            </div>
            <a href="https://pay.kirvano.com/75ae3352-6cba-4a2a-a1fe-394206f3fff5" target="_blank" rel="noopener noreferrer" className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto mb-4 inline-block text-center">
              <Download className="w-5 h-5 inline-block mr-2" />
              Garantir Acesso Imediato Agora
            </a>
            <div className="text-orange-100 text-sm">
              ⚡ Acesso liberado na hora
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-orange-100">
            <div className="flex items-center justify-center">
              <Shield className="w-5 h-5 mr-2" />
              Garantia de 7 dias
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Acesso vitalício
            </div>
            <div className="flex items-center justify-center">
              <Zap className="w-5 h-5 mr-2" />
              Suporte 24/7
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ENEM IA Pro</span>
              </div>
              <p className="text-gray-400">
                Sua aprovação no ENEM garantida na era da inteligência artificial.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Guru de Redação</li>
                <li>Resumos Inteligentes</li>
                <li>Questões Preditivas</li>
                <li>Preços</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Central de Ajuda</li>
                <li>Contato</li>
                <li>WhatsApp</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Termos de Uso</li>
                <li>Política de Privacidade</li>
                <li>Política de Reembolso</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ENEM IA Pro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}