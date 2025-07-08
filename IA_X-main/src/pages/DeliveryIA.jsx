import React from 'react';
import { Link } from 'react-router-dom';
import LogoIAX from '../assets/MarcaIA-XCromada.png';
import AIBrain from '../assets/ai_brain.jpg';
import AICustomerService from '../assets/ai_customer_service.jpg';
import AIRestaurant from '../assets/ai_restaurant.jpg';

const DeliveryIA = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center mb-10">
            <img src={LogoIAX} alt="Logo IA-X" className="h-24 w-auto filter drop-shadow-2xl" />
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent leading-tight">
                Sistema de Delivery Inteligente com IA
              </h1>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                Transforme seu restaurante com nossa solução completa de atendimento e gestão de pedidos automatizada via WhatsApp. 
                Setup personalizado + mensalidade recorrente com orçamento sob medida.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#contato" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 text-center shadow-xl transform hover:scale-105">
                  Solicitar Orçamento
                </a>
                <a href="#beneficios" className="bg-transparent border-2 border-cyan-400 hover:bg-cyan-400 hover:text-slate-900 text-cyan-400 font-bold py-4 px-8 rounded-xl transition duration-300 text-center shadow-xl">
                  Conheça os Benefícios
                </a>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img src={AIRestaurant} alt="Sistema de Delivery com IA" className="rounded-2xl shadow-2xl border border-cyan-400/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Benefícios Section */}
      <div className="py-20 bg-white" id="beneficios">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Benefícios Comprovados para Seu Restaurante
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Nossa solução de IA para delivery já transformou centenas de restaurantes, 
              proporcionando resultados mensuráveis e crescimento sustentável.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl text-center shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">+60%</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Aumento no Faturamento</h3>
              <p className="text-gray-600">Aumento médio no faturamento de delivery através de atendimento 24/7, upselling inteligente e melhor experiência do cliente</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl text-center shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">-35%</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Redução de Custos</h3>
              <p className="text-gray-600">Redução nos custos operacionais com automação de atendimento, otimização de processos e redução de erros</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl text-center shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">+45%</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Satisfação do Cliente</h3>
              <p className="text-gray-600">Melhoria na satisfação do cliente com atendimento personalizado, rapidez e disponibilidade constante</p>
            </div>
          </div>

          {/* Funcionalidades Detalhadas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Inteligência Artificial Avançada</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Processamento de Linguagem Natural</h4>
                    <p className="text-gray-600">Compreende pedidos em linguagem natural, gírias e expressões regionais brasileiras</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Recomendações Inteligentes</h4>
                    <p className="text-gray-600">Sugere produtos baseado no histórico, preferências e contexto do cliente</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Análise Preditiva</h4>
                    <p className="text-gray-600">Antecipa demanda, otimiza estoque e coordena operações automaticamente</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src={AIBrain} alt="IA Avançada" className="rounded-2xl shadow-xl" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img src={AICustomerService} alt="Atendimento Automatizado" className="rounded-2xl shadow-xl" />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Atendimento 24/7 Personalizado</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Disponibilidade Constante</h4>
                    <p className="text-gray-600">Atendimento automatizado 24 horas por dia, 7 dias por semana, sem interrupções</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Personalização Dinâmica</h4>
                    <p className="text-gray-600">Adapta tom, ofertas e recomendações para cada cliente específico</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Escalação Inteligente</h4>
                    <p className="text-gray-600">Transfere automaticamente para atendimento humano quando necessário</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Produto Único */}
      <div className="py-20 bg-gradient-to-br from-slate-100 to-blue-50" id="produto">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Solução Completa de Delivery Inteligente
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Oferecemos uma solução única e personalizada que combina setup inicial completo 
              com mensalidade recorrente adaptada às necessidades do seu restaurante.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
              <div className="bg-gradient-to-r from-slate-900 to-blue-900 p-8 text-center text-white relative">
                <div className="absolute top-0 right-0 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold px-4 py-2 transform translate-x-4 -translate-y-4 rotate-12 rounded-lg shadow-lg">
                  SOLUÇÃO COMPLETA
                </div>
                <h3 className="text-3xl font-bold mb-4">Sistema de Delivery Inteligente IA-X</h3>
                <div className="text-5xl font-bold mb-4">
                  <span className="text-cyan-400">Setup Personalizado</span>
                  <span className="text-2xl text-gray-300"> + </span>
                  <span className="text-cyan-400">Mensalidade</span>
                </div>
                <p className="text-blue-200 text-lg">Orçamento personalizado baseado no seu volume e necessidades</p>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">1</span>
                      Setup Inicial Completo
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Configuração completa da IA</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Integração com WhatsApp Business</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Cardápio digital personalizado</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Treinamento da equipe</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Integração com sistemas existentes</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">2</span>
                      Mensalidade Recorrente
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Suporte técnico 24/7</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Atualizações automáticas</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Analytics e relatórios avançados</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Otimização contínua da IA</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Novas funcionalidades incluídas</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-2xl mb-8">
                  <h4 className="text-lg font-bold text-slate-900 mb-3">💡 Orçamento Personalizado</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Cada restaurante é único, por isso criamos um orçamento personalizado baseado no seu volume de pedidos, 
                    necessidades específicas e objetivos de crescimento. Entre em contato para receber uma proposta sob medida.
                  </p>
                </div>
                
                <div className="text-center">
                  <a href="#contato" className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-12 rounded-xl transition duration-300 shadow-xl transform hover:scale-105">
                    Solicitar Orçamento Personalizado
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contato */}
      <div className="py-20 bg-gradient-to-br from-slate-900 to-blue-900" id="contato">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Entre em Contato</h2>
            <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
              Solicite seu orçamento personalizado e descubra como podemos transformar 
              as operações de delivery do seu restaurante com nossa solução de IA.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 bg-gradient-to-br from-slate-800 to-blue-800 text-white">
                <h3 className="text-3xl font-bold mb-8">Informações de Contato</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">WhatsApp</h4>
                      <p className="text-blue-200">+55 (85) 99275-6556</p>
                      <p className="text-sm text-blue-300 mt-1">Atendimento via WhatsApp para orçamentos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">E-mail</h4>
                      <p className="text-blue-200">iaxgestao@gmail.com</p>
                      <p className="text-sm text-blue-300 mt-1">Envie sua solicitação por e-mail</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Localização</h4>
                      <p className="text-blue-200">Fortaleza, CE</p>
                      <p className="text-sm text-blue-300 mt-1">Atendemos todo o Brasil</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-400/30">
                  <h4 className="font-bold text-lg mb-2">🚀 Orçamento Rápido via WhatsApp</h4>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    Para um orçamento mais rápido, entre em contato diretamente pelo WhatsApp. 
                    Nossa equipe está pronta para entender suas necessidades e criar uma proposta personalizada.
                  </p>
                </div>
              </div>
              
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-slate-900 mb-8">Solicite Seu Orçamento</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-2" htmlFor="name">Nome Completo</label>
                      <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200" placeholder="Seu nome completo" />
                    </div>
                    
                    <div>
                      <label className="block text-slate-700 font-semibold mb-2" htmlFor="phone">WhatsApp</label>
                      <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200" placeholder="(00) 00000-0000" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2" htmlFor="email">E-mail</label>
                    <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200" placeholder="seu@email.com" />
                  </div>
                  
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2" htmlFor="restaurant">Nome do Restaurante</label>
                    <input type="text" id="restaurant" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200" placeholder="Nome do seu restaurante" />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-2" htmlFor="volume">Volume Mensal de Pedidos (Aproximado)</label>
                    <select id="volume" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200">
                      <option value="">Selecione o volume</option>
                      <option value="0-100">0 a 100 pedidos/mês</option>
                      <option value="100-500">100 a 500 pedidos/mês</option>
                      <option value="500-1000">500 a 1.000 pedidos/mês</option>
                      <option value="1000-2000">1.000 a 2.000 pedidos/mês</option>
                      <option value="2000+">Mais de 2.000 pedidos/mês</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2" htmlFor="message">Conte-nos sobre seu restaurante e necessidades</label>
                    <textarea id="message" rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200" placeholder="Descreva seu tipo de cozinha, principais desafios com delivery e objetivos com a automação"></textarea>
                  </div>
                  
                  <div>
                    <button type="submit" className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-xl transition duration-300 shadow-xl transform hover:scale-105">
                      Solicitar Orçamento Personalizado
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para Revolucionar Seu Delivery?
          </h2>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto mb-12 leading-relaxed">
            Junte-se aos restaurantes que já transformaram suas operações com nossa solução de IA. 
            Solicite seu orçamento personalizado e descubra como podemos impulsionar seu crescimento.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="https://wa.me/5585992756556" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 text-center shadow-xl transform hover:scale-105">
              Orçamento via WhatsApp
            </a>
            <a href="#contato" className="bg-transparent border-2 border-cyan-400 hover:bg-cyan-400 hover:text-slate-900 text-cyan-400 font-bold py-4 px-10 rounded-xl transition duration-300 text-center shadow-xl">
              Formulário de Contato
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryIA;

