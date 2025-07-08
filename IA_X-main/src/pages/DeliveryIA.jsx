import React from 'react';
import { Link } from 'react-router-dom';
import LogoIAX from '../assets/MarcaIA-XCromada.png';

import aiCustomerService from '../assets/ai_customer_service.jpg';
import aiRestaurant from '../assets/ai_restaurant.jpg';
import aiBrain from '../assets/ai_brain.jpg';

const DeliveryIA = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-10">
            <img src={LogoIAX} alt="Logo IA-X" className="h-24 w-auto" />
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Sistema de Delivery Inteligente com IA via WhatsApp</h1>
              <p className="text-xl mb-8">Transforme seu restaurante com a implantação de uma solução completa de atendimento e gestão de pedidos automatizada com IA.</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#contato" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-center">
                  Agende uma Demo
                </a>
                <a href="#beneficios" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-center">
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

      {/* Estatísticas */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg text-center shadow-md">
              <div className="text-5xl font-bold text-green-500 mb-2">+60%</div>
              <p className="text-gray-700 text-lg">Aumento médio no faturamento de delivery</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg text-center shadow-md">
              <div className="text-5xl font-bold text-green-500 mb-2">-35%</div>
              <p className="text-gray-700 text-lg">Redução nos custos operacionais</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg text-center shadow-md">
              <div className="text-5xl font-bold text-green-500 mb-2">+45%</div>
              <p className="text-gray-700 text-lg">Melhoria na satisfação do cliente</p>
            </div>
          </div>
        </div>
      </div>

      {/* Planos */}
      <div className="py-16 bg-white" id="planos">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Planos de Investimento</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos opções flexíveis para atender às necessidades de restaurantes de todos os portes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-blue-50 p-6 text-center border-b border-gray-200">
                <h3 className="text-2xl font-bold text-blue-900">Essencial</h3>
                <div className="text-4xl font-bold text-blue-900 mt-4">R$ 297<span className="text-lg font-normal text-gray-600">/mês</span></div>
                <p className="text-gray-600 mt-2">Ideal para pequenos restaurantes</p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Atendimento automatizado</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cardápio digital</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Até 500 pedidos/mês</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Suporte por e-mail</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="#contato" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg text-center transition duration-300">
                    Começar Agora
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-2 border-blue-500 rounded-lg shadow-xl overflow-hidden transform scale-105 z-10">
              <div className="bg-blue-600 p-6 text-center border-b border-blue-700 relative">
                <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-2 rotate-12">
                  POPULAR
                </div>
                <h3 className="text-2xl font-bold text-white">Profissional</h3>
                <div className="text-4xl font-bold text-white mt-4">Setup + R$ 597<span className="text-lg font-normal text-blue-200">/mês</span></div>
                <p className="text-blue-200 mt-2">Para restaurantes em crescimento</p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Todos recursos do Essencial</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Recomendações inteligentes</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Analytics avançado</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Até 2.000 pedidos/mês</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Suporte prioritário</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="#contato" className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg text-center transition duration-300">
                    Escolher Plano
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-blue-50 p-6 text-center border-b border-gray-200">
                <h3 className="text-2xl font-bold text-blue-900">Enterprise</h3>
                <div className="text-4xl font-bold text-blue-900 mt-4">R$ 1.197<span className="text-lg font-normal text-gray-600">/mês</span></div>
                <p className="text-gray-600 mt-2">Para redes e alto volume</p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Todos recursos do Profissional</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Personalização completa</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Volume ilimitado</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Suporte 24/7</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Gerente de conta dedicado</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="#contato" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg text-center transition duration-300">
                    Fale Conosco
                  </a>
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
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Entre em Contato</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Agende uma demonstração gratuita e descubra como podemos transformar as operações de delivery do seu restaurante.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 bg-blue-600 text-white">
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
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Agende uma Demonstração</h3>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">Nome</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Seu nome completo" />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="email">E-mail</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="seu@email.com" />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="phone">Telefone</label>
                    <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="(00) 00000-0000" />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="restaurant">Nome do Restaurante</label>
                    <input type="text" id="restaurant" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nome do seu restaurante" />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="message">Mensagem</label>
                    <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Conte-nos um pouco sobre seu restaurante e suas necessidades"></textarea>
                  </div>
                  
                  <div>
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                      Enviar Mensagem
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-blue-900 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pronto para revolucionar seu delivery?</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            Junte-se a centenas de restaurantes que já transformaram suas operações com a implantação da nossa solução de IA.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contato" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-center">
              Agende uma Demo Gratuita
            </a>
            <Link to="/contato" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-center">
              Fale com um Especialista
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryIA;



      {/* Seção de Imagens */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Como a IA Transforma seu Delivery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja na prática como a inteligência artificial otimiza cada etapa do seu negócio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img src={aiCustomerService} alt="Atendimento ao Cliente com IA" className="w-full h-64 object-cover" />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Atendimento Automatizado</h3>
                <p className="text-gray-700">Robôs de IA gerenciam pedidos e interagem com clientes 24/7, liberando sua equipe para tarefas estratégicas.</p>
              </div>
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img src={aiRestaurant} alt="Gestão de Restaurante com IA" className="w-full h-64 object-cover" />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Otimização Operacional</h3>
                <p className="text-gray-700">Análise de dados em tempo real para otimizar estoque, rotas de entrega e eficiência da cozinha.</p>
              </div>
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img src={aiBrain} alt="Inteligência Artificial no Negócio" className="w-full h-64 object-cover" />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Decisões Estratégicas</h3>
                <p className="text-gray-700">Insights poderosos baseados em IA para precificação, promoções e expansão de mercado.</p>
              </div>
            </div>
          </div>
        </div>
      </div>




