self.addEventListener('install', event => {
    console.log('[SW]: install');
    event.waitUntil(
        caches.open('v1').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/app.js',
                '/styles.css',
                '/manifest.json'
            ]);
        })
    );
});

self.addEventListener('activate', event => {
    console.log('[SW]: activate');
});

self.addEventListener('fetch', event => {
    console.log('[SW]: fetch', event.request.url);
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
