// https://app.pluralsight.com/library/courses/building-offline-web-apps-service-worker/table-of-contents

var version = 1;

self.addEventListener('install', function (event) {
	console.log('SW v%s installed at', version, new Date().toLocaleTimeString());
});

self.addEventListener('activate', function (event) {
	console.log('SW v%s activated at', version, new Date().toLocaleTimeString());
});

self.addEventListener('fetch', function(event) {

	if (!navigator.onLine) { // if offline
		event.respondWith(new Response('<h1> Hey you are offline :( </h1>', { 
			headers: { 
				'Content-Type': 'text/html'
			}
		}));
	} else {
		console.log(event.request.url);
		event.respondWith(fetch(event.request));
	}
});