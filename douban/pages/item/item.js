// pages/item/item.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    images:[],
    title:[],
    directors:'',
    average:'',
    casts:[],
    summary:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const apiUrl = 'https://api.douban.com/v2/movie/subject/' + options.id
    const _this = this
    wx.request({
      url: apiUrl, //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/text' // 默认值
      },
      success: function (res) {
        _this.setData({ images: res.data.images.large,
                        title: res.data.title,
                        loading: false,
                        directors: res.data.directors[0].name,
                        average: res.data.rating.average,
                        casts: res.data.casts,
                        summary: res.data.summary})
      }
    })
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