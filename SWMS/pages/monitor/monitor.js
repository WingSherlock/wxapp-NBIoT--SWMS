// pages/monitor/monitor.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tem:"",
    hum:"",
    inf:"",
    smog:"",
    //rc:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.read();
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
    this.read();
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

  read:function(){
    var that = this;
    wx.request({
      url: 'http://' + app.globalData.server_addr + '/ljl/read.php',
      method: "GET",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
          that.setData({
            tem: res.data[0].temp,
            hum: res.data[0].hum,
            inf: res.data[0].red,
            smog: res.data[0].smoke
          })
      }
    })
  },

  send:function(num){
    wx.request({
      url: 'http://118.126.95.173:8888/SWMS/send',
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        num:num
      },
      success: function (res) {
        console.log(res.data);
      }
    })
  },

  fan:function(e){
    if (e.detail.value){
      this.send(7);
    }else{
      this.send(6);
    }
  },
  humer: function (e) {
    if (e.detail.value) {
      this.send(3);
    } else {
      this.send(2);
    }
  },
  water: function (e) {
    if (e.detail.value) {
      this.send(1);
    } else {
      this.send(0);
    }
  },
  light: function (e) {
    if (e.detail.value) {
      this.send(9);
    } else {
      this.send(8);
    }
  }
})