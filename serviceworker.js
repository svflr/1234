self.addEventListener('install', event => {
    console.log('[SW]: install');
});

self.addEventListener('activate', event => {
    console.log('[SW]: activate');
});

self.addEventListener('fetch', event => {
    console.log('[SW]: fetch', event.request.url);
});
