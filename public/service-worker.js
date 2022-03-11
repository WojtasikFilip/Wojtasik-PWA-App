self.addEventListener('push', (event) => {
  const data = event.data.json();
  self.registration.showNotification(data.title, {
    body: data.body.message,
    icon: 'img/icons/adroid-chrome-192x192.png',
  });
});

/* global workbox */
if (workbox) {
  console.log(`Workbox is loaded`);
  workbox.setConfig({ debug: true });
  workbox.precaching.precacheAndRoute(self.__precacheManifest);
  workbox.routing.registerRoute(
    '/mitschriften',
    new workbox.strategies.NetworkFirst({
      cacheName: 'filips-pwa-cache',
    }),
  );
  workbox.routing.registerRoute(
    new RegExp('/img/icons/.*.png'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'filips-image-cache',
    }),
  );
} else {
  console.log(`Workbox didn't load`);
}
