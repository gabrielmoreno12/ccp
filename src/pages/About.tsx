import React from 'react';

const About: React.FC = () => {
    return (
        <div className="about-container">
            <h1>Sobre Nós</h1>
            <p>
                Somos uma equipe de contadores dedicados a oferecer serviços financeiros personalizados e confiáveis. 
                Nossa missão é ajudar pequenos empresários, freelancers e indivíduos a gerenciar suas finanças com confiança e tranquilidade.
            </p>
            <p>
                Com anos de experiência no setor, entendemos as necessidades únicas de nossos clientes e trabalhamos em estreita colaboração 
                para fornecer soluções que atendam às suas expectativas. Acreditamos que a confiança é a base de qualquer relacionamento, 
                e estamos comprometidos em construir essa confiança através de um atendimento excepcional e transparente.
            </p>
            <h2>Nossos Valores</h2>
            <ul>
                <li>Transparência</li>
                <li>Compromisso com a excelência</li>
                <li>Atendimento personalizado</li>
                <li>Empatia e compreensão</li>
            </ul>
            <h2>Por que escolher nossos serviços?</h2>
            <p>
                Escolher nossos serviços significa optar por um parceiro que se preocupa com o seu sucesso financeiro. 
                Estamos aqui para guiá-lo em cada passo do caminho, garantindo que você tenha as informações e o suporte necessários 
                para tomar decisões informadas.
            </p>
        </div>
    );
};

export default About;