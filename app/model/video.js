module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const videoSchema = new Schema({
    title: { // 视频标题
      type: String,
      required: true
    },
    description: { // 视频介绍
      type: String,
      required: true
    },
    playUrl: { // 视频播放地址
      type: String,
      required: true
    },
    cover: { // 视频封面
      type: String,
      required: true
    },
    user: {
      type: mongoose.ObjectId, // 视频作者
      required: true,
      ref: 'User'
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

  return mongoose.model('Video', videoSchema)
}
