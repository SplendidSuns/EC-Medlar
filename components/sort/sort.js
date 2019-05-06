// components/sort/sort.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sortList: [
      { code: 1, name: '综合' },
      { code: 2, name: '销量' },
      { code: 3, name: '价格' }
      ],
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

  sortItem: function (e) {
      // 自定义组件向父组件传值 
     let val = e.currentTarget.dataset;
      // myevent自定义名称事件，父组件中使用
    this.triggerEvent('getSort', val);
      /*
       在父组件中写上bind:getSort="get_emit",在父组件中就需要调用get_emit事件
      */
  },
  filter: function (e) { //点击筛选事件
    var animation = wx.createAnimation({//创建动画
      duration: 500,
      timingFunction: 'ease',
      width: 200,
      height: 800,
      top: 0,
      bottom: 0,
      right: 0,
      backgroundColor: '#fff',
      opcity: 0.5
    })

    this.animation = animation

    animation.translateX(-100 + 'vh').step() //动画效果向右滑动100vh

    this.setData({
      animationData: animation.export(),
      show: true
    })
  },
})