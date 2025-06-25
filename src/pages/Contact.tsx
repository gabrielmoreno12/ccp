import React from 'react';
import ContactForm from '../components/ContactForm';
import WhatsAppLink from '../components/WhatsAppLink';
import GoogleMap from '../components/GoogleMap';

const Contact: React.FC = () => {
    return (
        <div className="contact-page">
            <h1>Contato</h1>
            <p>Entre em contato conosco para discutir suas necessidades financeiras. Estamos aqui para ajudar!</p>
            <ContactForm />
            <WhatsAppLink />
            <h2>Nosso Local</h2>
            <GoogleMap />
        </div>
    );
};

export default Contact;