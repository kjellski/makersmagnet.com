if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return o[e]||(s=new Promise(async s=>{if("document"in self){const o=document.createElement("script");o.src=e,document.head.appendChild(o),o.onload=s}else importScripts(e),s()})),s.then(()=>{if(!o[e])throw new Error(`Module ${e} didn’t register its module`);return o[e]})},s=(s,o)=>{Promise.all(s.map(e)).then(e=>o(1===e.length?e[0]:e))},o={require:Promise.resolve(s)};self.define=(s,a,f)=>{o[s]||(o[s]=Promise.resolve().then(()=>{let o={};const i={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return o;case"module":return i;default:return e(s)}})).then(e=>{const s=f(...e);return o.default||(o.default=s),o})}))}}define("./service-worker.js",["./workbox-62e3e20a"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"68f4a17b7f3efb32b6f60bcb4d88885d"},{url:"css/normalize.css",revision:"556966688a6f6b8265c0dbf43f9d3719"},{url:"css/screen.css",revision:"a78479c8f77b63518e3c22bf1f03af41"},{url:"favicon.ico",revision:"40dc136f2c5f5564e7238d4dc4245b8c"},{url:"font-awesome/css/font-awesome-ie7.css",revision:"2984ce7c2ee292a2a6ef882ca55c4264"},{url:"font-awesome/css/font-awesome-ie7.min.css",revision:"4efc20143a3957f447ceeaa53695ceb6"},{url:"font-awesome/css/font-awesome.css",revision:"1f9e9d1a5a1d347d945ef4b7727f2ea0"},{url:"font-awesome/css/font-awesome.min.css",revision:"fa6868c22ceca7f65191ec25c68a9bb5"},{url:"font-awesome/font/fontawesome-webfont.eot",revision:"5ae23ad29b67289a1375d2043e289c52"},{url:"font-awesome/font/fontawesome-webfont.svg",revision:"f99a231ed57ee113b50b1c3e9f9fcdc3"},{url:"font-awesome/font/fontawesome-webfont.ttf",revision:"8cca2f02b0af2da365ff4d1755f29146"},{url:"font-awesome/font/fontawesome-webfont.woff",revision:"b683029bafe0305ac2234038a03e1541"},{url:"font-awesome/font/FontAwesome.otf",revision:"8daab3c4f8252e0c3a3069ac0913b4a4"},{url:"font-awesome/fonts/fontawesome-webfont.eot",revision:"8b27bc96115c2d24350f0d09e6a9433f"},{url:"font-awesome/fonts/fontawesome-webfont.svg",revision:"0a799148a50bb02c6f380eabd8d97559"},{url:"font-awesome/fonts/fontawesome-webfont.ttf",revision:"dcb26c7239d850266941e80370e207c1"},{url:"font-awesome/fonts/fontawesome-webfont.woff",revision:"3293616ec0c605c7c2db25829a0a509e"},{url:"font-awesome/fonts/FontAwesome.otf",revision:"3f3a623e88cb5c62eaa2367195e98b67"},{url:"font-awesome/less/bootstrap.less",revision:"c106067aa5ffe82e6acf422aed813ab3"},{url:"font-awesome/less/bordered-pulled.less",revision:"5b3f3e1353ea7ab9d10fd7598fbd214b"},{url:"font-awesome/less/core.less",revision:"e0425dae16b4e10d439ef079bc75ea68"},{url:"font-awesome/less/extras.less",revision:"9b2371c3290b76986486e2701e1e73ac"},{url:"font-awesome/less/fixed-width.less",revision:"5e07ec001f8d21bd279c12ee542813f7"},{url:"font-awesome/less/font-awesome-ie7.less",revision:"3f60261b4284bf30dd407515025df81f"},{url:"font-awesome/less/font-awesome.less",revision:"4201fdd32cc7a7d2f6ed2706800faf75"},{url:"font-awesome/less/icons.less",revision:"cee820602539e69d61c4dd782536e1a0"},{url:"font-awesome/less/larger.less",revision:"8cb65280c0f889daf72626c21a7c8628"},{url:"font-awesome/less/list.less",revision:"291fbd1d05eb7eba6172f738837794b6"},{url:"font-awesome/less/mixins.less",revision:"0193675166be1acb0da06df07c0aa14e"},{url:"font-awesome/less/path.less",revision:"baaf503b6821b49336f242445bcf26ca"},{url:"font-awesome/less/rotated-flipped.less",revision:"09a3b97189c3c320ac7a1649dd6bbad9"},{url:"font-awesome/less/spinning.less",revision:"c4142d6d9e832fa1f6683f19c9799c06"},{url:"font-awesome/less/stacked.less",revision:"518e2b2d263982d2caa1e6514b4b4eac"},{url:"font-awesome/less/variables.less",revision:"82549d7e42c5d301b61c7a694d3a9dbd"},{url:"font-awesome/scss/_bootstrap.scss",revision:"9ddebb7cddbb189f26cf833b6f11a3b0"},{url:"font-awesome/scss/_bordered-pulled.scss",revision:"e4f85472a1f6ed0e23a473b8e00ef071"},{url:"font-awesome/scss/_core.scss",revision:"460139739224bc62d9957837978c4e22"},{url:"font-awesome/scss/_extras.scss",revision:"7f6e60ca45dad6af520e7734ee884750"},{url:"font-awesome/scss/_fixed-width.scss",revision:"9277ab6964a434d499873687b00be906"},{url:"font-awesome/scss/_icons.scss",revision:"691e5398b8513cd310e847aae3112b27"},{url:"font-awesome/scss/_larger.scss",revision:"e95931566f6fc6ad5685c4fa9802e206"},{url:"font-awesome/scss/_list.scss",revision:"7107e80b053928271d5fcf422dc29490"},{url:"font-awesome/scss/_mixins.scss",revision:"d6c8e2fb73d626a27dc0c816a584432a"},{url:"font-awesome/scss/_path.scss",revision:"ac2a848f68cffed328272615bfca2500"},{url:"font-awesome/scss/_rotated-flipped.scss",revision:"9d894281a3b1c265abdd5abd11f9af5d"},{url:"font-awesome/scss/_spinning.scss",revision:"8e6c7988f40f123aedd96a668c56582a"},{url:"font-awesome/scss/_stacked.scss",revision:"5594237226aedfbca2fa1c7f4604c214"},{url:"font-awesome/scss/_variables.scss",revision:"9d4f23eacae6690aa140e51d42550e5b"},{url:"font-awesome/scss/font-awesome-ie7.scss",revision:"cd904e20c033aedc565c86e1956eed01"},{url:"font-awesome/scss/font-awesome.scss",revision:"4201fdd32cc7a7d2f6ed2706800faf75"},{url:"fonts/icons.dev.svg",revision:"4143a6cbb53e488ee357306805bb92a5"},{url:"fonts/icons.eot",revision:"b9c5cbed9bf5e79af98b6fecb9408ad5"},{url:"fonts/icons.svg",revision:"442a880c645e5da6e8c2e3b0f59c93c8"},{url:"fonts/icons.ttf",revision:"84e6367e8a1343d106300eaa692c532b"},{url:"fonts/icons.woff",revision:"f24eaa67582b0ee087a29b12ccdb53f9"},{url:"images/apple-touch-icon.png",revision:"2c36daae19e1a9ec0634d49a6e29cfe2"},{url:"images/cover-image.jpg",revision:"35d8d775966bf2713609faf91ade7662"},{url:"images/favicon-16x16.png",revision:"b1db5df25b070f795f52466a78915014"},{url:"images/favicon-32x32.png",revision:"65fb1508338cd22d47169104ab8c389b"},{url:"images/favicon.png",revision:"56ca413de5c802b0c67588a8848b6e90"},{url:"images/Makers_Magnet_Icon_color.png",revision:"4afd11293bb9a74bbad2c92da722f2f0"},{url:"images/Makers_Magnet_Icon_negative.png",revision:"ad71f8821788653527fa9192ef9c213e"},{url:"images/Makers_Magnet_Icon_positive.png",revision:"f73ff0899fc6b34de1be7975de8cc25d"},{url:"images/Makers_Magnet_Logo_color.png",revision:"a739e7fa1761d6e76659450492419aca"},{url:"images/Makers_Magnet_Logo_color.svg",revision:"c6d1224d43f6cf7c9b6000d4d31f8ca3"},{url:"images/Makers_Magnet_Logo_negative.png",revision:"bd6d5090480a2513504560a4dc5616d0"},{url:"images/Makers_Magnet_Logo_positive.png",revision:"bf3f1e0d67da4973496b5e13b1b638a9"},{url:"index.html",revision:"a741d8ee76f256cce630ccb1cf4d73a6"},{url:"js/icons.js",revision:"ac5b1738e2b46a71a0bf04041dc3f7f4"},{url:"js/index.js",revision:"2623afd93c28552a6348ebab20b25c1e"},{url:"service-worker.js",revision:"e43e1c0ede64b67f00615048d54ae1f6"},{url:"services/index.html",revision:"1e2b4d6bcdf416848a7d07be893d6776"},{url:"sitemap.xml",revision:"9b10ad6fc90673f01d5f0d1c80801a2b"}],{})}));
//# sourceMappingURL=service-worker.js.map
