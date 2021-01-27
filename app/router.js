module.exports = app => {
  const { router, controller } = app
  router.prefix('/api/v1') // 设置基础路径

  router.post('/users', controller.user.create)
  router.post('/users/login', controller.user.login)
}
