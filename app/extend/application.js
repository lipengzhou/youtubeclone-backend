/**
 * 扩展 Egg.js 应用实例 Application
 */
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

let vodClient = null

module.exports = {
  get vodClient () {
    if (!vodClient) {
      vodClient = initVodClient('LTAI4GBDnU3uNnaPhArWbAXa','hup32yUztg6NxtzHkhXpw12OlyX4TP')
    }
    return vodClient
  }
}
