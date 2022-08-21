class App {
  constructor (elementName = 'wc-pages', routes = []) {
    this.elementName = elementName
    this.routes = routes
  }

  /**
   * @param {string} webUri - Web URI of the web component e.g. /page.html
   * @param {string} file - File of the web component e.g. /js/page.js
   * @returns {Page}
   */
  withWebComponent (webUri, file) {
    const routes = this.routes.concat(
      [
        { webUri, file }
      ]
    )
    return new App(this.elementName, routes)
  }

  /**
   * @param {Request} request
   */
  async start (request) {
    const route = this.routes.find(route => route.webUri === request.path())
    const { default: Component } = await import(route.file)

    customElements.define(this.elementName, Component)
  }
}

export default App
