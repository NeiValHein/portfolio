var CACHE_ASSETS = 'wct-assets-v1.1';
var CACHE_POSTS = 'wct-posts';
var urlsToCache = [
  '/',
  '/offline.php',
  '/css/style.css',  
  '/js/script.js',
  '/js/theme-controller.js',
  '/img/favicon/logo.svg',
  '/img/favicon/favicon.ico',
  '/img/logos/banner.svg',
  '/img/logos/error.svg',
  '/img/logos/offline.svg'
];
self.addEventListener('install', function(event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_ASSETS)
      .then(function(cache) {
        console.log('SW: Instalado.');
        console.log('SW: Cache Activada.');
        return cache.addAll(urlsToCache, {cache: 'reload'});
      })
  );
});
self.addEventListener('activate', event => {
  console.log('SW: Activado.');
  var cacheKeeplist = [CACHE_ASSETS, CACHE_POSTS]
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (cacheKeeplist.indexOf(key) === -1) {
          return caches.delete(key)
        }
      }))
    })
  )
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
 // probar red primero
    fetch(event.request)
      .catch(function(err) {
          // despues verificar cache
      return caches.match(event.request)
  .then(function(res){
    if (res === undefined) { 
      // finalmente si ambas fallan mostrar pagina estatica
    return caches.match('offline.php');
    } 
    return res;
      })      
    })
  );
});
function queryCache(){
    var url = [];
    caches.open('wct-assets-v1.1').then(function (cache){
        cache.keys().then(function(keys){
            return Promise.all(
                    keys.map(function(k){url.push(k.url); return k.url} )
                )
        }).then(function(u){ cacheList(url);})
    })
}

function cacheList(Items)
{   for(var i = 0; i < Items.length; i++){
        console.log('Cacheado: '+Items[i]);
    }
    Items.forEach(function (item) {
    let li = document.createElement('li');
    ul.appendChild(li);

    li.innerHTML += item;
});
}