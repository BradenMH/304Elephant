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
    "url": "/_nuxt/app.6cb8458810dae91917d2.js",
    "revision": "8c385f502b4b33f79c22ee566cd12f61"
  },
  {
    "url": "/_nuxt/common.d588f9e89784c93b7646.js",
    "revision": "c239c764a6a02b9a7719a8fba200263a"
  },
  {
    "url": "/_nuxt/layouts/default.228bdc98ea308657c971.js",
    "revision": "8e4c4dfaf3f56062bb5a7d4a922f8061"
  },
  {
    "url": "/_nuxt/manifest.deec62703b22c9f9a17c.js",
    "revision": "6e534145a37d0434499c659d029342af"
  },
  {
    "url": "/_nuxt/pages/index.7dea5db153970361445c.js",
    "revision": "0db0c12cd65e118121925f4776d9aaa0"
  },
  {
    "url": "/_nuxt/pages/users/_username/index.210d13b3c222446395b5.js",
    "revision": "bbb83f21d9ee76733e77b3dd78d5732f"
  },
  {
    "url": "/_nuxt/pages/users/_username/update.477b19f25bced20d00ee.js",
    "revision": "510aa3378d9d7da52a3de25994596042"
  },
  {
    "url": "/_nuxt/pages/users/add.2ce7168c570cabb51a04.js",
    "revision": "146e272c3076b54ba113bf1a023f7cbd"
  },
  {
    "url": "/_nuxt/pages/users/index.3aa2af23175346a6f21e.js",
    "revision": "c8996c8d3e5a83436f06384a24f31807"
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
