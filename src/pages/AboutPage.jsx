const values = [
  {
    title: 'Visão clara',
    description:
      'Toda decisão começa por uma estratégia bem definida, alinhando objetivos, público e resultados esperados.',
  },
  {
    title: 'Execução com qualidade',
    description:
      'Acreditamos que bons detalhes fazem a diferença e trazem consistência para cada ponto de contato com a marca.',
  },
  {
    title: 'Relacionamento verdadeiro',
    description:
      'Trabalhamos como parceiros de negócio, ouvindo, apoiando e evoluindo junto com cada cliente.',
  },
]

function AboutPage() {
  return (
    <div className="content-page">
      <section className="page-hero compact">
        <span className="eyebrow">Quem somos</span>
        <h1>Uma equipe apaixonada por transformar marcas em experiências relevantes.</h1>
      </section>

      <section className="info-panel">
        <div className="panel-copy">
          <h2>Nosso propósito</h2>
          <p>
            A North Studio nasceu para conectar estratégia, design e tecnologia de
            forma simplificada, ajudando negócios a crescer com uma presença mais
            forte, autêntica e competitiva.
          </p>
        </div>

        <div className="panel-quote">
          “Soluções digitais com propósito, estética e alto impacto para marcas que
          querem crescer de forma consciente.”
        </div>
      </section>

      <section className="value-section">
        <div className="section-heading left">
          <span className="eyebrow">Nossos valores</span>
          <h2>Princípios que orientam tudo que fazemos.</h2>
        </div>

        <div className="value-grid">
          {values.map((item) => (
            <article key={item.title} className="value-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AboutPage
