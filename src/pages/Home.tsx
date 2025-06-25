import React, { useRef, useEffect } from 'react';
import './Home.css';
import whatsappIcon from '../styles/assets/zap.png'; // ajuste o caminho se necessário

const highlights = [
  {
    icon: "🤝",
    title: "Atendimento Humanizado",
    description: "Você fala direto com especialistas, sem burocracia.",
  },
  {
    icon: "🔒",
    title: "Confiança & Transparência",
    description: "Seus dados e informações sempre protegidos.",
  },
  {
    icon: "⚡",
    title: "Agilidade",
    description: "Respostas rápidas e soluções eficientes para seu negócio.",
  },
  {
    icon: "📱",
    title: "Suporte Digital",
    description: "Atendimento por WhatsApp, e-mail e telefone.",
  },
];

const services = [
  {
    icon: "📄",
    title: "Preparação de Impostos",
    description: "Cuidamos de toda a parte fiscal para você não se preocupar.",
  },
  {
    icon: "📊",
    title: "Contabilidade",
    description: "Organização e controle financeiro para seu negócio crescer.",
  },
  {
    icon: "💡",
    title: "Consultoria Financeira",
    description: "Orientação personalizada para suas decisões financeiras.",
  },
  {
    icon: "💵",
    title: "Folha de Pagamento",
    description: "Gestão de salários, benefícios e obrigações trabalhistas.",
  },
  {
    icon: "🏢",
    title: "Assessoria Empresarial",
    description: "Apoio estratégico para pequenas empresas e autônomos.",
  },
];

// Substitua pelo seu número com DDD e sem espaços
const whatsappNumber = '5599999999999'; // Exemplo: 55 + DDD + número

const Home: React.FC = () => {
  const highlightsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Função utilitária para scroll horizontal suave até o card
  function scrollCardIntoView(container: HTMLDivElement, index: number) {
    const card = container.children[index] as HTMLElement;
    if (!card) return;
    const containerRect = container.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const scrollLeft = card.offsetLeft - (containerRect.width / 2 - cardRect.width / 2);
    container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
  }

  // Auto-scroll para o carrossel de diferenciais
  useEffect(() => {
    const container = highlightsRef.current;
    if (!container) return;

    let index = 0;
    const cards = container.children.length;
    let interval: NodeJS.Timeout;

    function autoScroll() {
      if (window.innerWidth > 700) return;
      index = (index + 1) % cards;
      scrollCardIntoView(container, index);
    }

    interval = setInterval(autoScroll, 2500);

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll para o carrossel de serviços
  useEffect(() => {
    const container = servicesRef.current;
    if (!container) return;

    let index = 0;
    const cards = container.children.length;
    let interval: NodeJS.Timeout;

    function autoScroll() {
      if (window.innerWidth > 700) return;
      index = (index + 1) % cards;
      scrollCardIntoView(container, index);
    }

    interval = setInterval(autoScroll, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <header className="hero">
        <h1>Bem-vindo à <span className="ccp-highlight">CCP Soluções Contábeis</span></h1>
        <p>Atendimento personalizado, confiança e soluções financeiras para pequenas empresas, autônomos e pessoas físicas.</p>
        <a
          href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de agendar uma consulta gratuita.`}
          className="cta-button zap"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappIcon} alt="WhatsApp" className="zap-icon" />
          Agende uma consulta gratuita
        </a>
      </header>
      <section className="cards-section">
        <h2>Nossos Diferenciais</h2>
        <div className="cards-container" ref={highlightsRef}>
          {highlights.map((item, idx) => (
            <div className="card animated-card" key={idx}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="cards-section">
        <h2>Principais Serviços</h2>
        <div className="cards-container" ref={servicesRef}>
          {services.map((service, idx) => (
            <div className="card animated-card" key={idx}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;