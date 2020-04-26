importScripts('https://cdn.jsdelivr.net/npm/workbox-cdn@4.3.1/workbox/workbox-sw.js')

// --------------------------------------------------
// Configure
// --------------------------------------------------

// Set workbox config
workbox.setConfig({
  "debug": false
})

// Start controlling any existing clients as soon as it activates
workbox.core.clientsClaim()

// Skip over the SW waiting lifecycle stage
workbox.core.skipWaiting()

workbox.precaching.cleanupOutdatedCaches()

// --------------------------------------------------
// Precaches
// --------------------------------------------------

// Precache assets

workbox.precaching.precacheAndRoute([
  "/star-logo-color-32.png",
  "/star-logo-color-64.png",
  "/star-logo-color.png",
  "/icon.png",
  "/read-quran.svg",
  "/icon_allah.svg",
  "/icon_clock.svg",
  "/icon_prayer.svg",
  "/icon_quran.svg",
  "/icon_ramadhan.svg",
  "/icon_rosary.svg",
  "/illustration_1.jpg",
  "/illustration_2.jpg",
  "/illustration_3.jpg"
], {
  "cacheId": "quran-offline-prod",
  "directoryIndex": "/"
})

// --------------------------------------------------
// Runtime Caching
// --------------------------------------------------

// Register route handlers for runtimeCaching
workbox.routing.registerRoute(new RegExp('/_nuxt/'), new workbox.strategies.CacheFirst ({}), 'GET')
workbox.routing.registerRoute(new RegExp('/'), new workbox.strategies.NetworkFirst ({}), 'GET')
