class Contact extends HTMLElement {
  constructor () {
    super()

    const template = document.createElement('template')
    template.innerHTML = /* html */`
            <h1>Contact Us</h1>
        `

    const style = document.createElement('style')
    style.textContent = /* css */''

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.shadowRoot.appendChild(style)
  }
}

export default Contact
