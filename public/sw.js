if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,t,i)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const r={uri:location.origin+s.slice(1)};return Promise.all(t.map((s=>{switch(s){case"exports":return n;case"module":return r;default:return e(s)}}))).then((e=>{const s=i(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/1-Y1IOy1w9VhApGRn4tno/_buildManifest.js",revision:"1-Y1IOy1w9VhApGRn4tno"},{url:"/_next/static/1-Y1IOy1w9VhApGRn4tno/_ssgManifest.js",revision:"1-Y1IOy1w9VhApGRn4tno"},{url:"/_next/static/chunks/687-4f2dc01c1f46d938e052.js",revision:"1-Y1IOy1w9VhApGRn4tno"},{url:"/_next/static/chunks/969-ef3b1e39318262b2552f.js",revision:"1-Y1IOy1w9VhApGRn4tno"},{url:"/_next/static/chunks/framework-895f067827ebe11ffe45.js",revision:"1-Y1IOy1w9VhApGRn4tno"},{url:"/_next/static/chunks/main-27b4466635e58e434186.js",revision:"1-Y1IOy1w9VhApGRn4tno"},{url:"/_next/static/chunks/pages/_app-51054c92a0ec08a25ac6.js",revision:"1-Y1IOy1w9VhApGRn4tno"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"1-Y1IOy1w9VhApGRn4tno"},{url:"/_next/static/chunks/pages/index-478c4989d19e7f5e09b6.js",revision:"1-Y1IOy1w9VhApGRn4tno"},{url:"/_next/static/chunks/pages/loot-xp-calc-0806f3293c942a49020a.js",revision:"1-Y1IOy1w9VhApGRn4tno"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"1-Y1IOy1w9VhApGRn4tno"},{url:"/_next/static/chunks/webpack-70ff542d2e22ae74aeb1.js",revision:"1-Y1IOy1w9VhApGRn4tno"},{url:"/_next/static/css/9675b708017bffe80e2e.css",revision:"1-Y1IOy1w9VhApGRn4tno"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/images/apple-touch-icon.png",revision:"4e1677a04e1597fdb3d3e2f5cb7b67c9"},{url:"/images/manifest-icon-192.png",revision:"125be2a270e598e44828fc28c793e0b6"},{url:"/images/manifest-icon-512.png",revision:"cbf109519222d901a58d373bfe8a7517"},{url:"/images/profile.jpg",revision:"5cf908697b562f97bda41eceb3307276"},{url:"/manifest.json",revision:"b6837987ddbc3f645237d4635d9397fd"},{url:"/robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
