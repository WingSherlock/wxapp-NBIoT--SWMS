// pages/out/out.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    name: '',
    num: '',
    time: '',
    out:''
    
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


  idInput: function (e) {
    this.setData({
      id: e.detail.value
    })
  },
  numInput: function (e) {
    this.setData({
      out: e.detail.value
    })
  },
  find:function(){
    var that = this;
    if (that.data.id == '') {
      wx.showToast({
        title: 'ID不能为空',
        icon: 'loading'
      })
    }
    else if (!(/^[1-9]\d*$/.test(that.data.id))) {
      wx.showToast({
        title: 'ID只能填数字',
        icon: 'loading'
      })
    }
    else{
      wx.request({
        url: 'http://' + app.globalData.server_addr + '/ljl/find.php',
        method: "POST",
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          id: that.data.id
        },
        success: function (res) {
          console.log(res.data),
          that.setData({
            name: res.data[0].name,
            num: res.data[0].num,
            time: res.data[0].time,
          })
        }
      })
    }

  },
  out:function(){
    var that=this;
    var outNum = that.data.num - that.data.out;
    if (that.data.num == '') {
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
    else if (outNum<0){
      wx.showToast({
        title: '数量超出范围',
        icon: 'loading'
      })
    }
    else {
      wx.request({
        url: 'http://129.204.124.163/ljl/out.php',
        method: "POST",
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          id: that.data.id,
          num: outNum,
        },
        success: function (res) {
          wx.showToast({
            title: '提交成功',
            icon: 'success',
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
