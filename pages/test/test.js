// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wen: '如果你身处一片荒漠中，你最希望看到的天空是什么颜色?',
    optionindex:'-1',
    option:[
      "蓝色",
      "黄色",
      "绿色",
      "白色"
    ]
  },

  onoption:function(e){
    this.setData({
      optionindex: e.currentTarget.dataset.index
    })
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

  }
})