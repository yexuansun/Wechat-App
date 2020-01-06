// pages/form2/form2.js
var util = require('../../utils/util.js');
const app = getApp()

Page({
  data:{
    imgsrc: "../images/picture.png",
    name2:'',
    phone2:'',
    idcard2:'',
    male2:'',
    imgID:''
  },

  /**
 * 生命周期函数--监听页面显示
 */
  onShow: function () {
    const self = this
    self.data.imgID = wx.getStorageSync('drawpath')
    self.data.name2 = wx.getStorageSync('name2')
    self.data.male2 = wx.getStorageSync('male2')
    self.data.phone2 = wx.getStorageSync('phone2')
    self.data.idcard2 = wx.getStorageSync('idcard2')
    self.data.imgid = wx.getStorageSync('imgsrc')
    self.setData(self.data)

  },



  name: function (e) {
    this.setData({
      name2: e.detail.value,
    })
    wx.setStorageSync('name2', e.detail.value)
  }, 

  idcard: function (e) {
    this.setData({
      idcard2: e.detail.value,
    })
    wx.setStorageSync('idcard2', e.detail.value)
  }, 

  phone: function (e) {
    this.setData({
      phone2: e.detail.value,
    })
    wx.setStorageSync('phone2', e.detail.value)
  }, 

  male2: function (e) {
    this.setData({
      male2: e.detail.value,
    })
    wx.setStorageSync('male2', e.detail.value)
  }, 

  tijiao: function (e) {
    var name2 = this.data.name2
    var male2 = this.data.male2
    var idcard2 = this.data.idcard2
    var phone2 = this.data.phone2
    var username = app.username
    var timestamp = util.formatTime(new Date())
    var imgid = wx.getStorageSync('imgid')
    this.setData({
      timestamp: timestamp
    })
    const db = wx.cloud.database()
    db.collection('form2').add({
      data: {
        患者姓名: name2,
        性别: male2,
        身份证号: idcard2,
        联系方式: phone2,
        提交时间: timestamp,
        imgid: imgid,
        username: username

      },
      success: res => {
        this.setData({
          csid: res._id
        })
        wx.showToast({
          title: '提交成功',
        })
        console.log('数据库成功添加', res_id)
        app.form2id = this.data.csid;
      }
    })
  },

  sign1: function () {
    wx.redirectTo({
      url: '../draw/draw',
    })
  },

  fanhui: function () {
    wx.setStorageSync('id2', this.data.csid)
    if (this.data.csid) {
      wx.setStorageSync('check2', 'true')
    }
    wx.switchTab({
      url: '../form/form',
    })
  }
})