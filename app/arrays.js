if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
       return arr.indexOf(item);
    },

    sum : function(arr) {
      var sum = 0;
      for (var i=0;i<arr.length;i++)
        sum += arr[i];
      return sum;
    },

    remove : function(arr, item) {
        var flag=true;
        
        while(flag)
        {
          var index = arr.indexOf(item);
          if(index>=0)
            arr.splice(index, 1);
          else
            flag=false;
        }

        return arr;
    },
    
    removeWithoutCopy : function(arr, item) {
        var originalArray=arr;
        this.remove(arr,item);
        return originalArray;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index,0,item);
      return arr;
    },

    count : function(arr, item) {
       var count=0;
       var i=0;
       while(i<arr.length)
       {
          if(arr[i]==item)
            count++;
          i++;
       }
       return count;
    },

    duplicates : function(arr) {
      var cache = {};
      var results = [];
      for (var i = 0, len = arr.length; i < len; i++) {
        if(cache[arr[i]] === true){
          if(results.indexOf(arr[i])<0)
            results.push(arr[i]);
        }else
          cache[arr[i]] = true;
      }
      return results;          
    },

    square : function(arr) {
      for(var i = 0, len = arr.length; i < len; i++)
        arr[i]=arr[i]*arr[i];
      return arr;
    },

    findAllOccurrences : function(arr, target) {
      var flag=true;
      var results=[]; 
      var len=0; 
      while(flag)
      {
          var index = arr.indexOf(target);
          if(index>=0){
            results.push(index+len);
            arr.splice(index, 1);
            len++;
          }
          else
            flag=false;
       }

       return results;  
    }
  };
});
