//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    movies: [
      { url: 'https://www.niftydose.cn/Images/wos/index/swiper/1.jpeg' },
      { url: 'https://www.niftydose.cn/Images/wos/index/swiper/2.jpeg' },
      { url: 'https://www.niftydose.cn/Images/wos/index/swiper/3.jpeg' },
      { url: 'https://www.niftydose.cn/Images/wos/index/swiper/4.jpeg' },
      { url: 'https://www.niftydose.cn/Images/wos/index/swiper/5.jpeg' }
    ]
  },
  
})
