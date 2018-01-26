self.addEventListener('install', function(event) {
  console.log('SW Installed');
  event.waitUntil(  caches.open('static')
      .then(function(cache) {
        /*cache.add('/');
        cache.add('/index.html');
        cache.add('/src/js/app.js');*/
        cache.addAll([
          '/',
          '/index.html',
          '/src/js/app.js',
          '/src/css/app.css',
          '/src/images/pwa.jpg'
        ]);
      })
    );
});

self.addEventListener('activate', function() {
    console.log('SW Activated');
});


/*caches.open('static')
.then(function(cache) {

}));
  console.log('SW Installed');*/
