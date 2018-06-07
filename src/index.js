//importing libs that extend another ones
import PixiExtra from "./Lib/PixiExtra";

import Facade from "Facade";
new Facade();

// Меню

let html = document.documentElement;

document.querySelector('.open-menu').onclick = function(){
  html.classList.add('active');
};

document.querySelector('.close-menu').onclick = function(){
  html.classList.remove('active'); 
};

html.onclick = function(event){
  console.log('click', event.target.tagName);
  let startPage = document.querySelector('.start-page');
  
  if(startPage.classList.value.indexOf('visible')) {
    startPage.classList.remove('visible');
  }
  if (event.target.tagName === 'CANVAS'){
    html.classList.remove('active');
  }
};


// Модальные окна

var dialog = document.querySelector('.save-score');
var showDialogButton = document.querySelector('#show-dialog');
// if (! dialog.showModal) {
//   dialogPolyfill.registerDialog(dialog);
// }
showDialogButton.addEventListener('click', function() {
  dialog.showModal();
});
dialog.querySelector('.close').addEventListener('click', function() {
  dialog.close();
});