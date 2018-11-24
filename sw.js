/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "contactform/contactform.js",
    "revision": "2c0ec9ade8086b4f8af1c6091d83ecca"
  },
  {
    "url": "contactform/Readme.txt",
    "revision": "bf7744a6e3a3c7b2ff6c3427d3e5087a"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "32cc73783a60cf1045d47b505e65c3dc"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "71af79059b1f44f8ac27ff7bc392099d"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "87b1743ec3ba0dd1931c442b085f47b5"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "2b82bef8ae91cadf03b8937af00decfa"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "857f4deb167175d12786d994310f4d3b"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "0d84b9d09c854c30bd0670b5a7b9c35a"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "9ea90e9e5a73a24226bfd1d7b2a430d1"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "8bebc8c10c0cab0d3622633c3c673925"
  },
  {
    "url": "img/about.png",
    "revision": "f2945fbdc7815be9b296ef382cba2036"
  },
  {
    "url": "img/beat-fi.jpg",
    "revision": "93b677b9dfda8e8b450061c41c8dc43d"
  },
  {
    "url": "img/beat-pop.jpg",
    "revision": "ce5674fe7fc35d82f4a63252f665b0e8"
  },
  {
    "url": "img/call-to-action-bg.jpg",
    "revision": "4d43b3d10f6afe7f6d418e48dfc9cc1f"
  },
  {
    "url": "img/cam-pro.jpeg",
    "revision": "ed1b1856387ff3f340853594f42cb2b3"
  },
  {
    "url": "img/car.png",
    "revision": "dfa61c2225f2c4248ba625a8c5ae6b20"
  },
  {
    "url": "img/close.svg",
    "revision": "3360c57cdbbebca82e3a792f0a57876c"
  },
  {
    "url": "img/favicon.png",
    "revision": "4751c7a3ad2de1231919c345ce08313a"
  },
  {
    "url": "img/gallery.png",
    "revision": "024070fbd0f637d6c0bbe758bd14670d"
  },
  {
    "url": "img/gallery/gallery-1.jpg",
    "revision": "6faa520dcba6925a9bc16b981c75b418"
  },
  {
    "url": "img/gallery/gallery-4.jpg",
    "revision": "8306c0c7ecd4fe8aa0a38900b85adcc3"
  },
  {
    "url": "img/gallery/gallery-5.jpg",
    "revision": "147ea0e793bb23fa8f0ab2a3caf62ca1"
  },
  {
    "url": "img/intro-bg.jpg",
    "revision": "17b52ff4ae509169422a787c11a2e786"
  },
  {
    "url": "img/kaca-mata.jpeg",
    "revision": "aeddc28fc3c2e401794f50220851e2ac"
  },
  {
    "url": "img/logo-blue.svg",
    "revision": "2a5faf24da8830086c8e4556365bdc2e"
  },
  {
    "url": "img/logo-green.svg",
    "revision": "5f9e5edafb8bec3124e9894e4952a713"
  },
  {
    "url": "img/logo.png",
    "revision": "0e490085058d69af6495c7ec109fd453"
  },
  {
    "url": "img/menu.svg",
    "revision": "a833de9795cac2a5d2031a39af727844"
  },
  {
    "url": "img/mio-m-125.jpg",
    "revision": "35be77a15b7c108c27cedcf4e8b2c54b"
  },
  {
    "url": "img/mio-soul-gt.jpg",
    "revision": "4c55c65ecfcd5231d7ee95124beff98a"
  },
  {
    "url": "img/nmax.jpg",
    "revision": "386114dac6b0828c66e88b9dd9adfa22"
  },
  {
    "url": "img/phones-symbol.svg",
    "revision": "f16134d24c95484a04754e56c6b0986c"
  },
  {
    "url": "img/power-bank.jpeg",
    "revision": "7917b13da4e54cfa5d1eae6e5c69bd4a"
  },
  {
    "url": "img/product-features.png",
    "revision": "3ba15f1fa9ca8348bc9badb3f5aa3816"
  },
  {
    "url": "img/product-screen-1.png",
    "revision": "c9e06964d2e31701dbaccce2a11c0718"
  },
  {
    "url": "img/product-screen-2.png",
    "revision": "19e254a7a3bc9975744b36821385abb2"
  },
  {
    "url": "img/product-screen-3.png",
    "revision": "f3b74e19f656d1b73227e1057759c4cf"
  },
  {
    "url": "img/rental-motor-tulungagung-armada.jpeg",
    "revision": "babd8885db4862f129f8dbdce259c797"
  },
  {
    "url": "img/rental-motor-tulungagung-bule-2.jpeg",
    "revision": "2f0979946b37d27f4ed65f304d612b12"
  },
  {
    "url": "img/rental-motor-tulungagung-bule-atas-1.jpeg",
    "revision": "5024649cf31c6493447f3580df2809b6"
  },
  {
    "url": "img/rental-motor-tulungagung-bule-atas-2.jpeg",
    "revision": "6bd8fe78ed5141f588d7460b4ccbf1fe"
  },
  {
    "url": "img/sms.svg",
    "revision": "878cb683823bc63731f8ef65323abc48"
  },
  {
    "url": "img/team/team-4.jpg",
    "revision": "7e4f65a0b3b5ce25eccc4df5852f2c24"
  },
  {
    "url": "img/vespa.jpg",
    "revision": "2fe4ab276fba101206cc60d404bb88d4"
  },
  {
    "url": "img/whatsapp.svg",
    "revision": "47c77bf133116ff76838809ae5d2c83a"
  },
  {
    "url": "index.html",
    "revision": "7c933e07339105a7fe7a426c95bf66e2"
  },
  {
    "url": "lib/font-awesome/css/font-awesome.css",
    "revision": "c495654869785bc3df60216616814ad1"
  },
  {
    "url": "lib/font-awesome/css/font-awesome.min.css",
    "revision": "269550530cc127b6aa5a35925a7de6ce"
  },
  {
    "url": "lib/font-awesome/fonts/fontawesome-webfont.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "lib/font-awesome/fonts/fontawesome-webfont.svg",
    "revision": "912ec66d7572ff821749319396470bde"
  },
  {
    "url": "lib/font-awesome/fonts/fontawesome-webfont.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "lib/font-awesome/fonts/fontawesome-webfont.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "lib/font-awesome/fonts/fontawesome-webfont.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "lib/font-awesome/fonts/FontAwesome.otf",
    "revision": "0d2717cd5d853e5c765ca032dfd41a4d"
  },
  {
    "url": "lib/ionicons/css/ionicons.css",
    "revision": "f27354b28af3cf48d28260c03305d0ce"
  },
  {
    "url": "lib/ionicons/css/ionicons.min.css",
    "revision": "0d6763b67616cb9183f3931313d42971"
  },
  {
    "url": "lib/ionicons/fonts/ionicons.eot",
    "revision": "2c2ae068be3b089e0a5b59abb1831550"
  },
  {
    "url": "lib/ionicons/fonts/ionicons.svg",
    "revision": "621bd386841f74e0053cb8e67f8a0604"
  },
  {
    "url": "lib/ionicons/fonts/ionicons.ttf",
    "revision": "24712f6c47821394fba7942fbb52c3b2"
  },
  {
    "url": "lib/ionicons/fonts/ionicons.woff",
    "revision": "05acfdb568b3df49ad31355b19495d4a"
  },
  {
    "url": "manifest.json",
    "revision": "0d56fa5cee3f2992db5a79241f18999c"
  },
  {
    "url": "sw.html",
    "revision": "51abe15c839510a62514865cdf118251"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
