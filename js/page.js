export default class Page {
  constructor (routes = []) {
    this.routes = routes
  }

  withRoute (path, title, component, resourceUrl) {
    const routes = this.routes.concat(
      [
        { path, title, component, resourceUrl }
      ]
    )
    return new Page(routes)
  }

  async load () {
    const { default: Component } = await import('./pages/home.js')

    customElements.define('wc-content', Component)
  }
}
