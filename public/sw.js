if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return t[e]||(s=new Promise((async s=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]}))},s=(s,t)=>{Promise.all(s.map(e)).then((e=>t(1===e.length?e[0]:e)))},t={require:Promise.resolve(s)};self.define=(s,r,n)=>{t[s]||(t[s]=Promise.resolve().then((()=>{let t={};const i={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return t;case"module":return i;default:return e(s)}}))).then((e=>{const s=n(...e);return t.default||(t.default=s),t}))})))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/commons.134088cfec0460eb6c7d.js",revision:"dwC-ecktC1phIW0Ck4IvF"},{url:"/_next/static/chunks/framework.98c1b221acb34aa9927b.js",revision:"dwC-ecktC1phIW0Ck4IvF"},{url:"/_next/static/css/1b2b5066b29222f684d3.css",revision:"dwC-ecktC1phIW0Ck4IvF"},{url:"/_next/static/dwC-ecktC1phIW0Ck4IvF/_buildManifest.js",revision:"dwC-ecktC1phIW0Ck4IvF"},{url:"/_next/static/dwC-ecktC1phIW0Ck4IvF/_ssgManifest.js",revision:"dwC-ecktC1phIW0Ck4IvF"},{url:"/_next/static/dwC-ecktC1phIW0Ck4IvF/pages/_app.js",revision:"dwC-ecktC1phIW0Ck4IvF"},{url:"/_next/static/dwC-ecktC1phIW0Ck4IvF/pages/_error.js",revision:"dwC-ecktC1phIW0Ck4IvF"},{url:"/_next/static/dwC-ecktC1phIW0Ck4IvF/pages/index.js",revision:"dwC-ecktC1phIW0Ck4IvF"},{url:"/_next/static/runtime/main-a4a40ba8ab13c1165e77.js",revision:"dwC-ecktC1phIW0Ck4IvF"},{url:"/_next/static/runtime/polyfills-ee4ee5083d7312778722.js",revision:"dwC-ecktC1phIW0Ck4IvF"},{url:"/_next/static/runtime/webpack-b65cab0b00afd201cbda.js",revision:"dwC-ecktC1phIW0Ck4IvF"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/images/apple-touch-icon.png",revision:"4e1677a04e1597fdb3d3e2f5cb7b67c9"},{url:"/images/manifest-icon-192.png",revision:"125be2a270e598e44828fc28c793e0b6"},{url:"/images/manifest-icon-512.png",revision:"cbf109519222d901a58d373bfe8a7517"},{url:"/images/profile.jpg",revision:"5cf908697b562f97bda41eceb3307276"},{url:"/manifest.json",revision:"74943bcf2951fe293dbc345b2e184f71"},{url:"/robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
