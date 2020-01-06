//index.js
//获取应用实例
const app = getApp()
wx.cloud.init()
Page({
  data: {
    logo:'../images/logo.png',
    caiyang:'../images/caiyang.png'
  },
  onLaunch: function () {

  },

  onLoad: function () {
  
  },

  toaccess: function() {
    wx.switchTab({
      url: '../form/form',
    })
  },

  tohistory: function() {
    wx.switchTab({
      url: '../my/my',
    })
  },

  tocaiyang:function() {
    wx.navigateTo({
      url: '../caiyang/caiyang',
    })
  }


})
