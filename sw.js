if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>n(e,t),l={module:{uri:t},exports:o,require:c};i[t]=Promise.all(s.map((e=>l[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BOED3kEz.js",revision:null},{url:"assets/index-n_ryQ3BS.css",revision:null},{url:"index.html",revision:"8633b360ec2dc362be6cf7475f614865"},{url:"registerSW.js",revision:"262c3672a2ea1233145995064986b270"},{url:"icon-192x192.png",revision:"291252215df401d941f66ba3bd817350"},{url:"icon-512x512.png",revision:"af47ca9c4eeb46fbc3652217c8da3980"},{url:"manifest.webmanifest",revision:"ca20ed165306bd6daf07926bf2a5bda0"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
