myApp.service('jsonRead', function($http) {
  this.read = function(){
    return $http.get("assets/products.json");
  }
});
