import App from './app.js'
import Request from './request.js'

new App()
  .withWebComponent('/index.html', './pages/home.js')
  .withWebComponent('/about.html', './pages/about.js')
  .withWebComponent('/contact.html', './pages/contact.js')
  .start(new Request())
