// pages/my/my.js
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
    form.where({
      username: app.username
    }).get({
      success: res => {
        this.setData({
          formdata: res.data
        });
        var formdata = res.data
        for (let i = 0, len = formdata.length; i < len; i++) {
          form1.where({
            _id: formdata[i].id1
          }).get({
            success: res => {
              formdata[i].barcode = res.data[0].barcode;
              console.log(formdata)
              const self = this
              self.data.formdata = formdata
              self.setData(self.data)
            }
          }); 
        }
      }  
    });
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

  click_here: function (e) {
    this.setData({
      barcode_key:e.detail.value
    });
    wx.setStorageSync('barcode_key', e.detail.value)
    wx.redirectTo({
      url: '../detail/detail',
    })
  },

  click_here1: function (e) {
    this.setData({
      reportid:e.detail.value
    });
    console.log(e.detail.value)
    wx.cloud.downloadFile({
      fileID: e.detail.value,
      success: res => {
        wx.openDocument({
          filePath: res.tempFilePath
        })
      }
    })
  }
})