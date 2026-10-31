function HomePage() {
  return (
    <div className="landing-page">
      <div className="hero-panel">
        <div className="globe-scene" aria-label="Ilustração de destino">
          <img className="globe-image" src="/img1.jpg" alt="Globo terrestre com marcadores de viagem" />
        </div>

        <h1 className="headline">
          O seu próximo <span className="accent">destino</span> pode estar aqui...
        </h1>

        <p className="intro">
          Aqui você encontra uma seleção de pacotes completos para as suas férias!
        </p>

        <div className="description">
          <p>
            No <span className="brand">ConnectFlight</span> você encontra pacotes de viagens nacionais e
            internacionais que incluem: passagens aéreas, hotéis, café da manhã,
            e até seguro viagem com <span className="highlight">preços arrasadores!</span>
          </p>

          <p>
            Se você ainda não tem um destino definido, confira nossa seção de ofertas.
          </p>
        </div>

        <nav className="tabs" aria-label="Navegação do rodapé">
          <a href="#destinos">Destinos</a>
          <a href="#ofertas">Ofertas</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>

      <div className="footer-wave" aria-hidden="true" />
    </div>
  )
}

export default HomePage
