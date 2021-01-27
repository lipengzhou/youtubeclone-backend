module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const userSchema = new Schema({
    username: { // 用户名
      type: String,
      required: true
    },
    email: { // 邮箱
      type: String,
      required: true
    },
    password: { // 密码
      type: String,
      select: false,
      required: true
    },
    avatar: { // 头像
      type: String,
      default: null
    },
    cover: {
      type: String, // 封面
      default: null
    },
    channelDescription: { // 频道介绍
      type: String,
      default: null
    },
    createdAt: { // 创建时间
      type: Date,
      default: Date.now
    },
    updatedAt: { // 更新时间
      type: Date,
      default: Date.now
    }
  })

  return mongoose.model('User', userSchema)
}
