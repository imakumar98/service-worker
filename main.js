console.log("Hello this is main file");

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/serviceWorker.js',{scope:'/'});
}else{
    console.log("Service worker is not available");
}