function ContactPage() {
  return (
    <div className="content-page">
      <section className="page-hero compact">
        <span className="eyebrow">Contato</span>
        <h1>Vamos criar algo incrível para o seu próximo passo.</h1>
      </section>

      <section className="contact-layout">
        <div className="contact-info">
          <h2>Fale com a gente</h2>
          <p>
            Se você quer desenvolver uma marca mais forte, um site com melhor
            conversão ou uma estratégia digital eficiente, estamos prontos para te
            ajudar.
          </p>

          <ul>
            <li>Email: contato@northstudio.com</li>
            <li>Telefone: (11) 99999-0000</li>
            <li>São Paulo - SP</li>
          </ul>
        </div>

        <form className="contact-form">
          <label>
            Nome
            <input type="text" placeholder="Seu nome" />
          </label>

          <label>
            Email
            <input type="email" placeholder="seu@email.com" />
          </label>

          <label>
            Mensagem
            <textarea rows="5" placeholder="Conte um pouco sobre seu projeto" />
          </label>

          <button type="submit" className="primary-button full-width">
            Enviar mensagem
          </button>
        </form>
      </section>
    </div>
  )
}

export default ContactPage
