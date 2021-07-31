window.onscroll = function() {scrollbar()};

function scrollbar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("ProgressBar").style.width = scrolled + "%";
}

document.querySelector('.save-post').addEventListener('click', function(event) {
  event.preventDefault();
  var syntax = document.querySelector('#postTitle').dataset.post;
  var CACHE_ASSETS = 'wct-assets';
  var CACHE_POSTS = 'wct-posts';
  caches.open(CACHE_POSTS).then(function(cache) {
    fetch('/post/' + syntax).then(function(response) {
      // get-article-urls returns a JSON-encoded array of
      // resource URLs that a given article depends on
      console.log(response.url);
    }).then(function(urls) {
      cache.add('/post/' + syntax);
    });
  });
});