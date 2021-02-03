module.exports = app => {
  const { router, controller } = app
  const auth = app.middleware.auth()

  router.prefix('/api/v1') // 设置基础路径

  router.post('/users', controller.user.create)
  router.post('/users/login', controller.user.login)
  router.get('/user', auth, controller.user.getCurrentUser)
  router.patch('/user', auth, controller.user.update)
  router.get('/users/:userId', app.middleware.auth({ required: false }), controller.user.getUser)

  // 用户订阅
  router.post('/users/:userId/subscribe', auth, controller.user.subscribe)
  router.delete('/users/:userId/subscribe', auth, controller.user.unsubscribe)
  router.get('/users/:userId/subscriptions', controller.user.getSubscriptions)

  // 阿里云 VOD
  router.get('/vod/CreateUploadVideo', auth, controller.vod.createUploadVideo)
  router.get('/vod/RefreshUploadVideo', auth, controller.vod.refreshUploadVideo)
  router.get('/vod/GetVideoPlayAuth', controller.vod.getVideoPlayAuth)

  // 视频
  router.post('/videos', auth, controller.video.createVideo)
}
