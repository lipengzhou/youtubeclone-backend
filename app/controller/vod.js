var RPCClient = require('@alicloud/pop-core').RPCClient
const Controller = require('egg').Controller

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
    const body = this.ctx.request.body
    this.ctx.validate({
      Title: { type: 'string' },
      FileName: { type: 'string' }
    })
    const vodClient = initVodClient('LTAI4FzgRRRN2MjwBzc3xQtp', 'xAllGuORtBDVcrTQpTOWu4HfjYgN1p')
    this.ctx.body = await vodClient.request(
      'CreateUploadVideo',
      body,
      {}
    )
  }
}

module.exports = VodController
