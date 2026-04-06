/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  ChevronRight, 
  Clock, 
  Award, 
  Users, 
  CheckCircle2, 
  MessageSquare, 
  Zap,
  Menu,
  X,
  ArrowRight,
  Play
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Entrance
    const tl = gsap.timeline();
    tl.from('.hero-content > *', {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out'
    });

    tl.from('.hero-image', {
      scale: 1.05,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out'
    }, '-=0.8');

    // Scroll Reveal for sections
    const sections = gsap.utils.toArray('.scroll-reveal');
    sections.forEach((section: any) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      });
    });

    // Marquee Animation
    gsap.to('.marquee-content', {
      xPercent: -50,
      repeat: -1,
      duration: 25,
      ease: 'none'
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between glass rounded-full px-8 py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl">R</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tighter">REVIT <span className="text-brand-navy">MASTER</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#home" className="hover:text-white transition-colors">Início</a>
            <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a>
            <a href="#sobre" className="hover:text-white transition-colors">O Curso</a>
            <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
          </div>

          <button className="bg-brand-navy text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-navy/80 transition-all active:scale-95 border border-white/10">
            Matricule-se Agora
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Architectural 3D Modeling" 
            className="w-full h-full object-cover hero-image"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl hero-content">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-pulse border-brand-navy/30">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-xs font-bold tracking-widest uppercase">Inscrições Abertas - Revit 2026</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8 text-gradient">
              DOMINE O FUTURO DA <br /> ENGENHARIA CIVIL.
            </h1>
            
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl mb-12 leading-relaxed">
              Projetos de alta performance desenvolvidos no Revit 2026. Aprenda com quem tem mais de 10 anos de mercado e suporte especializado 24 horas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative bg-brand-navy text-white px-10 py-5 rounded-full font-bold text-lg overflow-hidden transition-all hover:pr-14 border border-white/10">
                <span className="relative z-10">Começar Minha Jornada</span>
                <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </button>
              <button className="flex items-center gap-3 px-10 py-5 rounded-full glass font-bold text-lg hover:bg-brand-navy/10 transition-all border-brand-navy/20">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Play className="w-4 h-4 fill-white" />
                </div>
                Ver Trailer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Marquee */}
      <section className="py-20 border-y border-white/5 bg-white/[0.02] overflow-hidden">
        <div className="marquee-container relative flex">
          <div className="marquee-content flex items-center gap-20 whitespace-nowrap">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-4">
                  <Award className="w-8 h-8 text-white/20" />
                  <span className="text-4xl font-display font-black text-white/10 uppercase tracking-widest">Revit 2026 Certified</span>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="w-8 h-8 text-white/20" />
                  <span className="text-4xl font-display font-black text-white/10 uppercase tracking-widest">10k+ Alunos</span>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-8 h-8 text-white/20" />
                  <span className="text-4xl font-display font-black text-white/10 uppercase tracking-widest">Suporte 24/7</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section id="diferenciais" className="py-32 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">
              POR QUE ESCOLHER <br /> NOSSO MÉTODO?
            </h2>
            <p className="text-white/50 text-lg max-w-xl">
              Unimos a experiência prática de mercado com as ferramentas mais avançadas do mundo para formar profissionais completos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "1. Aplicação em Projetos Reais",
                desc: "O curso foca no que o mercado exige hoje, como o desenvolvimento de plantas arquitetônicas para complexos de KitNets e galpões comerciais.",
                icon: <Zap className="w-6 h-6 text-white" />
              },
              {
                title: "2. Visão 360° da Engenharia",
                desc: "Diferente de cursos focados apenas em software, aqui você entende a integração entre o projeto no Revit e as necessidades de financiamento (como o FCO) e orçamentação técnica.",
                icon: <Users className="w-6 h-6 text-white" />
              },
              {
                title: "3. Didática de Professor",
                desc: "A experiência como professor garante uma trilha de aprendizado clara, organizada e eficiente para alunos de todos os níveis.",
                icon: <Award className="w-6 h-6 text-white" />
              },
              {
                title: "4. Experiência Prática de Mercado",
                desc: "O conteúdo não é apenas teórico; ele é baseado na vivência real de um Engenheiro Civil que atua em projetos complexos, desde infraestrutura até incorporação.",
                icon: <Clock className="w-6 h-6 text-white" />
              },
              {
                title: "5. Domínio do Revit",
                desc: "Aprenda a utilizar as ferramentas mais avançadas do mundo para criar projetos precisos, otimizar orçamentos e reduzir erros de execução.",
                icon: <CheckCircle2 className="w-6 h-6 text-white" />
              },
              {
                title: "6. Foco em Resultados Técnicos",
                desc: "O método é desenhado por quem entende de normas técnicas e viabilidade financeira, garantindo que o seu aprendizado seja aplicado em projetos de alto valor.",
                icon: <MessageSquare className="w-6 h-6 text-white" />
              }
            ].map((item, index) => (
              <div key={index} className="glass rounded-3xl p-8 border-brand-navy/20 hover:border-brand-navy/50 bg-white/[0.03] transition-all">
                <div className="w-12 h-12 bg-brand-navy/20 rounded-2xl flex items-center justify-center mb-6 border border-brand-navy/30">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-white/60 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre / Serviços */}
      <section id="sobre" className="py-32 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="scroll-reveal">
              <span className="text-white/40 font-bold tracking-widest uppercase text-sm mb-4 block">O Especialista</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8">
                ENGENHARIA COM <br /> QUEM FAZ.
              </h2>
              <p className="text-xl text-white/60 leading-relaxed mb-10">
                Sou Engenheiro Civil com mais de uma década de experiência em grandes projetos estruturais e arquitetônicos. Minha missão é transformar jovens profissionais em mestres do BIM, capazes de entregar projetos impecáveis no Revit 2026.
              </p>
              
              <ul className="space-y-6 mb-12">
                {[
                  "Metodologia focada em projetos reais",
                  "Templates exclusivos de alta produtividade",
                  "Acesso vitalício às atualizações",
                  "Comunidade fechada de alunos"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-lg font-medium text-white/80">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="bg-brand-navy text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-navy/80 transition-all border border-white/10">
                Conhecer a Grade Curricular
              </button>
            </div>

            <div className="relative scroll-reveal">
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden glass p-4 border-brand-navy/30">
                <img 
                  src="https://lh3.googleusercontent.com/d/1t7X4hfXkSiAxJoXI0nWdipvfAdw5j7MJ" 
                  alt="Engineer Instructor" 
                  className="w-full h-full object-cover rounded-[32px]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl max-w-xs hidden md:block border-brand-navy/30">
                <p className="text-2xl font-bold mb-2 text-white">10+ Anos</p>
                <p className="text-white/50 text-sm">De experiência prática em canteiros e escritórios.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center scroll-reveal mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">O QUE DIZEM NOSSOS ALUNOS</h2>
            <p className="text-white/50 text-lg">Resultados reais de quem já transformou sua carreira.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Lucas Silva",
                role: "Engenheiro Civil",
                text: "O curso mudou minha forma de projetar. O suporte 24h foi essencial quando tive um problema em um projeto real às 2h da manhã.",
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
              },
              {
                name: "Mariana Costa",
                role: "Arquiteta",
                text: "A didática é incrível. O Revit 2026 parece muito mais simples agora. Já recuperei o investimento no primeiro mês.",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
              },
              {
                name: "Ricardo Oliveira",
                role: "Estudante de Engenharia",
                text: "Entrei no estágio já sabendo mais que os profissionais antigos. O método bento grid de ensino é muito prático.",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((testimonial, i) => (
              <div key={i} className="scroll-reveal bento-card">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.img} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-xs text-white/40">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white/70 italic">"{testimonial.text}"</p>
                <div className="flex gap-1 mt-6">
                  {[1, 2, 3, 4, 5].map(s => (
                    <Zap key={s} className="w-4 h-4 fill-white text-white" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto glass rounded-[60px] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
          <div className="relative z-10 scroll-reveal">
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8">
              PRONTO PARA O <br /> PRÓXIMO NÍVEL?
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Junte-se a milhares de engenheiros que já estão dominando o Revit 2026. Vagas limitadas para a próxima turma com suporte 24h.
            </p>
            <button className="bg-brand-navy text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-all active:scale-95 shadow-[0_0_50px_rgba(0,0,128,0.3)] border border-white/10">
              Garantir Minha Vaga Agora
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <span className="text-black font-bold text-sm">R</span>
            </div>
            <span className="font-display font-bold text-lg tracking-tighter">REVIT <span className="text-brand-navy">MASTER</span></span>
          </div>
          
          <p className="text-white/30 text-sm">
            Copyright © 2026 Empresa de venda de cursos de engenharia. Todos os direitos reservados.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors"><MessageSquare className="w-5 h-5" /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Users className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
