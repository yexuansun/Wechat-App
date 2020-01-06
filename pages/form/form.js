// pages/form/form.js
var util = require('../../utils/util.js');
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id1:'',
    check1:'',
    check2:'',
    select:false,
    tihuoWay:'点此选择快递公司'
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
    const self = this
    self.data.check1 = wx.getStorageSync('check1')
    self.data.check2 = wx.getStorageSync('check2')
    self.setData(self.data)
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

  form1: function() {
    wx.redirectTo({
      url: '../form1/form1',
    })
  },

  form2: function () {
    wx.redirectTo({
      url: '../form2/form2',
    })
  },

  company: function(e) {
    this.setData({
      company:e.detail.value
    })
  },

  danhao: function (e) {
    this.setData({
      danhao: e.detail.value
    })
  },

  scancode: function (event) {
    console.log(1)
    // 允许从相机和相册扫码
    wx.scanCode({
      success: res => {
        console.log(res.result);
        this.setData(
          { danhao: res.result }
        )
      },
      fail: err => {
        console.log(err);
      }
    })
  },

  bindShowMsg() {
    this.setData({
      select: !this.data.select
    })
  },
  mySelect(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      tihuoWay: name,
      select: false,
      company: name
    })
  },

  tijiao: function () {
    var id1 = wx.getStorageSync('id1')
    var id2 = wx.getStorageSync('id2')
    var company = this.data.company
    var danhao = this.data.danhao
    var username = app.username
    var timestamp = util.formatTime(new Date())
    this.setData({
      timestamp: timestamp
    })

    var name = wx.getStorageSync('name')
    var receive_mail = wx.getStorageSync('receive_mail')
    var barcode = wx.getStorageSync('barcode')
    var money = wx.getStorageSync('money')
    wx.cloud.callFunction({
      name: 'SengMail',
      data:{
        mail:receive_mail,
        name:name,
        barcode:barcode,
        money:money
      },
      success: res => {
        console.log(res)
      },
      fail: res => {
        console.log(res)
      }
    })

    const db = wx.cloud.database()
    db.collection('form').add({
      data:{
        id1: id1,
        id2: id2,
        company: company,
        danhao: danhao,
        timestamp: timestamp,
        username: username
      },
      success: res => {
        console.log(res._id)
        wx.showToast({
          title: '提交成功',
          icon: 'success',
          duration: 2500
        }) 
        //wx.clearStorage()
      }
    })
  }

})