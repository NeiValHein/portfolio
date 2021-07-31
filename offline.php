<!DOCTYPE html>
<html lang="es">
<head>
<?php include "layout/head.php"; ?>
<title>Ups!</title>
<meta http-equiv="X-UA-Compatible"content="IE=Edge">
<meta name="description" content="Error De Conexión.">
<meta name="author" content="WebCodeTeam">
<style>
body {text-align: center;}
.content { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) }
</style>
</head>
<body>
<div class="content">
<div class="offline" style="height: 300px;"></div>
<div class="text">😬 Estas sin conexión, pero puedes seguir leyendo los posts que guardaste. 🥳</div>
<span class="brsmall"></span>
<a class="btn" onclick="queryCache()">Obtener Posts</a>
<div id="cached_posts"></div>
</div>
<script type="text/javascript">
var run = false;
function queryCache(){
    if(run) {
       return;
    } 
    run = true;
    var url = [];
    caches.open('wct-posts').then(function (cache){
        cache.keys().then(function(keys){
            return Promise.all(
                    keys.map(function(k){url.push(k.url); return k.url} )
                )
        }).then(function(u){ cacheList(url);})
    })
}
function cacheList(Items)
{   
div = document.createElement('div');
document.getElementById('cached_posts').appendChild(div);
if (Items.length >= 1) {
for(var i = 0; i < Items.length; i++){
        console.log('Cacheado: '+Items[i]);    
    let a = document.createElement('a');
    div.appendChild(a);
    a.innerHTML = '<a href="'+Items+'">' +Items+'</a>'+'<br>';
    }
}
else {
    let p = document.createElement('p');
    div.appendChild(p);
    p.innerHTML = 'Ups!, parece que todavia no has guardado ningun post :/';    
}
};</script>
</body>
</html>