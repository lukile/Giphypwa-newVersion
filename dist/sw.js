"use strict";
var precacheConfig = [
    ["index.html", "dbec3e2185e1bca46c2ed84aa1d068ec"],
    ["service-worker.js", "cfaeb0ba3e958ab35a94211dc02043e0"],
    ["static/css/app.css", "c3deca1d90c083e42dcd88bcb33c1360"],
    ["static/js/app.js", "6d9d85d910e2e05b67c26d088b8b70e4"],
    ["static/js/manifest.js", "777a0cfb8185c0a4aca50849f48b90c4"],
    ["static/js/vendor.js", "c2ccacfa6b9eaad1e7ea861a0cd49dff"],
    ["static/script/upup.min.js", "f44715d7a38ebf8f037c56383b08e5ce"],
    ["static/img/logo_pwa.46ea87c.png"],
    ["sw.js", "ab46ddf991e2dd3ff5f2e1995c525955"]
  ],
  cacheName = "sw-precache-v3-testpwavue-" + (self.registration ? self.registration.scope : ""),
  ignoreUrlParametersMatching = [/^utm_/],
  addDirectoryIndex = function(e, t) {
    var n = new URL(e);
    return "/" === n.pathname.slice(-1) && (n.pathname += t), n.toString()
  },
  cleanResponse = function(e) {
    return e.redirected ? ("body" in e ? Promise.resolve(e.body) : e.blob()).then(function(t) {
      return new Response(t, {
        headers: e.headers,
        status: e.status,
        statusText: e.statusText
      })
    }) : Promise.resolve(e)
  },
  createCacheKey = function(e, t, n, r) {
    var a = new URL(e);
    return r && a.pathname.match(r) || (a.search += (a.search ? "&" : "") + encodeURIComponent(t) + "=" + encodeURIComponent(n)), a.toString()
  },
  isPathWhitelisted = function(e, t) {
    if (0 === e.length) return !0;
    var n = new URL(t).pathname;
    return e.some(function(e) {
      return n.match(e)
    })
  },
  stripIgnoredUrlParameters = function(e, t) {
    var n = new URL(e);
    return n.hash = "", n.search = n.search.slice(1).split("&").map(function(e) {
      return e.split("=")
    }).filter(function(e) {
      return t.every(function(t) {
        return !t.test(e[0])
      })
    }).map(function(e) {
      return e.join("=")
    }).join("&"), n.toString()
  },
  hashParamName = "_sw-precache",
  urlsToCacheKeys = new Map(precacheConfig.map(function(e) {
    var t = e[0],
      n = e[1],
      r = new URL(t, self.location),
      a = createCacheKey(r, hashParamName, n, !1);
    return [r.toString(), a]
  }));

function setOfCachedUrls(e) {
  return e.keys().then(function(e) {
    return e.map(function(e) {
      return e.url
    })
  }).then(function(e) {
    return new Set(e)
  })
}
self.addEventListener("install", function(e) {
  e.waitUntil(caches.open(cacheName).then(function(e) {
    return setOfCachedUrls(e).then(function(t) {
      return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n) {
        if (!t.has(n)) {
          var r = new Request(n, {
            credentials: "same-origin"
          });
          return fetch(r).then(function(t) {
            if (!t.ok) throw new Error("Request for " + n + " returned a response with status " + t.status);
            return cleanResponse(t).then(function(t) {
              return e.put(n, t)
            })
          })
        }
      }))
    })
  }).then(function() {
    return self.skipWaiting()
  }))
}), self.addEventListener("activate", function(e) {
  var t = new Set(urlsToCacheKeys.values());
  e.waitUntil(caches.open(cacheName).then(function(e) {
    return e.keys().then(function(n) {
      return Promise.all(n.map(function(n) {
        if (!t.has(n.url)) return e.delete(n)
      }))
    })
  }).then(function() {
    return self.clients.claim()
  }))
}), self.addEventListener("fetch", function(e) {
  if ("GET" === e.request.method) {
    var t, n = stripIgnoredUrlParameters(e.request.url, ignoreUrlParametersMatching);
    (t = urlsToCacheKeys.has(n)) || (n = addDirectoryIndex(n, "index.html"), t = urlsToCacheKeys.has(n));
    0, t && e.respondWith(caches.open(cacheName).then(function(e) {
      return e.match(urlsToCacheKeys.get(n)).then(function(e) {
        if (e) return e;
        throw Error("The cached response that was expected is missing.")
      })
    }).catch(function(t) {
      return console.warn('Couldn\'t serve response for "%s" from cache: %O', e.request.url, t), fetch(e.request)
    }))
  }
});
