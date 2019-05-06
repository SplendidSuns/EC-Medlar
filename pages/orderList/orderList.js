// pages/orderList/orderList.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [], //购物车列标
    currentTab: 'all',
    showFlag: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    if(!app.isEmpty(options.status)){
      this.setData({
        showFlag: false
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
    this.setData({
      hasList: true, //既然有数据了，那就设为true吧
      carts: [{
        id: 1,
        title: '精选新疆干果500g*1盒',
        category: '天然生长果干',
        image: '../images/test1.jpg',
        num: 2,
        price: 60,
        selected: true
      },
      {
        id: 2,
        title: '精选新疆干果600g*1盒',
        category: '天然生长果干',
        image: '../images/test1.jpg',

        num: 1,
        price: 70,
        selected: true
      }
      ]
    })
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
    if (event.currentTarget.dataset.replyType == 'all') {
      that.setData({
        currentTab: event.currentTarget.dataset.replyType
      });

    }
    if (event.currentTarget.dataset.replyType == 'payment') {
      that.setData({
        currentTab: event.currentTarget.dataset.replyType
      });
    }
    if (event.currentTarget.dataset.replyType == 'delivery') {
      that.setData({
        currentTab: event.currentTarget.dataset.replyType
      });
    }
    if (event.currentTarget.dataset.replyType == 'receive') {
      that.setData({
        currentTab: event.currentTarget.dataset.replyType
      });
    }
    if (event.currentTarget.dataset.replyType == 'comment') {
      that.setData({
        currentTab: event.currentTarget.dataset.replyType
      });
    }
  },
})