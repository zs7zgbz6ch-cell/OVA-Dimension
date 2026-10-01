OVA-D Prototype 0.02.2 — Update Fix

This corrective build keeps the 0.02.1 Landing restoration and fixes stale PWA updates.

Changes:
- Service-worker cache bumped to ovad-0022.
- Old caches are deleted on activation.
- New service workers activate immediately and claim open OVA-D windows.
- HTML/navigation is network-first, preventing an old index.html from being pinned by the PWA cache.
- Art assets remain cached for fast/offline loading and refresh when online.
- The page asks the service-worker registration to check for updates.
- Landing lamp state/effect and J.B. + M.B. beam interaction from 0.02.1 are preserved.

FIRST UPDATE FROM 0.02:
Because 0.02 already has an older cache-first service worker, upload ALL root files from this build, especially sw.js. After GitHub Pages deploys, open OVA-D in normal Safari once. The old page should discover the new service worker. Close/reopen or refresh once if needed. From then on, 0.02.2's network-first navigation should make future builds much less sticky.
