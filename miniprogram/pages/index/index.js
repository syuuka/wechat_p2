Page({
  data: {
    hotMovieImage: "/images/p480747492.jpg",
    movieTitle:"肖申克的救赎",
    recommender:"彩色变调夹",
    recommendMessage: "给你推荐了一部电影",
    user_head:"/images/tabBar_hot.png"
  },
  goDetail: function (e){
    wx.navigateTo({
      url: '/pages/detail/detail?movieTitle=' + e.currentTarget.dataset.movietitle,
    })
  },
  goHotMovieList: function (){
    wx.navigateTo({
      url: '/pages/hotMovie/hotMovie',
    })
  },
  goMyZone: function (){
    wx.navigateTo({
      url: '/pages/myZone/myZone',
    })
  }
})
