importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/app.f533969acc8fe39b6f74.js",
    "revision": "27159160b5faf6dbf99582bf39e6d7b6"
  },
  {
    "url": "/_nuxt/common.d588f9e89784c93b7646.js",
    "revision": "c239c764a6a02b9a7719a8fba200263a"
  },
  {
    "url": "/_nuxt/layouts/default.4719d9a864dd4d3dbd8d.js",
    "revision": "890981cf5ffae66dfcfdf36284e8eb3e"
  },
  {
    "url": "/_nuxt/manifest.6549fedf3bda3e07f740.js",
    "revision": "abbe5ca723e9d17a26bb5887059ff84b"
  },
  {
    "url": "/_nuxt/pages/index.6590354786ffbad2479e.js",
    "revision": "48f484d2abd77ff2c0169e8f3a01bf83"
  },
  {
    "url": "/_nuxt/pages/users/_username/index.4e143078a49bd867efab.js",
    "revision": "a6412ca844a2b6d5a8a1ce763b76d36d"
  },
  {
    "url": "/_nuxt/pages/users/_username/update.580bcb8f7a9d74980f2b.js",
    "revision": "1257a8575155a472448899edfb7ebeb6"
  },
  {
    "url": "/_nuxt/pages/users/add.0f4314036eda995dff1f.js",
    "revision": "a72fd275e8a15ef20a90e6a6290da208"
  },
  {
    "url": "/_nuxt/pages/users/index.92f27bd43fb6646e3f52.js",
    "revision": "ae659cc00b83c3c330e349ef2d6d6e06"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "304demoproject_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
