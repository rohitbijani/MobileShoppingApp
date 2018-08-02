myApp.filter('mobileFilter', function(){
  return function(products,manufacturerSelected,storageSelected,osSelected,cameraSelected) {
    var finalArray = [];
    var tempArray = [];
    console.log(products);
    if(manufacturerSelected.length == 0 && storageSelected.length == 0 && osSelected.length == 0 && cameraSelected.length == 0)
    {
      finalArray = products;
    }
    else
    {
      if(manufacturerSelected.length>0)
      {
        for(var i=0;i<manufacturerSelected.length;i++)
        {
          for(var j=0;j<products.length;j++)
          {
            if(manufacturerSelected[i] == products[j].specs.manufacturer)
            {
              tempArray.push(products[j]);
            }
          }
        }
        finalArray=tempArray;
        tempArray=[];
  
      }
      else
      {
        finalArray=products;
      }

      if(storageSelected.length>0)
      {
        for(var i=0;i<storageSelected.length;i++)
        {
          for(var j=0;j<finalArray.length;j++)
          {
            if(storageSelected[i] == finalArray[j].specs.storage)
            {
              tempArray.push(finalArray[j]);
            }
          }
        }
        finalArray=tempArray;
        tempArray=[];
      }

      if(osSelected.length>0)
      {
        for(var i=0;i<osSelected.length;i++)
        {
          for(var j=0;j<finalArray.length;j++)
          {
            if(osSelected[i] == finalArray[j].specs.os)
            {
              tempArray.push(finalArray[j]);
            }
          }
        }
        finalArray=tempArray;
        tempArray=[];
      }

      if(cameraSelected.length>0)
      {
        for(var i=0;i<cameraSelected.length;i++)
        {
          for(var j=0;j<finalArray.length;j++)
          {
            if(cameraSelected[i] == finalArray[j].specs.camera)
            {
              tempArray.push(finalArray[j]);
            }
          }
        }
        finalArray=tempArray;
        tempArray=[];
      }
    }

    return finalArray;
  };
});
