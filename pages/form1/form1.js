// pages/form1/form1.js
var util = require('../../utils/util.js');
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgsrc: "../images/picture.png",
    radio: '1',
    items:[
      { name: 'PredicineLITE （精准版版90基因）', value: 'PredicineLITE （精准版90基因）'},
      { name: 'PredicineCARE （加强版152基因）', value: 'PredicineCARE （加强版152基因）'},
      { name: "PredicineATLAS（全面版600基因）", value: "PredicineATLAS（全面版600基因）"},
    ],

    fenqi:[
      {name: 'I', value:'I'},
      { name: 'II', value: 'II' },
      { name: 'III', value: 'III' },
      { name: 'IV', value: 'IV' },
      { name: '其他', value: '其他'},
    ],
    name:'',
    male: '',
    bianhao: '',
    yangbenleixing: '',
    receiver: '',
    receive_mail: '',
    receive_date_year: '',
    receive_date_month: '',
    receive_date_day:'',
    age: '',
    idcard: '',
    address: '',
    company: '',
    doctor: '',
    phone: '',
    type21_other:'',
    type22:'',
    type23:'',
    type32:'',
    barcode:'',
    select:false,
    tihuoWay: '选择疾病类型',
    money1:'',
    money2:'',
    money3:'',
    money4:'',
    money5:''
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
      type21: name
    })
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
    const self = this
    self.data.name = wx.getStorageSync('name')
    self.data.male = wx.getStorageSync('male')
    self.data.bianhao = wx.getStorageSync('bianhao')
    self.data.yangbenleixing = wx.getStorageSync('yangbenleixing')
    self.data.receiver = wx.getStorageSync('receiver')
    self.data.receive_mail = wx.getStorageSync('receive_mail')
    self.data.receive_date_year = wx.getStorageSync('receive_date_year')
    self.data.receive_date_month = wx.getStorageSync('receive_date_month')
    self.data.receive_date_day = wx.getStorageSync('receive_date_day')
    self.data.age = wx.getStorageSync('age')
    self.data.idcard = wx.getStorageSync('idcard')
    self.data.address = wx.getStorageSync('address')
    self.data.company = wx.getStorageSync('company')
    self.data.doctor = wx.getStorageSync('doctor')
    self.data.phone = wx.getStorageSync('phone')
    self.data.type21_other = wx.getStorageSync('type21_other')
    self.data.type22 = wx.getStorageSync('type22')
    self.data.type23 = wx.getStorageSync('type23')
    self.data.type32 = wx.getStorageSync('type32')
    self.data.barcode = wx.getStorageSync('barcode')
    self.data.money1 = wx.getStorageSync('money1')
    self.data.money2 = wx.getStorageSync('money2')
    self.data.money3 = wx.getStorageSync('money3')
    self.data.money4 = wx.getStorageSync('money4')
    self.data.money5 = wx.getStorageSync('money5')
    self.setData(self.data)
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

  toaccess: function() {
    wx.switchTab({
      url: '../access/access',
    })
  },

  onClickLeft() {
    wx.navigateBack({
      delta:1
    })
  },
  onClickRight() {
    wx.showToast({ title: '点击按钮', icon: 'none' });
  },

  money1: function (e) {
    this.setData({
      money1: e.detail.value,
    })
    wx.setStorageSync('money1', e.detail.value)
  }, 

  money2: function (e) {
    this.setData({
      money2: e.detail.value,
    })
    wx.setStorageSync('money2', e.detail.value)
  }, 

  money3: function (e) {
    this.setData({
      money3: e.detail.value,
    })
    wx.setStorageSync('money3', e.detail.value)
  }, 

  money4: function (e) {
    this.setData({
      money4: e.detail.value,
    })
    wx.setStorageSync('money4', e.detail.value)
  }, 

  money5: function (e) {
    this.setData({
      money5: e.detail.value,
    })
    wx.setStorageSync('money5', e.detail.value)
  }, 

  radioChange1: function(e) {
    console.log(e.detail.value)
  },

  radioChange: function (e) {
    this.setData({
      type31: e.detail.value,
    })
    if (e.detail.value == 'PredicineLITE （精准版90基因）'){
      wx.setStorageSync('money', 3000)
    } else if (e.detail.value == 'PredicineCARE （加强版152基因）'){
      wx.setStorageSync('money', 4500)
    } else {
      wx.setStorageSync('money', 3000)
    }
  },

  radioChange1: function (e) {
    this.setData({
      type24:e.detail.value,
    })
  },

  radioChange2: function (e) {
    this.setData({
      type26: e.detail.value,
    })
  },

  radioChange3: function (e) {
    this.setData({
      type29: e.detail.value,
    })
  },

  chkchange: function (e) {
    this.setData({
      type25:e.detail.value
    })
  },

  chkchange1: function (e) {
    this.setData({
      type28:e.detail.value
    })
  },

  info1: function (e) {
    this.setData({
      name: e.detail.value,
    })
    wx.setStorageSync('name', e.detail.value)
  },

  info2: function (e) {
    this.setData({
      male: e.detail.value,
    })
    wx.setStorageSync('male', e.detail.value)
  },

  info3: function (e) {
    this.setData({
      bianhao: e.detail.value,
    })
    wx.setStorageSync('bianhao', e.detail.value)
  },

  info4: function (e) {
    this.setData({
      yangbenleixing: e.detail.value,
    })
    wx.setStorageSync('yangbenleixing', e.detail.value)
  }, 
  
  info5: function (e) {
    this.setData({
      receiver: e.detail.value,
    })
    wx.setStorageSync('receiver', e.detail.value)
  },

  info6: function (e) {
    this.setData({
      receive_mail: e.detail.value,
    })
    wx.setStorageSync('receive_mail', e.detail.value)
  },

  info7_year: function (e) {
    this.setData({
      receive_date_year: e.detail.value,
    })
    wx.setStorageSync('receive_date_year', e.detail.value)
  }, 

  info7_month: function (e) {
    this.setData({
      receive_date_month: e.detail.value,
    })
    wx.setStorageSync('receive_date_month', e.detail.value)
  }, 

  info7_year: function (e) {
    this.setData({
      receive_date_day: e.detail.value,
    })
    wx.setStorageSync('receive_date_day', e.detail.value)
  }, 

  info8: function (e) {
    this.setData({
      age: e.detail.value,
    })
    wx.setStorageSync('age', e.detail.value)
  }, 

  info9: function (e) {
    this.setData({
      idcard: e.detail.value,
    })
    wx.setStorageSync('idcard', e.detail.value)
  }, 

  info10: function (e) {
    this.setData({
      address: e.detail.value,
    })
    wx.setStorageSync('address', e.detail.value)
  }, 

  info11: function (e) {
    this.setData({
      company: e.detail.value,
    })
    wx.setStorageSync('company', e.detail.value)
  }, 

  info12: function (e) {
    this.setData({
      doctor: e.detail.value,
    })
    wx.setStorageSync('doctor', e.detail.value)
  }, 

  info13: function (e) {
    this.setData({
      phone: e.detail.value,
    })
    wx.setStorageSync('phone', e.detail.value)
  }, 

  info21: function (e) {
    this.setData({
      type21_other: e.detail.value,
    })
    wx.setStorageSync('type21_other', e.detail.value)
  }, 

  info22: function (e) {
    this.setData({
      type22: e.detail.value,
    })
    wx.setStorageSync('type22', e.detail.value)
  }, 

  info23: function (e) {
    this.setData({
      type23: e.detail.value,
    })
    wx.setStorageSync('type23', e.detail.value)
  }, 

  info27: function (e) {
    this.setData({
      type27: e.detail.value,
    })
  }, 

  info281: function (e) {
    this.setData({
      number1: e.detail.value,
    })
  }, 

  info282: function (e) {
    this.setData({
      number2: e.detail.value,
    })
  }, 

  info283: function (e) {
    this.setData({
      number3: e.detail.value,
    })
  }, 

  info284: function (e) {
    this.setData({
      number4: e.detail.value,
    })
  }, 

  info285: function (e) {
    this.setData({
      number5: e.detail.value,
    })
  }, 

  info286: function (e) {
    this.setData({
      number6: e.detail.value,
    })
  }, 

  info287: function (e) {
    this.setData({
      number7: e.detail.value,
    })
  }, 

  time1: function (e) {
    this.setData({
      time1: e.detail.value,
    })
  }, 

  time2: function (e) {
    this.setData({
      time2: e.detail.value,
    })
  }, 
  time3: function (e) {
    this.setData({
      time3: e.detail.value,
    })
  }, 
  time4: function (e) {
    this.setData({
      time4: e.detail.value,
    })
  }, 

  info30: function (e) {
    this.setData({
      type30: e.detail.value,
    })
  }, 

  info32: function (e) {
    this.setData({
      type32: e.detail.value,
    })
    wx.setStorageSync('type32', e.detail.value)
  }, 

  barcode1: function (e) {
    this.setData({
      barcode: e.detail.value,
    })
    wx.setStorageSync('barcode', this.data.barcode)
  },   

  scancode: function (event) {
    console.log(1)
    // 允许从相机和相册扫码
    wx.scanCode({
      success: res => {
        console.log(res.result);
        this.setData(
          { barcode: res.result }
        )
      },
      fail: err => {
        console.log(err);
      }
    })
  },

  tijiao: function (e) {
    var name = this.data.name
    var male = this.data.male
    var bianhao = this.data.bianhao
    var receiver = this.data.receiver
    var receive_mail = this.data.receive_mail
    var receive_date_year = this.data.receive_date_year
    var receive_date_month = this.data.receive_date_month
    var receive_date_day = this.data.receive_date_day
    var age = this.data.age
    var idcard = this.data.idcard
    var address = this.data.address
    var company = this.data.company
    var doctor = this.data.doctor
    var phone = this.data.phone
    var type21 = this.data.type21
    var type21_other = this.data.type21_other
    var type22 = this.data.type22
    var type23 = this.data.type23
    var type24 = this.data.type24
    var time1 = this.data.time1
    var time2 = this.data.time2
    var time3 = this.data.time3
    var time4 = this.data.time4
    var type26 = this.data.type26
    var type27 = this.data.type27
    var type28 = this.data.type28
    var number1 = this.data.number1
    var number2 = this.data.number2
    var number3 = this.data.number3
    var number4 = this.data.number4
    var number5 = this.data.number5
    var number6 = this.data.number6
    var number7 = this.data.number7
    var type29 = this.data.type29
    var type30 = this.data.type30
    var type31 = this.data.type31
    var type32 = this.data.type32
    var barcode = this.data.barcode
    var username = app.username
    var timestamp = util.formatTime(new Date())
    var imageID = this.data.imageID
    var money1 = this.data.money1
    var money2 = this.data.money2
    var money3 = this.data.money3
    var money4 = this.data.money4
    var money5 = this.data.money6
    this.setData({
      timestamp: timestamp
    })
    const db = wx.cloud.database()
    db.collection('form1').add({
      data: {
        受检人姓名:name,
        性别:male,
        患者编号:bianhao,
        报告接收人:receiver,
        报告接收邮箱:receive_mail,
        采样日期:receive_date_year+'年'+receive_date_month+'月'+receive_date_day+'日',
        年龄:age,
        身份证号码:idcard,
        地址:address,
        送检单位:company,
        医生:doctor,
        电话:phone,
        疾病种类:type21,
        其他疾病类型:type21_other,
        病理诊断:type22,
        诊断时间:type23,
        临床分期:type24,
        既往治疗史:{
          '手术时间':time1,
          '放疗时间':time2,
          '化疗时间':time3,
          '靶向时间':time4
        },
        是否做过基因检测:type26,
        检测项目及结果:type27,
        标本类型:type28,
        标本数量:{
          '外周血': number1,
          '血浆' :number2,
          '尿液':number3,
          '胸水' :number4 ,
          '新鲜穿刺组织' : number5,
          '新鲜手术组织' :number6,
          '组织石蜡白块' :number7 
        },
        组织来源:type29,
        组织来源备注:type30,
        检测项目:type31,
        病历位置:imageID,
        barcode: barcode,
        备注:type32,
        timestamp:timestamp,
        username:username,
        实收金额:money1+money2+money3+money4+money5
      },
      success: res => {
        this.setData({
          csid: res._id,
        })
        wx.showToast({
          title: '提交成功',
          icon: 'success',
          duration: 2500
        }) 
      }
    })
  },

  fanhui: function(){
    wx.setStorageSync('id1', this.data.csid)
    if (this.data.csid) {
      wx.setStorageSync('check1', 'true')
    }
    wx.switchTab({
      url: '../form/form',
    })
  },

  loadimage: function (event) {
    const fileManager = wx.getFileSystemManager();
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        // tempFilePath可以作为img标签的src属性显示图片
        console.log(res.tempFilePaths)
        const filepaths = res.tempFilePaths
        const base64 = 'data:image/jpg;base64,' + fileManager.readFileSync(res.tempFilePaths[0], 'base64');
        let randString = Math.floor(Math.random() * 10000000).toString() + '.png'
        this.setData({
          imgsrc: base64
        });
        wx.cloud.uploadFile({
          
          cloudPath: randString, //上传至云端的路径
          filePath: filepaths[0], //小程序的临时路径
          success: res => {
            this.setData({
              imageID: res.fileID
            })
          }
        })
      }
    })
  },

})