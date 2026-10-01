const CACHE='ovad-0023';
const ASSETS=[
  './manifest.webmanifest',
  './assets/landing.png',
  './assets/berklith_mainroom_master.png',
  './assets/stewman_body.png',
  './assets/stewman_bowl.png',
  './assets/stewman_mug.png',
  './assets/icon-192.png',
  './assets/icon-512.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('activate', event => {
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  if(event.request.method!=='GET') return;
  const req=event.request;

  // HTML/navigation is network-first so a new OVA-D build appears immediately.
  if(req.mode==='navigate' || req.destination==='document'){
    event.respondWith((async()=>{
      try{
        const fresh=await fetch(req,{cache:'no-store'});
        return fresh;
      }catch(err){
        return (await caches.match('./index.html')) || (await caches.match('./')) || Response.error();
      }
    })());
    return;
  }

  // Art stays fast/offline, but refreshes itself whenever the network is available.
  event.respondWith((async()=>{
    const cached=await caches.match(req);
    const network=fetch(req).then(async fresh=>{
      if(fresh && fresh.ok){
        const cache=await caches.open(CACHE);
        cache.put(req,fresh.clone());
      }
      return fresh;
    }).catch(()=>null);
    return cached || await network || Response.error();
  })());
});
