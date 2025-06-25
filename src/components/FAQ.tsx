import React from 'react';

const FAQ: React.FC = () => {
    const faqs = [
        {
            question: "Quais serviços você oferece?",
            answer: "Oferecemos serviços de contabilidade, incluindo preparação de impostos, contabilidade e consultoria financeira."
        },
        {
            question: "Como posso entrar em contato?",
            answer: "Você pode entrar em contato através do nosso formulário na página de contato ou pelo WhatsApp."
        },
        {
            question: "Qual é o seu horário de atendimento?",
            answer: "Estamos disponíveis de segunda a sexta-feira, das 9h às 18h."
        },
        {
            question: "Vocês atendem clientes fora da minha cidade?",
            answer: "Sim, atendemos clientes de diversas localidades, oferecendo serviços online."
        },
        {
            question: "Como posso agendar uma consulta?",
            answer: "Você pode agendar uma consulta através do nosso formulário de contato ou entrando em contato pelo WhatsApp."
        }
    ];

    return (
        <div className="faq-container">
            <h2>Perguntas Frequentes</h2>
            <ul>
                {faqs.map((faq, index) => (
                    <li key={index}>
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FAQ;