const Serive = require('egg').Service
const jwt = require('jsonwebtoken')

class UserService extends Serive {
  get User () {
    return this.app.model.User
  }

  findByUsername (username) {
    return this.User.findOne({
      username
    })
  }

  findByEmail (email) {
    return this.User.findOne({
      email
    })
  }

  async createUser (data) {
    data.password = this.ctx.helper.md5(data.password)
    const user = new this.User(data)
    await user.save() // 保存到数据库中
    return user
  }

  createToken (data) {
    return jwt.sign(data, this.app.config.jwt.secret, {
      expiresIn: this.app.config.jwt.expiresIn
    })
  }
}

module.exports = UserService
