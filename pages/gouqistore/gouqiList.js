// pages/gouqistore/gouqiList.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    products: [{
      id: 1,
      title: '精选新疆干果500g*1盒',
      category: '天然生长果干',
      image: '../images/test1.jpg',
      num: 1,
      price: 60,
      compPrice: 60,
      selected: true
    }, {
        id: 2,
        title: '精选新疆干果800g*1盒',
        category: '天然生长果干',
        image: '../images/test1.jpg',
        num: 1,
        price: 60,
        compPrice: 60,
        selected: true
      }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.title
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获得dialog组件
    this.dialog = this.selectComponent("#dialog");
    //获得search组件
    this.search = this.selectComponent("#search");
    // 获得sort组件
    this.sort = this.selectComponent('#sort');
  },
  showDialog() {
    this.dialog.showDialog();
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
  //取消事件
  _cancelEvent() {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent() {
    console.log('你点击了确定');
    this.dialog.hideDialog();
  },
  // 获取排序组件传值
  getSort(e){
     console.log(e.detail);
  },
  gotoItem: function (e) {
    let detail = JSON.stringify(e.currentTarget.dataset.item);
    wx.navigateTo({
      url: '../goods/goodsItem?detail=' + detail,
    })
  },
  gotoCart: function (e) {
    wx.showToast({
      title: '添加购物车成功!',
      icon: 'success',
      duration: 2000
    })
    app.globalData.carts = e.currentTarget.dataset.item;
    wx.switchTab({
      url: '../shoppingcart/cart'
    })
  },
})