if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-74c530ef"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Nuristani_Carving.png",revision:"28c9ad5fcc8be97ec3b1161e3b05eed1"},{url:"/_next/static/PjWIQ-RhaZDKfjXr5RxUO/_buildManifest.js",revision:"963ab83d1d708f0e4f99b9247331b1ae"},{url:"/_next/static/PjWIQ-RhaZDKfjXr5RxUO/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/PjWIQ-RhaZDKfjXr5RxUO/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/545f34e4-c06f5bdd54949e0b.js",revision:"c06f5bdd54949e0b"},{url:"/_next/static/chunks/674-8076e0bac323c68b.js",revision:"8076e0bac323c68b"},{url:"/_next/static/chunks/7112840a-d7d49da50613aa28.js",revision:"d7d49da50613aa28"},{url:"/_next/static/chunks/829-9a38ea836a15e19e.js",revision:"9a38ea836a15e19e"},{url:"/_next/static/chunks/95b64a6e-4149f98e43e1b6c9.js",revision:"4149f98e43e1b6c9"},{url:"/_next/static/chunks/964-bca994460685ab64.js",revision:"bca994460685ab64"},{url:"/_next/static/chunks/999-a388e201c2e8fd11.js",revision:"a388e201c2e8fd11"},{url:"/_next/static/chunks/d64684d8-5164ee5b7cb54a8a.js",revision:"5164ee5b7cb54a8a"},{url:"/_next/static/chunks/framework-fc97f3f1282ce3ed.js",revision:"fc97f3f1282ce3ed"},{url:"/_next/static/chunks/main-b347145d65328c46.js",revision:"b347145d65328c46"},{url:"/_next/static/chunks/pages/404-249b333e95c00a4d.js",revision:"249b333e95c00a4d"},{url:"/_next/static/chunks/pages/_app-9f1c4837666b15ad.js",revision:"9f1c4837666b15ad"},{url:"/_next/static/chunks/pages/_error-1995526792b513b2.js",revision:"1995526792b513b2"},{url:"/_next/static/chunks/pages/alphabets-741ade6653ede09e.js",revision:"741ade6653ede09e"},{url:"/_next/static/chunks/pages/articles/%5Bid%5D-1a3fbbc6ae5ab3b7.js",revision:"1a3fbbc6ae5ab3b7"},{url:"/_next/static/chunks/pages/bookList-2146a7cc2071c409.js",revision:"2146a7cc2071c409"},{url:"/_next/static/chunks/pages/books/%5Bbook%5D-92ee5b3a15004aad.js",revision:"92ee5b3a15004aad"},{url:"/_next/static/chunks/pages/contact-e086da18333e6973.js",revision:"e086da18333e6973"},{url:"/_next/static/chunks/pages/historicalImages-09c71776190d7bda.js",revision:"09c71776190d7bda"},{url:"/_next/static/chunks/pages/index-755f7cd3b6c20a09.js",revision:"755f7cd3b6c20a09"},{url:"/_next/static/chunks/pages/landscapeImages-f11adc63f6f2a45c.js",revision:"f11adc63f6f2a45c"},{url:"/_next/static/chunks/pages/listArticles-3cbdb989302259f4.js",revision:"3cbdb989302259f4"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-5752944655d749a0.js",revision:"5752944655d749a0"},{url:"/_next/static/css/69136a3ffde8bac2.css",revision:"69136a3ffde8bac2"},{url:"/_next/static/css/842a3c87b874427d.css",revision:"842a3c87b874427d"},{url:"/_next/static/css/ae4ed9c503fd1e33.css",revision:"ae4ed9c503fd1e33"},{url:"/_next/static/media/logo_original.971bc35e.png",revision:"c612e9507e3c44cd8d55786fa038dfe4"},{url:"/_next/static/media/rotatePhone.5c6ada94.svg",revision:"a7422e5ac91785b38b25213f56eb92df"},{url:"/assets/heroImage01.jpg",revision:"ff1374d8a4e4698303887d7e4b9419c2"},{url:"/assets/heroImage01.png",revision:"6117aed113a831ac627116a83f9424c7"},{url:"/assets/icons/icon-100x100.png",revision:"05dc97f01212cd02360f445f598e3442"},{url:"/assets/icons/icon-128x128.png",revision:"3f63137d91bbbda5160a7d086844b287"},{url:"/assets/icons/icon-144x144.png",revision:"f551aff587d0ad9bb99ff633afca56fe"},{url:"/assets/icons/icon-152x152.png",revision:"fba094ed022ddb76e23a143e551914be"},{url:"/assets/icons/icon-192x192.png",revision:"fd85774df7fc8a593846a05c9687ad48"},{url:"/assets/icons/icon-256x256.png",revision:"4c93b6894f730b0214a9cad13aa1d258"},{url:"/assets/icons/icon-512x512.png",revision:"eb4486887894246fd5c0932ee2a79070"},{url:"/assets/icons/icon-72x72.png",revision:"13b6b740c708d40bd51c04cf3bc48d2a"},{url:"/assets/rotatePhone.svg",revision:"a7422e5ac91785b38b25213f56eb92df"},{url:"/backgroundPic.jpeg",revision:"1bd7e25dbae2561d4dab79a180b2bdb1"},{url:"/backgroundPic.png",revision:"1bd7e25dbae2561d4dab79a180b2bdb1"},{url:"/background_frame.jpg",revision:"b79894597ab4409cc2526ad1f52cb987"},{url:"/images/ipad_splash.png",revision:"7b884a43d586e386193fd3cea71e4756"},{url:"/images/ipadpro1_splash.png",revision:"e36dfa5f1e3840959c97cc2fb968f4a4"},{url:"/images/ipadpro2_splash.png",revision:"99c77352e0dd0e5bbb1a156447e995b4"},{url:"/images/ipadpro3_splash.png",revision:"60286ce01e05922fe73b61031dad69d7"},{url:"/images/iphone5_splash.png",revision:"e70a3c15c57b6346aa18fd22d6f799cb"},{url:"/images/iphone6_splash.png",revision:"4bb2595f26ab885ed723501990385ef3"},{url:"/images/iphoneplus_splash.png",revision:"bc478acc56837dbd3fe44305fc7e2c8a"},{url:"/images/iphonex_splash.png",revision:"1eb9fbe309323dd86bcb3f0f13ef21fd"},{url:"/images/iphonexr_splash.png",revision:"5f0c486192e7ac991ce9f094065f545d"},{url:"/images/iphonexsmax_splash.png",revision:"efb60991a0269db09ebd137c082a4330"},{url:"/logo_favicon.png",revision:"ba5378f80ac23fc17625ce180e1065e2"},{url:"/logo_original.png",revision:"c612e9507e3c44cd8d55786fa038dfe4"},{url:"/logo_original_noLabel.png",revision:"6ca38fb0c11a2a916adab01deb02dfca"},{url:"/manifest.json",revision:"c5e0525372819a9c86f6747e47ec3918"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
