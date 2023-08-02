'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "1b709a9f785d0a11404015b186ae2737",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "566aad878fbba2eb6f549df8223e1c3a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e903fe7611bba8d99403fdf4ef493bcd",
".git/logs/refs/heads/main": "f65f6b4d47dac3bc91417290992d1602",
".git/logs/refs/remotes/origin/main": "005226104f85028f5474df5b270113ee",
".git/objects/29/af11b19d3c2785fd8793356823319b32e62c84": "5413fcc15d1313088f7b4fdf6bd4cea9",
".git/objects/3d/17fcd9a1b900c39eef7ef610609f8a06e0b191": "6a102ed0925313501ea31d342f76bc94",
".git/objects/6c/7a40fc01e03936f4a3115e68a80ae2565d2d55": "49589763c0a89845e03c31ff5df5f964",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/972825cf87ea8bfef6704125614dbfb1d7bb76": "05241266283d35e78f86f176f98741ed",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/main": "b1564f6441f05283941a8de2e5086652",
".git/refs/remotes/origin/main": "b1564f6441f05283941a8de2e5086652",
"assets/AssetManifest.bin": "0f5546908cbd63e1958a69fc095c4548",
"assets/AssetManifest.json": "706aa2a82a6104c907e1d1e89b86bfa3",
"assets/assets/images/10_Being-A-Pet-Photographer.jpg": "510822b9e6c74567ba23892f5e09a8c3",
"assets/assets/images/adoption/Post1.jpg": "d00efae7d54c6b70377af1de7efbdf09",
"assets/assets/images/adoption/Post2.jpg": "c9c7f35d4b973d5529d3878ed3f6c4c8",
"assets/assets/images/adoption/Post3.jpg": "4ce0da910b35f0d6900a3c8e3f93360f",
"assets/assets/images/adoption/Post4.jpg": "f96e9d1b4c5a83cb3da035cff2982061",
"assets/assets/images/adoption/Post5.jpg": "ff60d9f4b0e87c0fc5c24d245111ba41",
"assets/assets/images/adoption/Post6.jpg": "fa0f3a034cf000f0bf9d36509b5577fb",
"assets/assets/images/donation/Arrow/Arrow%25201.jpg": "8ef3a6e725fe58b59a606fd7922648df",
"assets/assets/images/donation/Arrow/Arrow%25202.jpg": "bf2bbc39974875d1456801fea89ac0b4",
"assets/assets/images/donation/Arrow/Arrow%25203.jpg": "1bcca480c486379423f3004515667214",
"assets/assets/images/donation/Arrow/Arrow%25204.jpg": "13ece6820b78e9c319043d0b78dabf2f",
"assets/assets/images/donation/Arrow/Qr.jpg": "e1a31c03b829989f160624446305105e",
"assets/assets/images/donation/FriendOfAnimal/Friend_of_animal1.jpg": "4300e678cdb44b3005db67e2e357c5ca",
"assets/assets/images/donation/FriendOfAnimal/Friend_of_animal2.jpg": "9915519619b0497b7c3fd22d1fba2f84",
"assets/assets/images/donation/FriendOfAnimal/Friend_of_animal3.jpg": "ecce3366c53977dc3a302dfe83f038ff",
"assets/assets/images/donation/FriendOfAnimal/Friend_of_animal4.jpg": "46727db0e55d2be4b952234265505562",
"assets/assets/images/donation/FriendOfAnimal/Qr.jpg": "e1a31c03b829989f160624446305105e",
"assets/assets/images/donation/PeopleOfAnimal/PeopleOfAnimal1.jpg": "801052ef67650b6d7c317b584f601f28",
"assets/assets/images/donation/PeopleOfAnimal/PeopleOfAnimal2.jpg": "0508f9a27c6fa70dbb268cb348813f73",
"assets/assets/images/donation/PeopleOfAnimal/PeopleOfAnimal3.jpg": "cbf9080ee54f8f36101187e566ac3af8",
"assets/assets/images/donation/PeopleOfAnimal/PeopleOfAnimal4.jpg": "ca5554247180ba00347c0639dc66d676",
"assets/assets/images/donation/PeopleOfAnimal/Qr.jpg": "e1a31c03b829989f160624446305105e",
"assets/assets/images/hero.jpg": "9146cd883c9ecb3200fb7c28048cd040",
"assets/assets/images/home/about.jpg": "866141fb00ab229ac2f60a6b5f1482de",
"assets/assets/images/pet-icon-png-2.jpg": "313f524e7ead5c487c5a99de672c1bd4",
"assets/assets/images/Sale/Arapaima.jpeg": "9989c7a294514a8a0c15bdd53e4ca4b0",
"assets/assets/images/Sale/Cat.jpg": "6393ad2834211894a3cbcc4280878651",
"assets/assets/images/Sale/Chameleon.jpeg": "9d77419b65049a11dc686de31d0fcade",
"assets/assets/images/Sale/Dog.jpg": "427044b0ce91d15b4d032743527da108",
"assets/assets/images/Sale/Kyoshi.jpeg": "8fc36a97d47d3b186646e2c3cbe24c80",
"assets/assets/images/Sale/Python.jpeg": "b4fe9dfb50c9826c8afa7a9698b4bf14",
"assets/assets/videos/Boar.mp4": "fb0ac240e26ef3560dbbdc54f99b0e00",
"assets/assets/videos/Doggy.mp4": "55a602665022d66cbb763cc0273bc93e",
"assets/assets/videos/Shark.mp4": "e82f4d955faa0fce07784bfa467f9f94",
"assets/assets/videos/Sloth.mp4": "9e4fcc631de4614ffc14674703129c64",
"assets/FontManifest.json": "710ec6b69a5bea47856900084d3c9536",
"assets/fonts/MaterialIcons-Regular.otf": "457254550e8bb72db38658d6940a3ee1",
"assets/NOTICES": "513484f29ebc34ba2d08d5cb193f5bee",
"assets/packages/awesome_icons/fonts/Brands-Regular-400.otf": "b6eadee36948183e0753dd262df9d678",
"assets/packages/awesome_icons/fonts/Free-Regular-400.otf": "633868de8a2c3b1dd5c6c1df384777a8",
"assets/packages/awesome_icons/fonts/Free-Solid-900.otf": "68126a6648ba96530b402dd992c1feb4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "60114762957c6a50d2e0cd7d2c5b7b98",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c1e79dad5136b99745db0f131809e3ee",
"/": "c1e79dad5136b99745db0f131809e3ee",
"main.dart.js": "ae68f6e0c915f952f9c294e22da15606",
"manifest.json": "d8812f1f8fd16a66b2309b41df91a6a1",
"version.json": "fde0f9d738760f40a59aae644224a5a5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
