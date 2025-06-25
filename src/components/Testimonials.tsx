import React from 'react';

const testimonialsData = [
    {
        name: "João Silva",
        review: "O serviço prestado foi excepcional! A equipe é muito atenciosa e sempre disposta a ajudar.",
    },
    {
        name: "Maria Oliveira",
        review: "Confiabilidade e profissionalismo são as palavras que definem essa contabilidade. Recomendo a todos!",
    },
    {
        name: "Carlos Pereira",
        review: "Estou muito satisfeito com o suporte que recebo. Eles realmente se importam com seus clientes.",
    },
];

const Testimonials: React.FC = () => {
    return (
        <section className="testimonials">
            <h2>Depoimentos</h2>
            <div className="testimonial-list">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="testimonial-item">
                        <p>"{testimonial.review}"</p>
                        <h4>- {testimonial.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;