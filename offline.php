<!DOCTYPE html>
<html lang="es">
<head>
<?php include "layout/head.php"; ?>
<title>Ups!</title>
<meta http-equiv="X-UA-Compatible"content="IE=Edge">
<meta name="description" content="Connection Error.">
<meta name="author" content="NeiValHein">
</head>
<body>
<div class="content-container text-center">
<div class="offline-error" style="height: 300px;"></div>
<div>Hey, you're currently offline &#10071;</div>
<span class="brsmall"></span>
<div class="conection-check" id="conection-check"><p>Current connection status: <span id="status"></span></p>
<button class="btn refresh" onclick="refresh()">Reload</button></div>
</div>
<script type="text/javascript">
var loaded = false;
window.addEventListener('load', function() {
  var status = document.getElementById("status");

  function updateOnlineStatus(event) {
    var condition = navigator.onLine ? "online" : "offline";

    status.className = condition;
    status.innerHTML = condition.toUpperCase();
  }
  window.addEventListener('online',  updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});
function refresh(){
    document.querySelector('.conection-check').innerHTML = 'Re-establishing connection please wait...' +'<div class="loader"></div>';
    window.location.reload();
} 
</script>
</body>
</html>
