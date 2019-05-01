// pages/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    pwd:''
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


  nameInput: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  pwdInput: function (e) {
    this.setData({
      pwd: e.detail.value
    })
  },
  login:function(e){
    var that=this;
    if (!that.data.name) {
      wx.showToast({
        title: '用户名不能为空',
        icon:'loading'
      })
    }
    else if (!that.data.pwd) {
      wx.showToast({
        title: '密码不能为空',
        icon: 'loading'
      })
    }
    else{
      wx.request({
        url: 'http://' + app.globalData.server_addr + '/ljl/login.php',
        method: "POST",
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          name: that.data.name,
          pwd: that.data.pwd,
        },
        success: function (res) {
          if(res.data[0]){
            app.globalData.userInfo = that.data.name;
            wx.showToast({
              title: '登录成功',
              icon: 'success',
              duration: 1000,
              success: function () {
                setTimeout(function () {
                  wx.switchTab({
                    url: '../index/index'
                  })
                }, 1000);
              }
            })
          }
          else{
            wx.showToast({
              title: '登录失败',
              icon:'loading'
            })
          }
        }
      })
    }
    
  }
})