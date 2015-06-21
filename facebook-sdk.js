(function(w, $, f){
  var facebook = function($, f) {
    this.hello = "Welcome to SITCON Summer Camp!"
    var accessToken = "CAACWMFh6DXgBAHguwIHB3EAmVO1QgYaA3q0llZBqfe0t0DEAcwWTTbTUdF4DzaWPlRHhIXQaY8zpmVXjWDIKVortTbjYwsFSOXOHI72rfs9YyzvdPnT5xmhFBK3waqix1gtO3jxmR6UbNiX6rqFRUVIForGvWdbwOntAOO0Gp90wvZCvUi5rPPGyrPkFeynsZAb0F7Nki5LoUHakEEJ"
    var fansPage = f
    var basicInfo = {}
    this.getAccessToken = function() {
      return accessToken
    }
    this.getImgUrlById = function(Id) {
      return "https://graph.facebook.com/"+Id+"/picture"
    }
    this.getPosts = function(callback) {
      $.get("https://graph.facebook.com/"+fansPage+"/posts?access_token="+accessToken, function (data){
        callback && callback(data)
      })
    }
    this.getFeed = function(callback) {
      $.get("https://graph.facebook.com/"+fansPage+"/feed?access_token="+accessToken, function (data){
        callback && callback(data)
      })
    }
    this.getAlbums = function(callback) {
      $.get("https://graph.facebook.com/"+fansPage+"/albums?access_token="+accessToken, function (data){
        callback && callback(data)
      })
    }
    this.getPhotos = function(albumId, callback) {
      $.get("https://graph.facebook.com/"+albumId+"/photos?access_token="+accessToken, function (data){
        callback && callback(data)
      })
    }
    this.getInfo = function(Id, callback) {
      $.get("https://graph.facebook.com/"+Id+"?access_token="+accessToken, function (data){
        callback && callback(data)
      })
    }
    this.getSitconInfo = function(callback) {
      this.getInfo(fansPage, callback)
    }
  }
  w.FB = new facebook($, f)
})(window, window.jQuery, "SITCONtw")
