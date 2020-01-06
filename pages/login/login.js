// pages/login/login.js
const app = getApp()
var rck = 'rememberCheck';
var rui = 'rememberUserInfo';
var loginList = 'loginList';
var rbFlag = false;

const db = wx.cloud.database({env:'data-azsbk'})
const account = db.collection('account')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoMess: '',
    userN: '',
    userP: '',
    passW: '',
    userName: '',
    passWd: '',
    userPhone: '',
    loginToast: true,
    showTipTxt: '',
    tipHidden: true,
    image: '',
    version: '1.1.0_beta'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  userNameInput: function (e) {
    this.setData({
      userN: e.detail.value
    })
  },
  userPhoneInput: function (e) {
    this.setData({
      userP: e.detail.value
    })
  },
  passWdInput: function (e) {
    this.setData({
      passW: e.detail.value
    })
  },

  loginBtnClick: function () {
    console.log("点击-------------");
    var userName = this.data.userN;
    var passWd = this.data.passW;
    app.username = this.data.userN;
    if (userName == '') {
      console.log("用户名不能为空");
      toast('用户名不能为空');
      return;
    }
    if (passWd == '') {
      console.log("密码不能为空");
      toast('密码不能为空');
      return;
    console.log(userName, passWd);
    }

    

    wx.showToast({
      title: '加载中',
      icon: 'loading'
    })

    let that = this;
    //登陆获取用户信息
    account.get({
      success: (res) => {

        let user = res.data;
        console.log(res.data)
        for (let i = 0; i < user.length; i++) {  //遍历数据库对象集合
          if (userName === user[i].user) { //用户名存在
            if (passWd !== user[i].pass) {  //判断密码是否正确
              wx.showToast({
                title: '密码错误！！',
                icon: 'success',
                duration: 2500
              })
            } else {
              console.log('登陆成功！')
              wx.showToast({
                title: '登陆成功！！',
                icon: 'success',
                duration: 2500
              })
              wx.switchTab({   //跳转首页
                url: '../index/index',  //这里的URL是你登录完成后跳转的界面
              });
              break;
            }
          } else {   //不存在
            wx.showToast({
              title: '登录信息错误！！',
              icon: 'success',
              duration: 2500
            })
          }
        }
      }
    })


  }    
})

function toast(toast) {
  wx.showToast({
    title: toast,
    duration: 2000
  })
}