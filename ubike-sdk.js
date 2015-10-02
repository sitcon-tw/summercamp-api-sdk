(function(w, $){
  var Ubike = function($) {
    this.hello = "Welcome to SITCON Summer Camp!"
    var api = "http://lab.denny.one/ubike.php"
    this.getData = function(callback) {
      $.ajax({
        url:api,
        success: function (res){
          callback && callback(res)
        }
      })
    }
  }
  w.ubike = new Ubike($)
})(window, window.jQuery);
