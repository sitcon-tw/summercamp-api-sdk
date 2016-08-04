(function(w, $){
  var weather = function() {
    this.hello = "Welcome to SITCON Summer Camp!"
    var lang = "zh_tw"
    var units = "metric"
    var api = "http://api.openweathermap.org/data/2.5/weather?lang="+lang+"&units="+units+"&appid=6c12b939f6a2cf316bae9561a313ce66"
    this.api = function(argv, callback) {
      $.get(api+argv, function (res){
        callback && callback(res)
      })
    }
    this.getGeoLocation = function(callback) {
      navigator.geolocation ?
      navigator.geolocation.getCurrentPosition(function (pos){
          callback && callback(pos)
      })
      : alert("browser not supported")
    }
    this.getLocationWeather = function(callback, count) {
      this.getGeoLocation(function (pos){
        var argv = "&lat="+pos.coords.latitude+"&lon="+pos.coords.longitude
        if (count) argv += "&cnt" + count
        this.api(argv, callback)
      }.bind(this))
    }
    this.getCityWeather = function(callback, city) {
      this.api("&q="+(city || "taipei"), callback)
    }
  }
  w.OpenWeatherMap = weather
})(window, window.jQuery);
