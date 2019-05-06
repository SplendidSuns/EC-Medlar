//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  // 全局变量参数
  globalData: {
    userInfo: null,
    url: 'http://yas7rw.natappfree.cc/love/tj',
    header: { 'content-type': 'application/json' },// 默认值
    defaultQueryParam: {
      page: 1,                              //分页查询的页
      rows: 20,                             //页数据行数
      sort: 'created',                      //排序字段
      order: 'desc',                        //排序升序还是降序
      pageFlag: true,                       //分页查询标志，
      totalFlag: false,                     //查询总数参数，注意如果在定义LnkListOption的时候，param.totalFlag为true的话，只有第一次请求会有效，之后会将totalFlag置false，但是totalAmount会一直是第一次查询出来的结果
      oauth: 'ALL',                         //安全性设置，默认为所有安全性
    },
    carts:{}//购物车数据
  },
  postRequest(url, data) {
    wx.request({
      url: this.globalData.url + url,
      data: data,
      method: 'POST',
      header: this.globalData.header,
      success(res) {
        console.log(res.data)
      },
      fail(res) {
        console.log('接口访问失败');
      }

    })
  },
  getRequest(url, data) {
    wx.request({
      url: this.globalData.url + url,
      data: data,
      method: 'GET',
      header: this.globalData.header,
      success(res) {
        console.log(res.data)
      },
      fail(res) {
        console.log('接口访问失败');
      }
    })
  },
  /** 分页查询功能
   * @author maxiaojuan
   * @date 2019/02/15
   * @param url 查询对象的URL
   * @param param 查询对象的参数
   * @return list 返回列表
   */
 
  queryByExamplePage(url, params) {
    var param;
    if (this.isEmpty(params)) {
      param = this.globalData.defaultQueryParam;
    } else {
      param = Object.assign({}, this.globalData.defaultQueryParam, params);
    }
    var that = this;
   return new Promise(function (resolve, reject) {
    wx.request({
      url: that.globalData.url + url,
      data: param,
      method: 'POST',
      header: that.globalData.header,
      success: (res) => {
        let result;
        if (that.isEmpty(res.data.rows)) {
          console.log('暂无数据');
           result =  '暂无数据';
        } else {
          result =  res.data.rows;
        }
        resolve(result);
      },
      fail: () => {
        reject("系统异常，请重试！")
      }
    })
   })
  },
  //判断参数是否为空
  isEmpty(v) {
    if (v == null) {
      return true;
    }
    if (v === '') {
      return true;
    }
    if (typeof v === 'undefined') {
      return true;
    }
    switch (typeof v) {
      case 'undefined':
        return true;
      case 'string':
        if (v.trim().length === 0) {
          return true;
        }
        if (v.indexOf('empty.jpg') > 0) {
          return true;
        }
        break;
      case 'boolean':
        if (!v) {
          return true;
        }
        break;
      case 'number':
        if (0 === v) {
          return true;
        }
        break;
      case 'object':
        var len = Object.keys(v)
        return  len.length === 0;
      default:
        return false;
    }
  },

  /**
   * 非空
   * @author gemini
   * @date 2018/10/25
   * @param input 输入
   */
  isNotEmpty(input) {
    return !this.isEmpty(input);
  },
})