myApp.controller('homeController',function($scope,$mdSidenav,jsonRead,_,$mdDialog,$state){
  $scope.toggleLeft=buildToggler('left');

  function buildToggler(componentID) {
      return function() {
        $mdSidenav(componentID).toggle();
      };
    }

    $scope.manufacturerArray=[];
    $scope.storageArray=[];
    $scope.osArray=[];
    $scope.cameraArray=[];
    $scope.manufacturerSelected=[];
    $scope.storageSelected=[];
    $scope.osSelected=[];
    $scope.cameraSelected=[];

    jsonRead.read().then(response=>{
      $scope.products = response.data;
      console.log($scope.products);
      angular.forEach($scope.products, function(value,key){
        $scope.manufacturerArray.push(value.specs.manufacturer);
        $scope.storageArray.push(value.specs.storage);
        $scope.osArray.push(value.specs.os);
        $scope.cameraArray.push(value.specs.camera);
      });
      $scope.manufacturerArray = _.uniq($scope.manufacturerArray);
      $scope.storageArray = _.uniq($scope.storageArray);
      $scope.osArray = _.uniq($scope.osArray);
      $scope.cameraArray = _.uniq($scope.cameraArray);
      console.log($scope.manufacturerArray);
    });

    $scope.showAlert = function(ev,product) {
      $mdDialog.show({
        locals: {mobile : product},
        controller: ['$scope','mobile',function($scope,mobile){
          $scope.mobile = mobile;
        }],
        templateUrl: 'templates/dialog.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true
      });
    };

    $scope.checkbox = function(item,list){
      var idx = list.indexOf(item);
      if (idx > -1) {
        list.splice(idx, 1);
      }
      else {
        list.push(item);
      }
    };
    console.log($scope.manufacturerSelected);
    $scope.exists = function (item, list) {
       return list.indexOf(item) > -1;
     };

     $scope.chechCart=function () {
       console.log($scope.phone);
       $state.go('cart');
     }
     $scope.count=0;
     $scope.cartArray=[];

     $scope.addMobile=function (y) {
       // locals: {mobile : y}
       // console.log($scope.phone.length);
       if ($scope.cartArray.length === 0){
         $scope.cartArray.push(y);
         localStorage.setItem('mobileObject', JSON.stringify($scope.cartArray));
         $scope.phone=JSON.parse(localStorage.getItem("mobileObject"));
       } else {
         var repeat = false;
         for(var i = 0; i< $scope.cartArray.length; i++){
           if($scope.cartArray[i].id === y.id){
             repeat = true;
           }
         }
         if (!repeat) {
           $scope.cartArray.push(y);
           localStorage.setItem('mobileObject', JSON.stringify($scope.cartArray));
           $scope.phone=JSON.parse(localStorage.getItem("mobileObject"));
         }
       }
     }
     $scope.phone=JSON.parse(localStorage.getItem("mobileObject"));
     $scope.sum=function(x,count){
       x.sum=x.price*count;
       $scope.total=0;
       for (var i = 0; i < $scope.phone.length; i++) {
         $scope.total+=x.sum;
         console.log($scope.total);
       }
     }

});
