(function(w, $, f){
  var facebook = function($, f) {
    this.hello = "Welcome to SITCON Summer Camp!"
    var accessToken = "CAACWMFh6DXgBAHguwIHB3EAmVO1QgYaA3q0llZBqfe0t0DEAcwWTTbTUdF4DzaWPlRHhIXQaY8zpmVXjWDIKVortTbjYwsFSOXOHI72rfs9YyzvdPnT5xmhFBK3waqix1gtO3jxmR6UbNiX6rqFRUVIForGvWdbwOntAOO0Gp90wvZCvUi5rPPGyrPkFeynsZAb0F7Nki5LoUHakEEJ"
    var fansPage = f
    var basicInfo = {}
    this.getAccessToken = function() {
      return accessToken
    }
    this.getImgUrlById = function(id) {
      return "https://graph.facebook.com/"+id+"/picture"
    }
    this.getPosts = function(id, callback) {
      $.get("https://graph.facebook.com/"+id+"/posts?access_token="+accessToken, function (data){
        callback && callback(data)
      })
    }
    this.getFeed = function(id, callback) {
      $.get("https://graph.facebook.com/"+id+"/feed?access_token="+accessToken, function (data){
        callback && callback(data)
      })
    }
    this.getAlbums = function(id, callback) {
      $.get("https://graph.facebook.com/"+id+"/albums?access_token="+accessToken, function (data){
        callback && callback(data)
      })
    }
    this.getPhotos = function(albumId, callback) {
      $.get("https://graph.facebook.com/"+albumId+"/photos?access_token="+accessToken, function (data){
        callback && callback(data)
      })
    }
    this.getInfo = function(id, callback) {
      $.get("https://graph.facebook.com/"+id+"?access_token="+accessToken, function (data){
        callback && callback(data)
      })
    }
    this.api = function(path, callback) {
      $.get("https://graph.facebook.com"+path+"?access_token="+accessToken, function (data){
        callback && callback(data)
      })
    }
    this.getSitconPosts = function(callback) {
      this.getPosts(fansPage, callback)
    }
    this.getSitconFeed = function(callback) {
      this.getFeed(fansPage, callback)
    }
    this.getSitconAlbums = function(callback) {
      this.getAlbums(fansPage, callback)
    }
    this.getSitconInfo = function(callback) {
      this.getInfo(fansPage, callback)
    }
    this.whoAmI = function(callback) {
      this.api("/me", callback)
    }
  }
  w.FB = new facebook($, f)
})(window, window.jQuery, "SITCONtw")
