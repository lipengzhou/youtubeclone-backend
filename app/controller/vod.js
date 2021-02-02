const Controller = require('egg').Controller

var RPCClient = require('@alicloud/pop-core').RPCClient

function initVodClient(accessKeyId, accessKeySecret) {
  var regionId = 'cn-shanghai' // 点播服务接入区域
  var client = new RPCClient({
    accessKeyId: accessKeyId,
    accessKeySecret: accessKeySecret,
    endpoint: 'http://vod.' + regionId + '.aliyuncs.com',
    apiVersion: '2017-03-21'
  })

  return client
}

class VodController extends Controller {
  async createUploadVideo() {
    const query = this.ctx.query
    this.ctx.validate(
      {
        Title: { type: 'string' },
        FileName: { type: 'string' }
      },
      query
    )

    const vodClient = initVodClient(
      'LTAI4GBDnU3uNnaPhArWbAXa',
      'hup32yUztg6NxtzHkhXpw12OlyX4TP'
    )

    this.ctx.body = await vodClient.request('CreateUploadVideo', query, {})
  }
}

module.exports = VodController
