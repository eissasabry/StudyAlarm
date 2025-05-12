self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("study-alarm-cache").then(cache => {
      return cache.addAll([
        "./study-alarm-pwa.html",
        "./manifest.json",
        "./"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});