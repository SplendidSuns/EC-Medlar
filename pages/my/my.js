// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ordermenu:[{
      icon:'icon-daifukuan1',
      text:'待付款'
    }, {
        icon: 'icon-daifahuo',
        text: '待发货'
      }, {
        icon: 'icon-daishouhuo1',
        text: '待收货'
      }, {
        icon: 'icon-daipingjia01',
        text: '待评价'
      }],
    myMenu: [{
      icon: 'icon-xiugaidizhi',
      text: '地址管理'
    }, {
        icon: 'icon-icon-test',
        text: '联系我们'
    }, {
        icon: 'icon-yijianfankui1',
        text: '意见反馈'
      }]
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
  seeAllOrder: function(){
    wx.navigateTo({
      url: '../orderList/orderList',
    })
  },
  gotoItem: function(e){
    let status = e.currentTarget.dataset.name;
    wx.navigateTo({
      url: '../orderList/orderList?status=' + status,
    })
  },
  gotoDetail: function(e){
    let item = e.currentTarget.dataset.name;
    if(item === '地址管理'){
      wx.navigateTo({
        url: '../address/address.list'
      })
    }
    
  }

})