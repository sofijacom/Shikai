(()=>{"use strict";function n(){return!0===window.__is_debug?"./assets/media/wallpapers/":greeter_config.branding.background_images_dir}function e(n,e){if(!0===window.__is_debug){for(var i=["Wallpaper21.png"],t=1;t<21;t++)i.push("Wallpaper"+(t>9?t:"0"+t)+".jpg");return i.map((function(e){return n+e}))}theme_utils.dirlist(n,!0,e)}function i(){window.__is_debug||(window.lightdm=lightdm);var i=function(n){document.body.onclick=function(e){e.target==e.currentTarget&&(document.body.style.backgroundImage="url('"+n[Math.floor(Math.random()*n.length)]+"')")},document.body.click()};window.__is_debug?i(e(n())):e(n(),i)}window.onload=function(){window.__is_debug?i():void 0===lightdm?document.addEventListener("GreeterReady",(function(){i()})):i()}})();