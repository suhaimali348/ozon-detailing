self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('ozon-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/login.html',
        '/index.html',
        '/signup.html',
        '/dashboard.html',
        '/images/transport.png',
        '/images/icon-192x192.png',
        '/images/icon-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});