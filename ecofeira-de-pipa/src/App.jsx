import React from 'react';

const indicators = [
    ['25', 'pessoas na feira hoje'],
    ['21', 'mulheres participantes'],
    ['4', 'pessoas indígenas'],
    ['+60', 'famílias já participaram'],
];

const products = [
    'Alimentos orgânicos e cultivados com cuidado',
    'Comidas vegetarianas e veganas',
    'Opções sem lactose e sem glúten',
    'Artesanato criado por mulheres',
    'Plantas, cosméticos naturais e terapias',
    'Livros e conhecimentos populares',
];

const App = () => (
    <div className="site-shell">
        <header className="site-header">
            <a className="brand" href="#inicio" aria-label="Ecofeira da Pipa — início">
                <img className="brand-logo" src="src/assets/ecofeira-logo-cropped.png" alt="Ecofeira da Pipa — Produtos Agroecológicos e Artesanais" />
            </a>
            <nav aria-label="Navegação principal">
                <a href="#sobre">A feira</a>
                <a href="#produtos">O que encontrar</a>
                <a href="#cultura">Cultura</a>
            </nav>
        </header>

        <main>
            <section className="hero" id="inicio">
                <img className="leaf-decoration hero-leaf" src="src/assets/folhas.jpg" alt="" aria-hidden="true" />
                <div className="hero-copy">
                    <p className="eyebrow">Praia de Pipa · Tibau do Sul</p>
                    <h1>Mais que uma feira,<br /><span>um movimento.</span></h1>
                    <p className="hero-description">
                        Pessoas da comunidade se encontram, compartilham saberes e sabores
                        e apoiam quem produz em Pipa.
                    </p>
                    <a className="text-link" href="#sobre">Conheça a Ecofeira <span aria-hidden="true">↓</span></a>
                </div>
                <img
                    className="hero-art"
                    src="src/assets/portfolio-photo-3.jpg"
                    alt="Feirantes e visitantes na Ecofeira ao ar livre, com um arco-íris ao fundo"
                />
                <span className="hero-note">Feita com a comunidade, para a comunidade.</span>
            </section>

            <section className="about section-wrap" id="sobre">
                <img className="leaf-decoration about-leaf" src="src/assets/folhas.jpg" alt="" aria-hidden="true" loading="lazy" />
                <div className="section-heading">
                    <p className="eyebrow">Encontro que transforma</p>
                    <h2>Uma feira que cresce<br />com a comunidade.</h2>
                </div>
                <div className="about-copy">
                    <p>
                        A Ecofeira da Pipa é organizada por quem faz parte dela. É um espaço
                        para pessoas que produzem, criam e compartilham. Aqui, valorizamos
                        a cultura local e apoiamos uma forma mais justa de trabalhar e comprar.
                    </p>
                    <div className="stats" aria-label="Números da Ecofeira">
                        {indicators.map(([number, label]) => (
                            <div className="stat" key={label}>
                                <strong>{number}</strong>
                                <span>{label}</span>
                            </div>
                        ))}
                    </div>
                    <p className="source-note">Números apresentados no material de divulgação da Ecofeira.</p>
                </div>
            </section>

            <section className="products section-wrap" id="produtos">
                <img className="leaf-decoration products-leaf" src="src/assets/folhas.jpg" alt="" aria-hidden="true" loading="lazy" />
                <div className="products-copy">
                    <p className="eyebrow">Feito por pessoas daqui</p>
                    <h2>Produtos, sabores<br />e ideias locais.</h2>
                    <p>
                        Em cada banca, você encontra produtos feitos ou cultivados por
                        pessoas da região.
                    </p>
                    <ul className="product-list">
                        {products.map((product) => <li key={product}>{product}</li>)}
                    </ul>
                </div>
                <img
                    className="products-art"
                    src="src/assets/portfolio-photo-2.jpg"
                    alt="Bancas de produtos da Ecofeira ao ar livre"
                    loading="lazy"
                />
            </section>

            <section className="culture" id="cultura">
                <img className="leaf-decoration culture-leaf" src="src/assets/folhas.jpg" alt="" aria-hidden="true" loading="lazy" />
                <img
                    className="culture-art"
                    src="src/assets/portfolio-photo-1.jpg"
                    alt="Comunidade reunida na Ecofeira durante um encontro à noite"
                    loading="lazy"
                />
                <div className="culture-copy">
                    <p className="eyebrow">Ecofeira Cultural</p>
                    <h2>Cultura e saberes<br />de Pipa.</h2>
                    <p>
                        Na feira, há música, teatro, capoeira, zambê, livros e conhecimentos
                        populares. É um espaço para se encontrar, aprender e celebrar.
                    </p>
                    <div className="topic-tags" aria-label="Temas valorizados pela Ecofeira">
                        <span>Cuidado com a natureza</span>
                        <span>Respeito e igualdade entre gêneros</span>
                        <span>Culturas afro-brasileiras e indígenas</span>
                        <span>Produção familiar</span>
                        <span>Comércio justo e solidário</span>
                    </div>
                </div>
            </section>
        </main>

        <footer className="site-footer">
            <a className="brand footer-brand" href="#inicio" aria-label="Ecofeira da Pipa — voltar ao início">
                <img className="brand-logo" src="src/assets/ecofeira-logo-cropped.png" alt="" />
            </a>
            <p>Produtos locais, cultura e encontros na Praia de Pipa.</p>
        </footer>
    </div>
);

export default App;
