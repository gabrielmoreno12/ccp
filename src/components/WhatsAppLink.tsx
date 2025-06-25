import React from 'react';

const WhatsAppLink: React.FC = () => {
    const whatsappNumber = '5511999999999'; // Replace with your WhatsApp number
    const message = 'Olá, gostaria de mais informações sobre os serviços de contabilidade.'; // Default message

    return (
        <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: '#25D366' }}
        >
            <button style={{ padding: '10px 20px', backgroundColor: '#25D366', color: 'white', border: 'none', borderRadius: '5px' }}>
                Contate-nos pelo WhatsApp
            </button>
        </a>
    );
};

export default WhatsAppLink;