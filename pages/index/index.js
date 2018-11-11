//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    swiperCurrent: 0,
    movies: [
      { url: 'https://www.niftydose.cn/Images/wos/index/swiper/1.jpeg', key:1},
      { url: 'https://www.niftydose.cn/Images/wos/index/swiper/2.jpeg', key:2},
      { url: 'https://www.niftydose.cn/Images/wos/index/swiper/3.jpeg', key:3},
      { url: 'https://www.niftydose.cn/Images/wos/index/swiper/4.jpeg', key:4},
      { url: 'https://www.niftydose.cn/Images/wos/index/swiper/5.jpeg', key:5}
    ]
  },


  //轮播图事件
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  swipclick: function (e) {//点击图片触发事件
    console.log(this.data.swiperCurrent);
    wx.navigateTo({
      url: '../../pages/activety/activety',
    })
  },

  //图片点击事件
  toplay: function (e) {//点击图片触发事件
    wx.switchTab({
      url: '../../pages/play/play',
    })
  },

  //图片点击事件
  toyugao: function (e) {//点击图片触发事件
    wx.navigateTo({
      url: '../../pages/activety/activety',
    })
  },

  //图片点击事件
  tokefu: function (e) {//点击图片触发事件
    wx.navigateTo({
      url: '../../pages/activety/activety',
    })
  },


  //点击跳转到图鉴list
  toList: function (e) {//点击图片触发事件
    wx.navigateTo({
      url: '../../pages/list/list',
    })
  },

  
})
