Page({

  /**
   * 页面的初始数据
   */
  data: {
    xiaoqu:[
      '凤阳校区',
      '龙湖校区'
    ],
    index:0,
    date:'',
    startDate:'',
    endDate:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var currentDate = new Date();
    var startDate = '';
    var endDate = '';
    startDate += currentDate.getFullYear();
    startDate += '-';
    startDate += currentDate.getMonth() + 1;
    startDate += '-';
    startDate += currentDate.getDate()+1;
    endDate += currentDate.getFullYear();
    endDate += '-';
    endDate += currentDate.getMonth() + 1;
    endDate += '-';
    endDate += currentDate.getDate()+5;
    this.setData({
      startDate: startDate,
      endDate:endDate,
      date: startDate
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
    
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
})