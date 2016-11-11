Page({
  data: {
    imgUrls: [
      'https://img1.doubanio.com/img/celebrity/large/49077.jpg',
      'https://img1.doubanio.com/img/celebrity/large/1478066140.77.jpg',
      'http://e.hiphotos.baidu.com/image/pic/item/d1160924ab18972bf05282ece3cd7b899e510aaf.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    array:[
        {
            title:"正在热映",
            src:"../../images/arrowright.png",
            key:"in_theaters",
        },
        {
            title:"即将上映",
            src:"../../images/arrowright.png",
            key:"coming_soon",
        },
        {
            title:"Top250",
            src:"../../images/arrowright.png",
            key:"top250",
        },
        {
            title:"口碑榜",
            src:"../../images/arrowright.png",
            key:"weekly",
        },
        {
            title:"北美票房榜",
            src:"../../images/arrowright.png",
            key:"us_box",
        },
        {
            title:"新片榜",
            src:"../../images/arrowright.png",
            key:"new_movies",
        },
    ],
  },
 onLoad: function () {
    var me=this;
    wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters',
      data: {},
      method: 'GET', 
      header: { 'Content-Type': 'application/json' },
      success: function(res){
        // success
        me.setData({
            imgUrls:[res.subjects[0].directors.avatars.large]
        });
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })  
  }
})