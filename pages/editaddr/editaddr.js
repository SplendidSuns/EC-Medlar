// pages/editaddr/editaddr.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['请选择所在地区'],
    editStatus:'',//编辑状态
    style:'',
    address:{
      name: '',
      phone: '',
      detailAddress: '',
      isSelect: true,
      flag: '',
      province: '',
      city: '',
      distinct: ''
    },
    flag:[{
      id:'1',
      name:'家',
      categroy:'home'
    }, {
        id: '2',
        name: '公司',
        categroy: 'company'
      }, {
        id: '3',
        name: '学校',
        categroy: 'school'
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(!app.isEmpty(options)){
      let status = options.status;
      if(status === 'NEW'){

      }
      if(status === 'UPDATE'){
        let address = JSON.parse(options.item);
        this.setData({
          address: address,
          region:[address.province,address.city,address.distinct]
        })
      }
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
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  radioChange: function (e) {
    this.setData({
      style: e.detail.value
    })
    console.log('radio发生change事件，携带value值为：', e.detail)
  },
  switchChange(e) {
    console.log('switch发生 change 事件，携带值为', e.detail.value)
  },
})