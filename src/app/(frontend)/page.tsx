'use client'

import React, { useRef } from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import CarouselNavigation from '@/components/CarouselNavigation'

export default function HomePage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handlePrevClick = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  const handleNextClick = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      })
    }
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
          {/* Imagem de fundo */}
          <div className="absolute inset-0">
            <Image
              src="/images/fundo_fatec.jpeg"
              alt="FATEC Presidente Prudente"
              fill
              priority
              quality={100}
              className="blur-[3px]" /*defoque da imagem*/
              style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
            />
            {/* Overlay gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" />
          </div>

          {/* Conteúdo */}
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white p-4">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight">Empresa Júnior</h2>
              <p className="mt-2 text-lg md:text-xl font-medium">FATEC Presidente Prudente</p>
            </div>
          </div>
        </section>

        {/* Announcements Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 dark:text-white mb-12">
              Últimos Editais
            </h2>
            <div className="relative px-4">
              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {[
                  {
                    title: 'Competição de Estudantes',
                    description: 'Detalhes sobre a próxima competição estudantil.',
                    image:
                      'https://lh3.googleusercontent.com/aida-public/AB6AXuCJmnudf5UjTGtLZOdgri7Z-jBEI9fMlvqKi5lRKExd0vP1hXD05_IC8e_ZS2cv-WOIXuTOiLlc9AsdfqOuIH4pjpMvfVlng2Kl0Jb1wv9JMaleFWaQSB-YQzvJvqZDRo7tCcttF8XjgPg5VNHxVbTiJ6A_f1CVj-vnGuArjACyUZCVA_ijGsfGqiKPo40HxJK6fQYJ3kAaUTG485bgTrpaXGgVOAItARVioqSZNb3IjeuvXhhi2siCZbVbwZGn36kOW1FUyPmBmOE',
                  },
                  {
                    title: 'Programa de Estágio',
                    description: 'Informações sobre o novo programa de estágio.',
                    image:
                      'https://lh3.googleusercontent.com/aida-public/AB6AXuC8-xCMYRFVImtor600SU-VYR0lt9Zmmk4OytrkqJzpFOUUjgrn-Y16c5R7-vCJ13KkoMJOYMY6Xv0skrxS3hm7AdaOb6v5vTmcWza0H80US7qDE2dMcZs_Bad74j3kXg3Av8OvJWgkChJeuop--644o-qPB8ICSAHtFYZezC8cZs_nujk5oGAdyEgWCqNg0mRgvcM8L4cH93_wnh7k3tH7b8WgmFSeOdn_7c_drJtEE4iOAweYz-AFPkRqxeHzhek6xzTFwcdC8do',
                  },
                  {
                    title: 'Bolsa de Pesquisa',
                    description: 'Detalhes sobre como se candidatar à bolsa de pesquisa.',
                    image:
                      'https://lh3.googleusercontent.com/aida-public/AB6AXuC5Cu15WMFz5pdftBQ35WLHtWlJTHEvWcKbXaSLND_K-mB64R8MKPMFRa1Ww5E0iCwnZMLw1w_E5bjve2hZde8q2X33sE9SVfxqNfGrWmeOIyCiB_IR0ZqMYG3lmIaLwbkafzoiptKCe49A74lACaA43gnbxY-K003hBNA9K7LKkMVUGzO2LuVCxsi2k8CnHHf8zXLYeUKE0T_M3nqv_3BsH-N-G7zkX12eaft-KVKe9GZQq9havE3rCfijDB8dgI2dDDzUOD4oXSg',
                  },
                  {
                    title: 'Anúncio de Bolsas',
                    description: 'Informações sobre as bolsas disponíveis.',
                    image:
                      'https://lh3.googleusercontent.com/aida-public/AB6AXuD6kxKoarEZOVCAFgOP8_jjBcsWAicNxnztGfgyDZjb7PNtw1BM7jmeFvMOV8CtpilackxM1Fwdtiq-nAuXtA7oDD8Jn1EEqShW6SJF2_gzxFgOIjAn0HxgiKCsh6hL38WKd0DWvg4yApWYXQyr6tJNVPqyqZ3XQh3VXuZhLvbU6Z88btSz7NlyOWOrx_4Cb6CiQKvl2U08kgoQmt5Lx5-jGjs9gZJXLwyC1FvgFwWb5k0zcyf4Ue-juRc4Rz9Z-Vsz96dmuM1IlCk',
                  },
                  {
                    title: 'Cursos Gratuitos',
                    description: 'Informações sobre cursos gratuitos disponíveis.',
                    image:
                      'https://lh3.googleusercontent.com/aida-public/AB6AXuD6kxKoarEZOVCAFgOP8_jjBcsWAicNxnztGfgyDZjb7PNtw1BM7jmeFvMOV8CtpilackxM1Fwdtiq-nAuXtA7oDD8Jn1EEqShW6SJF2_gzxFgOIjAn0HxgiKCsh6hL38WKd0DWvg4yApWYXQyr6tJNVPqyqZ3XQh3VXuZhLvbU6Z88btSz7NlyOWOrx_4Cb6CiQKvl2U08kgoQmt5Lx5-jGjs9gZJXLwyC1FvgFwWb5k0zcyf4Ue-juRc4Rz9Z-Vsz96dmuM1IlCk',
                  },
                ].map((announcement, index) => (
                  <div key={index} className="snap-center shrink-0 w-full sm:w-1/2 lg:w-1/4">
                    <div className="bg-background-light dark:bg-background-dark/50 rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                      <div
                        className="w-full h-48 bg-cover bg-center"
                        style={{ backgroundImage: `url("${announcement.image}")` }}
                      />
                      <div className="p-6 flex-grow">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {announcement.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                          {announcement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <CarouselNavigation onPrevClick={handlePrevClick} onNextClick={handleNextClick} />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 sm:py-24 bg-background-light/50 dark:bg-background-dark/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 dark:text-white mb-12">
              Nossos Projetos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  date: '2023-08-15',
                  title: 'Website para Empresa Local',
                  description: 'Desenvolvimento de um website responsivo para uma empresa local.',
                  image:
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuAOhozV8d3qIgLggGTAyAIXhazEoVRFrsSttgqV2DkkGqJTNngVYlGFlBAVts2wPj-3KG6eVIPl5z1msz9w1te_gjDYJK3JTKLC4EcQ3BfVteiIb5kor_lLGs5dX5KjpAtN2_YoT9YWGI02rBFEbuylgweQ107fJKQ_a7NuMLFz5O3294GcoRLMXZc4cxZpPo05yKJOxNIzHhJ5657kOI1L-Uu4BjCSS03YnY9PtICZx4eesdO-x3zyUN_9UcvFgQr2h4-Emi7C2Vk',
                },
                {
                  date: '2023-07-20',
                  title: 'App Móvel para Comunidade',
                  description: 'Criação de um aplicativo móvel para engajamento comunitário.',
                  image:
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuA9e7DgC3Jox81oelfbwj3lZfTZXxj1qFGyqR3k78TroH3nmUz9PmiGM9QooGGNwj0moDFB7mNIOPzuJ40tbq4NK_CAY50RSoxmaICwoKDDJrTVcX5cnqtJnZf4JOqTBGPqdhrpUaYMOo1b2qwpoGJZD8I95C7Orxfv5b7Ka_BekRBeWM0y0wqrSr3ox75jajNGmpuVP-88msWIigJ8ZkUhG6iH8c_O77BAV2SaZak5asxrTiNuYiteHn97bSPVkFcAENYfYvoZhjA',
                },
                // ... outros projetos (continuação do código)
              ].map((project, index) => (
                <div
                  key={index}
                  className="bg-background-light dark:bg-background-dark/50 rounded-lg shadow-md overflow-hidden group"
                >
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url("${project.image}")` }}
                  />
                  <div className="p-6">
                    <p className="text-xs text-gray-500 dark:text-gray-400">{project.date}</p>
                    <h3 className="text-lg font-bold mt-2 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                    <a
                      className="inline-block mt-4 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                      href="#"
                    >
                      Leia Mais →
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <button className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors">
                Ver Todos os Projetos
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Sobre a Empresa Junior FATEC
                </h2>
                <p className="mt-4 mb-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                  Fundada no ano de 2009, o objetivo da Empresa Júnior da Fatec de Presidente
                  Prudente é proporcionar aos seus membros as condições necessárias à aplicação
                  prática dos conhecimentos teóricos relativos à área de tecnologia, com o respaldo
                  de seus docentes.
                </p>
                <h2 className="text-2xl tracking-tight text-gray-900 dark:text-white">Missão</h2>
                <p className="mt-2 mb-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  Oferecer soluções que integrem alunos, professores e empresários, unindo teoria e prática para desenvolver 
                  conhecimentos voltados ao mercado — especialmente para micro e pequenas empresas — com foco no desenvolvimento sustentável, ético e responsável.
                </p>
                <h2 className="text-2xl tracking-tight text-gray-900 dark:text-white">Visão</h2>
                <p className="mt-2 mb-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  Ser uma empresa consolidada no mercado de consultoria, de forma que possa
                  contribuir estrategicamente para o desenvolvimento do cliente e, paralelamente,
                  possibilite a seus membros se desenvolverem como pessoas e profissionais.
                </p>
                <h2 className="text-2xl tracking-tight text-gray-900 dark:text-white">Valores</h2>
                <ol className="mt-2 mb-4 text-gray-600 dark:text-gray-400 leading-relaxed list-decimal list-inside">
                  <li>Respeito entre os colaboradores e seus clientes;</li>
                  <li>Preocupação com questões sociais e sustentáveis;</li>
                  <li>Respeito com as diferenças culturais, religiosas e sociais;</li>
                  <li>Inovação, crescimento e coragem.</li>
                </ol>
              </div>

              {/* Card Vestibular */}
              <div className="col-span-12 lg:col-span-6 flex items-center justify-center">
                <div className="w-full max-w-md">
                  <a
                    href="https://vestibular.fatec.sp.gov.br/home/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-[1.02]"
                  >
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                      <div className="relative border-4 border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                        <img
                          src="/images/vest_20261.jpeg"
                          alt="Vestibular FATEC 2026"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="mt-4 p-2 text-center">
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                          Vestibular FATEC 2026
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 group-hover:text-primary transition-colors">
                          Inscreva-se já!
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
