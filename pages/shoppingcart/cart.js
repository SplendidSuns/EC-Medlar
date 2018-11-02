// pages/shoppingcart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [], //购物车列标
    hasList: false, //列表是否有数据
    totalPrice: 0, //总价，初始为0
    selectAllStatus: true //全选状态，默认全选

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.setData({
      hasList: true, //既然有数据了，那就设为true吧
      cart: [{
          id: 1,
          title: '精选新疆干果500g*1盒',
          category: '天然生长果干',
          image: 'pages/images/test1.jpg',
          num: 2,
          price: 60,
          selected: true
        },
        {
          id: 2,
          title: '精选新疆干果600g*1盒',
          category: '天然生长果干',
          image: 'pages/images/test1.jpg',
          
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
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  getTotalPrice: function() {
    let carts = this.data.carts; //获取购物车列表
    let total = 0;
    for (let i = 0; i < carts.length; i++) { //循环列表得到的每个数据
      if (carts[i].selected) { //判断选中才会计算价格
        total += carts[i].num * carts[i].price; //所有价格加起来
      }
    }
    this.setData({ //最后赋值到data中渲染到页面
      carts: carts,
      totalPrice: total.toFixed(2),
    });
  },
  selectedList: function(e) {
    const index = e.currentTarget.dataset.index; //获取data-传进来的index
    let carts = this.data.carts; //获取购物车列表
    const selected = carts[index].selected; //获取当前商品的选中状态
    carts[index].selected = !selected; //改变状态
    this.setData({
      carts: carts,
    });
    this.getTotalPrice(); //重新获取总价

  },

  selectedAll: function(e) {
    let selectAllStatus = this.data.selectAllStatus; //是否为全选状态
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;
    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus; //改变商品状态
    }
    this.setData({
      seletAllStatus: selectAllStatus,
      carts: carts
    });
    this.getTotalPrice(); //重新获取总价
  },

  minusCount: function(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num = num + 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice(); //重新获取总价

  },

  addCount: function(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice(); //重新获取总价

  },

  deleteList: function(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts.splice(index, 1);
    this.setData({
      carts: carts,
    });
    if (!carts.length) {
      this.setData({
        hasList: false
      });
    } else {
      this.getTotalPrice(); //重新获取总价
    }

  },


  //去支付
  payfor: function() {
    wx.navigateTo({
      url: '../confirmorder/confirm',
    })
  }
})