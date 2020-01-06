//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },

  sendMail: function() {
    wx.cloud.callFunction({
      name:'SendMail',
      success:res => {
        console.log(res)
      },
      fail:res => {
        console.log(res)
      }
    })
  }
})
