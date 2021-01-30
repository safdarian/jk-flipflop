$(document).ready(
    function(){
        $(document).keydown(function(e) {
            if (e.keyCode == 74) {
              $("#checkJ").trigger("click");
              return false;
            }
          });
          $(document).keydown(function(e) {
            if (e.keyCode == 75) {
              $("#checkK").trigger("click");
              return false;
            }
          });
          $(document).keydown(function(e) {
            if (e.keyCode == 67) {
              $("#checkCLK").trigger("click");
              return false;
            }
          });
          $(document).keydown(function(e) {
            if (e.keyCode == 83) {
              $("#run").trigger("click");
              return false;
            }
          });
          $(document).keydown(function(e) {
            if (e.keyCode == 32) {
              $("#run").trigger("click");
              return false;
            }
          });
          ready("jcanvas");
          ready("kcanvas");
          ready("clkcanvas");
          ready("qcanvas");
    }

);
$("#test").click(function(){
    calculate($("jcanvas").checked, $("kcanvas").checked, $("clkcanvas").checked);
});