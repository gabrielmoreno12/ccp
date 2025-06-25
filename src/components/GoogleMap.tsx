import React from 'react';

const GoogleMap: React.FC = () => {
    return (
        <div style={{ width: '100%', height: '400px' }}>
            <iframe
                title="Localização do Escritório"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.123456789012!2d-46.123456789012!3d-23.123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce123456789012%3A0x1234567890123456!2sSeu%20Escrit%C3%B3rio%20de%20Contabilidade!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default GoogleMap;