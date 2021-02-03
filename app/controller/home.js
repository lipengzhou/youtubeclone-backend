const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    ctx.body = 'hi, egg'
  }
}

module.exports = HomeController
