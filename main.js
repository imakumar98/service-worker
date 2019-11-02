if('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('../serviceWorker.js')
    .then(function() {
      console.log("Service Worker registered successfully");
    })
    .catch(function() {
      console.log("Service worker registration failed")
    });
  }



  let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  deferredPrompt.prompt();
});