// pages/goods/goodsItem.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../images/tower.png',
      '../images/ball.png',
      '../images/write.png'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    currentTab: 'goodscontent',
    product:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(!app.isEmpty(options.detail)){
      let product = JSON.parse(options.detail);
      this.setData({
        product: product
      })
    }
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
  changeTab: function (event) {
    var that = this;
    if (event.currentTarget.dataset.replyType == 'goodscontent') {
      that.setData({
        currentTab: event.currentTarget.dataset.replyType
      });

    }
    if (event.currentTarget.dataset.replyType == 'question') {
      that.setData({
        currentTab: event.currentTarget.dataset.replyType
      });
    }
  },
  gotoAllComments: function(){
    wx.navigateTo({
      url: '../comments/comments',
    })
  }
})