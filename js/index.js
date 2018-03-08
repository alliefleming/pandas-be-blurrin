(function() {
  'use strict';

  function ready(fn) {

    if(document.readyState != 'loading') {
      fn();
    }
    else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }
  ready(
    function () {
      document.getElementById("button__blur").addEventListener( "click", 
        function() { document.getElementById("image__blur").classList.add("blur");
    })
  })
  ready(
      function () {
      document.getElementById("button__focus").addEventListener( "click", 
         function() {
            document.getElementById("image__blur").classList.remove("blur");
      })
    })
})();