import React from 'react';
import { Link } from 'react-router-dom';
import LogoIAX from '../assets/MarcaIA-XCromada.png';

const DeliveryIA = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-10">
            <img src={LogoIAX} alt="Logo IA-X" className="h-32 w-auto" />
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Sistema de Delivery Inteligente com IA via WhatsApp</h1>
              <p className="text-xl mb-8">Transforme seu restaurante com a implantação de uma solução completa de atendimento e gestão de pedidos automatizada com IA.</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#contato" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-center">
                  Agende uma Demo
                </a>
                <a href="#beneficios" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-center">
                  Saiba Mais
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src="/assets/images/delivery-whatsapp.webp" alt="Sistema de Delivery com IA" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Seção de IA */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Inteligência Artificial Revolucionando o Delivery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa tecnologia de IA avançada transforma completamente a experiência de delivery do seu restaurante.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <img src="/assets/images/ai/ai_brain.jpg" alt="IA Inteligente" className="w-full h-48 object-cover rounded-lg shadow-lg mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">IA Avançada</h3>
              <p className="text-gray-600">Processamento inteligente de pedidos com aprendizado contínuo</p>
            </div>
            <div className="text-center">
              <img src="/assets/images/ai/ai_restaurant.jpg" alt="IA em Restaurantes" className="w-full h-48 object-cover rounded-lg shadow-lg mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Especializada em Restaurantes</h3>
              <p className="text-gray-600">Solução desenvolvida especificamente para o setor alimentício</p>
            </div>
            <div className="text-center">
              <img src="/assets/images/ai/ai_customer_service.jpg" alt="Atendimento com IA" className="w-full h-48 object-cover rounded-lg shadow-lg mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Atendimento 24/7</h3>
              <p className="text-gray-600">Suporte inteligente disponível a qualquer hora do dia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg text-center shadow-md">
              <div className="text-5xl font-bold text-orange-500 mb-2">+60%</div>
              <p className="text-gray-700 text-lg">Aumento médio no faturamento de delivery</p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center shadow-md">
              <div className="text-5xl font-bold text-orange-500 mb-2">-35%</div>
              <p className="text-gray-700 text-lg">Redução nos custos operacionais</p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center shadow-md">
              <div className="text-5xl font-bold text-orange-500 mb-2">+45%</div>
              <p className="text-gray-700 text-lg">Melhoria na satisfação do cliente</p>
            </div>
          </div>
        </div>
      </div>

      {/* Planos */}
      <div className="py-16 bg-white" id="planos">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Plano de Investimento</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solução completa com setup inicial e mensalidade recorrente personalizada para seu negócio.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white border-2 border-orange-500 rounded-lg shadow-xl overflow-hidden max-w-md w-full">
              <div className="bg-gradient-to-r from-gray-900 to-gray-700 p-8 text-center border-b border-gray-700 relative">
                <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-2 rotate-12">
                  POPULAR
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Setup + Recorrência</h3>
                <div className="text-2xl font-bold text-white mb-2">Valor Personalizado</div>
                <p className="text-gray-300 mt-2">Investimento sob medida para seu restaurante</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-orange-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Atendimento automatizado completo</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-orange-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cardápio digital personalizado</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-orange-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Recomendações inteligentes com IA</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-orange-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Analytics avançado e relatórios</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-orange-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Suporte técnico especializado</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-orange-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Treinamento completo da equipe</span>
                  </li>
                </ul>
                <div className="space-y-3">
                  <a href="#contato" className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg text-center transition duration-300 text-lg">
                    Pedir Orçamento e Visita
                  </a>
                  <p className="text-sm text-gray-500 text-center">
                    Orçamento personalizado baseado no tamanho e necessidades do seu negócio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contato */}
      <div className="py-16 bg-gray-100" id="contato">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Agende uma demonstração gratuita e descubra como podemos transformar as operações de delivery do seu restaurante.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-700 text-white">
                <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg className="h-6 w-6 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold">Telefone</h4>
                      <p>+55 (85) 99275-6556</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-6 w-6 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold">E-mail</h4>
                      <p>iaxgestao@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-6 w-6 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold">Endereço</h4>
                      <p>Fortaleza, CE</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicite seu Orçamento</h3>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">Nome</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Seu nome completo" />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="email">E-mail</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="seu@email.com" />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="phone">Telefone</label>
                    <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="(00) 00000-0000" />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="restaurant">Nome do Restaurante</label>
                    <input type="text" id="restaurant" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Nome do seu restaurante" />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="message">Mensagem</label>
                    <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Conte-nos sobre seu restaurante e quando gostaria de agendar uma visita"></textarea>
                  </div>
                  
                  <div>
                    <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                      Solicitar Orçamento e Visita
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pronto para revolucionar seu delivery?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Junte-se a centenas de restaurantes que já transformaram suas operações com a implantação da nossa solução de IA.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contato" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-center">
              Agende uma Demo Gratuita
            </a>
            <Link to="/contato" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-center">
              Fale com um Especialista
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryIA;

