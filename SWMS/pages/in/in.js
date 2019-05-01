// pages/in/in.js
var util=require("../../utils/util.js");
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    name:'',
    num:'',
    time:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var TIME = util.formatTime(new Date());
    console.log(TIME);
    this.setData({
      time: TIME,
    });
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


  idInput:function(e){
    this.setData({
      id: e.detail.value
    })
    // console.log(this.data.id);
  },
  nameInput: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  numInput: function (e) {
    this.setData({
      num: e.detail.value
    })
  },
  sumbit:function(){
    var that=this;
    if(that.data.id==''){
      wx.showToast({
        title: 'ID不能为空',
        icon:'loading'
      })
    }
    else if (!(/^[1-9]\d*$/.test(that.data.id))) {
      wx.showToast({
        title: 'ID只能填数字',
        icon: 'loading'
      })
    }
    else if (that.data.name == '') {
      wx.showToast({
        title: '名称不能为空',
        icon: 'loading'
      })
    }
    else if (that.data.num == '') {
      wx.showToast({
        title: '数量不能为空',
        icon: 'loading'
      })
    }
    else if (!(/^[1-9]\d*$/.test(that.data.num))) {
      wx.showToast({
        title: '数量只能填数字',
        icon: 'loading'
      })
    }
    else{
      wx.request({
        url: 'http://' + app.globalData.server_addr + '/ljl/in.php',
        method: "POST",
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data:{
          id: that.data.id,
          name: that.data.name,
          num: that.data.num,
          time: that.data.time
        },
        success: function (res) {
          wx.showToast({
            title: '提交成功',
            icon:'success',
            duration: 2000,
            success: function () {
              setTimeout(function () {
                wx.switchTab({
                  url: '../index/index'
                })
              }, 1000);
            }
          })
        }
      })
    }
  }
})
