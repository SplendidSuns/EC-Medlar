// pages/address/address.list.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageSource: ' ',//页面来源
    address: [{
      id: '1',
      name: '测试',
      phone: '13245678909',
      detailAddress: '悦湖家园',
      isSelect: true,
      flag: '默认',
      province:'宁夏',
      city: '银川',
      distinct:'金凤区'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(!app.isEmpty(options.pagesource)){
      this.setData({
        pageSource: options.pagesource
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
  addAddress: function(){
    wx.navigateTo({
      url: '../editaddr/editaddr?status=NEW',
    })
  },
  choose:function(e){
    let address = e.currentTarget.dataset.item;
    wx.setStorage({
      key: "address",
      data: address,
      success: function () {
        wx.navigateBack();   //返回上一个页面
      }
    })
  },
  edit: function(e){
    let item = JSON.stringify(e.currentTarget.dataset.item);
    wx.navigateTo({
      url: '../editaddr/editaddr?status=UPDATE&&item='+item,
    })
    console.log(e);
  }
})