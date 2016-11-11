var app = getApp();

Page({
    data: {
        title: '',
        subtitle: '加载中...',
        type: 'in_theaters',
        loading: true,
        hasMore: true,
        page: 1,
        size: 20,
        movies: {}
    },
    onLoad:function(params){
        var me=this;
        wx.request({
          url: 'https://api.douban.com/v2/movie/'+params.type,
          data: {},
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          header: {'Content-Type':'application/json'},
          success: function(res){
            console.log(res)
            me.setData({

                title:res.data.title,

                movies:res.data.subjects.map(function (data) {
                   console.log("+++++++++++++++++++++++++++++++++++++++++++")
                   console.log(data)
                   console.log("+++++++++++++++++++++++++++++++++++++++++++")
                   return{
                    cover:data.directors[0].avatars.small || "",
                    title:data.title || "",
                    year:data.year || "",
                    directors:data.directors[0].name || "",
                    max:data.rating.average || "",
                    }
                }),
            })
        }
      })
    }
});