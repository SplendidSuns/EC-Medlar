// pages/shoppingcart/cart.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasList: false, //列表是否有数据
    totalPrice: 0, //总价，初始为0
    selectAllStatus: false, //全选状态，默认全选
    selectedList:[],
    startX: 0, //开始坐标
    startY: 0,
 carts: [{
      id: 1,
      title: '精选新疆干果500g*1盒',
      category: '天然生长果干',
      image: '../images/test1.jpg',
      num: 2,
      price: 60,
      compPrice:60
    },
    {
      id: 2,
      title: '精选新疆干果600g*1盒',
      category: '天然生长果干',
      image: '../images/test1.jpg',
      num: 1,
       price: 70,
      compPrice: 60
    }
    ]
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
  onShow: function(options) {
    this.setData({
      hasList: true, //既然有数据了，那就设为true吧
    })
    console.log(options);
    if (!app.isEmpty(app.globalData.carts)) {
      this.data.carts.unshift(app.globalData.carts);
    }
    this.getTotalPrice(); //重新获取总价
    console.log(this.data.carts);

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
    this.data.selectedList = [];
    let selectList = [];
    let total = 0;
    let num = 0;
    for (let i = 0; i < carts.length; i++) { //循环列表得到的每个数据
      if (carts[i].selected) { //判断选中才会计算价格
        total += carts[i].num * carts[i].price; //所有价格加起来
        selectList.push(carts[i]);
        num += carts[i].num
      }
    }
    this.setData({ //最后赋值到data中渲染到页面
      carts: carts,
      totalPrice: total.toFixed(2),
    });
    this.data.selectedList.push({
       'totalPrice': total.toFixed(2),
        'num': num, 
        'carts': selectList});
  }, 
  selectedList: function(e) {
    const index = e.currentTarget.dataset.index; //获取data-传进来的index
    let sum = 0;
    let carts = this.data.carts; //获取购物车列表
    const selected = carts[index].selected; //获取当前商品的选中状态
    carts[index].selected = !selected; //改变状态
    this.setData({
      carts: carts,
    });
    this.getTotalPrice(); //重新获取总价
    for(var i=0;i<carts.length;i++){
      if(!carts[i].selected){
        this.setData({
          selectAllStatus:false
        })
      } else {
        sum++;
      }
    }
    if(sum==this.data.carts.length){
      this.setData({
        selectAllStatus: true
      })
    }
  },

  selectAll: function(e) {
    let selectAllStatus = this.data.selectAllStatus; //是否为全选状态
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;
    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus; //改变商品状态
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    });
    this.getTotalPrice(); //重新获取总价
  },

  minusCount: function(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num = num - 1;
    if(num>0){
      carts[index].num = num;
      this.setData({
        carts: carts
      });
      this.getTotalPrice(); //重新获取总价
    }else{
      console.log('商品数量不能小于1');
    }
  },

  addCount: function(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    if (num < 1) {
      return false;
    }
    num = num + 1;
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
    }
      this.getTotalPrice(); //重新获取总价

  },


  //去支付
  payfor: function() {
    console.log(this.data.selectedList)
    let model = JSON.stringify(this.data.selectedList);
    wx.navigateTo({
      url: '../confirmorder/confirm?model='+model,
    })
  },
  //手指触摸动作开始 记录起点X坐标

  touchstart: function (e) {

    //开始触摸时 重置所有删除

    this.data.carts.forEach(function (v, i) {

      if (v.isTouchMove)//只操作为true的

        v.isTouchMove = false;

    })

    this.setData({

      startX: e.changedTouches[0].clientX,

      startY: e.changedTouches[0].clientY,

      carts: this.data.carts

    })

  },

  //滑动事件处理

  touchmove: function (e) {

    var that = this,

      index = e.currentTarget.dataset.index,//当前索引

      startX = that.data.startX,//开始X坐标

      startY = that.data.startY,//开始Y坐标

      touchMoveX = e.changedTouches[0].clientX,//滑动变化坐标

      touchMoveY = e.changedTouches[0].clientY,//滑动变化坐标

      //获取滑动角度

      angle = that.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });

    that.data.carts.forEach(function (v, i) {

      v.isTouchMove = false

      //滑动超过30度角 return

      if (Math.abs(angle) > 30) return;

      if (i == index) {

        if (touchMoveX > startX) //右滑

          v.isTouchMove = false

        else //左滑

          v.isTouchMove = true

      }

    })

    //更新数据

    that.setData({

      carts: that.data.carts

    })

  },

  /**
  
  * 计算滑动角度
  
  * @param {Object} start 起点坐标
  
  * @param {Object} end 终点坐标
  
  */

  angle: function (start, end) {

    var _X = end.X - start.X,

      _Y = end.Y - start.Y

    //返回角度 /Math.atan()返回数字的反正切值

    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);

  },

  //删除事件

  del: function (e) {

    this.data.carts.splice(e.currentTarget.dataset.index, 1)

    this.setData({
      carts: this.data.carts

    })

  }
})