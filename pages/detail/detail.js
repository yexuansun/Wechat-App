// pages/detail/detail.js
const app = getApp()
const db = wx.cloud.database()
const form = db.collection('form')
const form1 = db.collection('form1')
const form2 = db.collection('form2')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    formdata:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var barcode = wx.getStorageSync('barcode_key')
    form1.where({
      barcode: barcode
    }).get({
      success: res=> {
        var formdata1 = res.data
        console.log(formdata1)
        const self = this
        self.data.formdata = formdata1[0]
        self.setData(self.data)
      }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  fanhui: function () {
    wx.switchTab({
      url: '../my/my',
    })
  }
})