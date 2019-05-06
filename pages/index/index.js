//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '欢迎来到天精小店',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      '../images/ball.png',
      '../images/write.png',
      '../images/tower.png'
    ],
    hotSale:[{
      id: 1,
      title: '精选新疆干果500g*1盒',
      category: '天然生长果干',
      image: '../images/test1.jpg',
      num: 1,
      price: 60,
      compPrice: 60,
      selected: true
    }],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    num:1,
    hotItem:[],
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../wxml/main'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    wx.navigateTo({
      url: '../wxml/main'
    })
  },
  gotoToutiao:function(){
    wx.navigateTo({
      url: '../toutiao/toutiao',
    })
  },
  gotoItem:function(e){
    let detail = JSON.stringify(e.currentTarget.dataset.item);
    wx.navigateTo({
      url: '../goods/goodsItem?detail='+detail,
    })
  },
  gotoCart:function(e){
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
  //查询
  gotoSearch: function () {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  onReady: function () {
    //获得search组件
    this.search = this.selectComponent("#search");
  },
  // 点击按钮减少数量
  minNum: function(){
    var that = this;
    var minNum = that.data.num-1;
    if(minNum<1){
      minNum = 1;
    }
    this.setData({
      num: minNum
    })
  },
  //点击按钮增加数量
  addNum:function(){
    var that = this;
    var addNum = that.data.num + 1;
    this.setData({
      num: addNum
    })
  },
  gotoCategory:function(){
    wx.switchTab({
      url: '../category/category',
    })
  },
  gotoList:function(){
    wx.navigateTo({
      url: '../gouqistore/gouqiList?title='+'热销推荐',
    })
  }
})
