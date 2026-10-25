import React from 'react';

const indicators = [
    ['25', 'feirantes hoje'],
    ['21', 'mulheres na feira'],
    ['4', 'feirantes indígenas'],
    ['+60', 'famílias já fizeram parte'],
];

const products = [
    'Produtos agroecológicos e orgânicos',
    'Alimentos vegetarianos e veganos',
    'Opções sem lactose e sem glúten',
    'Artesanato feito por mulheres',
    'Plantas, cosméticos naturais e terapias',
    'Livros e saberes populares',
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
                <div className="hero-copy">
                    <p className="eyebrow">Praia de Pipa · Tibau do Sul</p>
                    <h1>Mais que uma feira,<br /><span>um movimento.</span></h1>
                    <p className="hero-description">
                        Um encontro de pessoas, saberes e sabores que fortalece a economia
                        solidária e celebra a comunidade de Pipa.
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
                <div className="section-heading">
                    <p className="eyebrow">Encontro que transforma</p>
                    <h2>Uma rede que cultiva<br />vida em comunidade.</h2>
                </div>
                <div className="about-copy">
                    <p>
                        A Ecofeira da Pipa é uma associação autogestionada que promove
                        a economia solidária. É espaço para quem produz, cria e compartilha
                        com cuidado — valorizando a cultura local e aproximando pessoas.
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
                <div className="products-copy">
                    <p className="eyebrow">Feito por gente da gente</p>
                    <h2>Sabores, criações<br />e cuidado local.</h2>
                    <p>
                        Cada banca traz um pouco da diversidade e do talento de quem faz
                        parte da feira.
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
                <img
                    className="culture-art"
                    src="src/assets/portfolio-photo-1.jpg"
                    alt="Comunidade reunida na Ecofeira durante um encontro à noite"
                    loading="lazy"
                />
                <div className="culture-copy">
                    <p className="eyebrow">Ecofeira Cultural</p>
                    <h2>Cultura viva,<br />saberes compartilhados.</h2>
                    <p>
                        Música, teatro, capoeira, zambê, literatura e saberes populares
                        fazem da feira um espaço aberto para encontros e celebrações.
                    </p>
                    <div className="topic-tags" aria-label="Temas valorizados pela Ecofeira">
                        <span>Sustentabilidade</span>
                        <span>Feminismo e equidade de gênero</span>
                        <span>Culturas afro-brasileiras e indígenas</span>
                        <span>Agricultura familiar</span>
                        <span>Economia solidária</span>
                    </div>
                </div>
            </section>
        </main>

        <footer className="site-footer">
            <a className="brand footer-brand" href="#inicio" aria-label="Ecofeira da Pipa — voltar ao início">
                <img className="brand-logo" src="src/assets/ecofeira-logo-cropped.png" alt="" />
            </a>
            <p>Economia solidária, cultura e comunidade na Praia de Pipa.</p>
        </footer>
    </div>
);

export default App;
