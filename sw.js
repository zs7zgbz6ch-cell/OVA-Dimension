const CACHE = 'ovad-worldtime-0001';

const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/berklith-tavern.jpg',
  './assets/rionnes-room.jpg'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(CORE))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const req = event.request;

  // Always try the network first for pages so GitHub updates appear quickly.
  if (req.mode === 'navigate' || req.destination === 'document') {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(req, { cache: 'no-store' });
        const cache = await caches.open(CACHE);
        cache.put('./index.html', fresh.clone());
        return fresh;
      } catch (err) {
        return (await caches.match('./index.html')) || Response.error();
      }
    })());
    return;
  }

  // Assets appear instantly from cache, while a fresh copy is stored quietly.
  event.respondWith((async () => {
    const cached = await caches.match(req);
    const network = fetch(req).then(async fresh => {
      if (fresh && fresh.ok) {
        const cache = await caches.open(CACHE);
        cache.put(req, fresh.clone());
      }
      return fresh;
    }).catch(() => null);

    return cached || await network || Response.error();
  })());
});
