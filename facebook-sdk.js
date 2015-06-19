(function(w, $, f){
  var facebook = function($, f) {
    this.hello = "Welcome to SITCON Summer Camp!"
    var accessToken = "CAACWMFh6DXgBAHguwIHB3EAmVO1QgYaA3q0llZBqfe0t0DEAcwWTTbTUdF4DzaWPlRHhIXQaY8zpmVXjWDIKVortTbjYwsFSOXOHI72rfs9YyzvdPnT5xmhFBK3waqix1gtO3jxmR6UbNiX6rqFRUVIForGvWdbwOntAOO0Gp90wvZCvUi5rPPGyrPkFeynsZAb0F7Nki5LoUHakEEJ"
    var fansPage = f
    var basicInfo = {}
    $.get("https://graph.facebook.com/"+fansPage+"/?access_token="+accessToken, function (data){
      basicInfo = data
    })
    this.getAccessToken = function() {
      return accessToken
    }
    this.getId = function() {
      return basicInfo.id
    },
    this.getAbout = function() {
      return basicInfo.about
    },
    this.getCoverUrl = function() {
      return "https://graph.facebook.com/"+basicInfo.cover.id+"/picture"
    },
    this.getDescription = function() {
      return basicInfo.description
    },
    this.getLink = function() {
      return basicInfo.link
    },
    this.getName = function() {
      return basicInfo.name
    },
    this.getWebsite = function() {
      return basicInfo.website
    },
    this.getPosts = function(callback) {

    },
    this.getFeed = function(callback) {

    }
  }
  w.FB = new facebook($, f)
})(window, window.jQuery, "SitconTW")