import React from 'react';

const Services: React.FC = () => {
    return (
        <div className="services">
            <h1>Nossos Serviços</h1>
            <p>Oferecemos uma variedade de serviços contábeis para atender às suas necessidades financeiras:</p>
            <ul>
                <li>
                    <h2>Preparação de Impostos</h2>
                    <p>Garantimos que sua declaração de impostos seja feita de forma precisa e dentro do prazo.</p>
                </li>
                <li>
                    <h2>Contabilidade</h2>
                    <p>Oferecemos serviços de contabilidade para manter suas finanças organizadas e em conformidade.</p>
                </li>
                <li>
                    <h2>Consultoria Financeira</h2>
                    <p>Fornecemos orientação financeira personalizada para ajudar você a alcançar seus objetivos.</p>
                </li>
                <li>
                    <h2>Planejamento Financeiro</h2>
                    <p>Desenvolvemos estratégias financeiras para maximizar seus recursos e investimentos.</p>
                </li>
            </ul>
            <p>Entre em contato conosco para saber mais sobre como podemos ajudar você ou sua empresa!</p>
        </div>
    );
};

export default Services;