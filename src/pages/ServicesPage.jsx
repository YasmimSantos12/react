const services = [
  {
    title: 'Branding e posicionamento',
    description:
      'Estratégias de marca, identidade visual e comunicação para reforçar a percepção da sua empresa no mercado.',
  },
  {
    title: 'Sites e landing pages',
    description:
      'Desenvolvimento de páginas elegantes e funcionais, com foco em clareza, conversão e experiência do usuário.',
  },
  {
    title: 'Marketing digital',
    description:
      'Campanhas, conteúdo e estratégias para atrair leads, fortalecer a presença online e aumentar resultados.',
  },
  {
    title: 'Consultoria criativa',
    description:
      'Apoio estratégico para definir a melhor direção visual, de comunicação e crescimento para o seu negócio.',
  },
]

function ServicesPage() {
  return (
    <div className="content-page">
      <section className="page-hero compact">
        <span className="eyebrow">Serviços</span>
        <h1>Soluções pensadas para o crescimento real da sua marca.</h1>
      </section>

      <section className="services-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <div className="service-icon" aria-hidden="true">
              ✦
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default ServicesPage
