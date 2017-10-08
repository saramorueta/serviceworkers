// https://app.pluralsight.com/library/courses/building-offline-web-apps-service-worker/table-of-contents

if ('serviceWorker' in navigator) {
	navigator.serviceWorker
	.register('sw.js')
	.then(function(response) {
		console.log('SW Registered', response);
	})
	.catch(function(error) {
		console.log('There is a problem', error);
	});
}