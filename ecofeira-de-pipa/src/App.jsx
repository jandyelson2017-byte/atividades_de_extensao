import React from 'react';

const App = () => {
    return (
        <div className="container">
            <header className="header">
                <h1>A Ecofeira de Pipa</h1>
                <p>Venha participar da nossa feira de produtos ecológicos e sustentáveis!</p>
            </header>
            <section className="event-details">
                <h2>Detalhes do Evento</h2>
                <p>Data: 15 de Outubro de 2023</p>
                <p>Local: Praça Central de Pipa</p>
                <p>Horário: 9h às 17h</p>
            </section>
            <section className="call-to-action">
                <h2>Participe!</h2>
                <p>Traga sua família e amigos para um dia de diversão e aprendizado sobre sustentabilidade.</p>
                <button className="btn btn-primary">Saiba Mais</button>
            </section>
        </div>
    );
};

export default App;