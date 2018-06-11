const backgroundAudioManager = wx.getBackgroundAudioManager();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528013688690&di=32ea642b1f873b0d84d4dba8b8ce77e4&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201602%2F03%2F20160203120734_unA3a.jpeg',
      'http://img.zcool.cn/community/0178e0573bd24d32f8757cb90eb608.jpg@1280w_1l_2o_100sh.jpg'
    ],
    program:[
      
    ],
    musicButton:'https://lg-beri6w3m-1256635068.cos.ap-shanghai.myqcloud.com/%E6%92%AD%E6%94%BE.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'https://akgbt.club/wx-search.php',
      data: {
        
      },
      method: "GET",
      dataType: "json",
      success: function (res) {
        var programs=[];
        for(var i=0;i<res.data.length;i++){
          var obj = {};
          obj.image= res.data[i].cover;
          obj.title = res.data[i].title;
          obj.date= res.data[i].submitDate;
          obj.src=res.data[i].url;
          programs.push(obj);
        }
        that.setData({
          program: programs
        })
      }
    })
    backgroundAudioManager.src = 'https://akgbt.club/sounds/1528303721.mp3';
    backgroundAudioManager.title = '2018毕业季';
    backgroundAudioManager.coverImgUrl = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528313371983&di=eedf0384ac566b43dfb8b1b3c3d0d8f1&imgtype=0&src=http%3A%2F%2Fmu1.sinaimg.cn%2Fcrop.38x19x923x923%2Fweiyinyue.music.sina.com.cn%2Fmovie_game%2F1464769246197.jpg';
    backgroundAudioManager.onPlay(() => {
      console.log('开始播放');
    })
    backgroundAudioManager.onPause(() => {
      console.log('暂停播放');
    })
    backgroundAudioManager.onError((res) => {
      console.log(res.errMsg);
      console.log(res.errCode);
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    backgroundAudioManager.stop()
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

  musicSwitch:function(event){ 
    if (backgroundAudioManager.paused){
      backgroundAudioManager.src = event.currentTarget.dataset.musicsrc;
      backgroundAudioManager.title = event.currentTarget.dataset.musictitle;
      backgroundAudioManager.coverImgUrl = event.currentTarget.dataset.musiccover;
      backgroundAudioManager.play(); 
      
    }
    else{
      if (event.currentTarget.dataset.playStatus){
        backgroundAudioManager.pause();
      }

    }
  }

})