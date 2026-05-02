self.addEventListener('install', function(e) {
  console.log('App instalada');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
