// pages/confirmorder/confirm.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      buylist:[],//商品列表
      productsPrice:0,//商品金额
      shipping:10,//运费
      productsNum:0, //商品件数
      totalPrice:0,//合计
      address:{},//地址
      showFlag:false,
      display:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (!app.isEmpty(options.model)){
    let buylist = JSON.parse(options.model);
    let totalPrice = parseInt(buylist[0].totalPrice) + this.data.shipping;
    this.setData({
      buylist: buylist[0].carts,
      productsPrice: buylist[0].totalPrice,
      totalPrice: totalPrice.toFixed(2),
      productsNum: buylist[0].num
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
    const that = this;
    wx.getStorage({
      key: 'address',
      success: function (res) {
        that.setData({
          address: res.data,
          showFlag:true
        })
      },
    })
    console.log(that.data.address);
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
  selectReciver:function(){
    wx.navigateTo({
      url: '../address/address.list?pagesource='+'order',
    })
  },
  choosePayType: function(){
    if(this.data.display){
      this.setData({
        display: false
      })
    } else {
      this.setData({
        display: true
      })
    }
  }
})