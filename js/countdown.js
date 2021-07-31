window.addEventListener("DOMContentLoaded", count, false);

function count() {

    if (document.getElementById('timer')) {
  var minute = 5;

  var time = 5;

  setInterval(function() {

    document.getElementById("timer").innerHTML = time;

    time--;

    if (time == 00) {

      minute --;

      time = 0;

      if (minute == 0) {

        minute = 5;

      }

    }

  }, 1000);
 }
}