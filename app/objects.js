if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
        constructor.prototype.greeting=greeting;
    },

    iterate : function(obj) {
      var result=[];
      var i=0;
      for(var key in obj)
      {
      	if (obj.hasOwnProperty(key)) {
      	  result[i]=key+": "+obj[key];
      	  i++;
        }
      }
      return result;
    }
  };
});
