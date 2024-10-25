document.addEventListener("DOMContentLoaded", function () {
    const triggerElementfaux = document.querySelectorAll('.triggerfaux');
    const mediaElementfaux = document.querySelector('#mediafaux');
 
    triggerElementfaux.forEach(triggerfaux => {
      triggerfaux.addEventListener('click', function () {
      if (mediaElementfaux.paused) {
        mediaElementfaux.play();
      } else {
        mediaElementfaux.pause();
      }
      //optionel, desactive le detecteur après usage
      //triggerElement.classList.remove('play-trigger');
    });
   });
 });

 document.addEventListener("DOMContentLoaded", function () {
  const triggerElementbon = document.querySelectorAll('.triggerbon');
  const mediaElementbon = document.querySelector('#mediabon');

  triggerElementbon.forEach(triggerbon => {
    triggerbon.addEventListener('click', function () {
    if (mediaElementbon.paused) {
      mediaElementbon.play();
    } else {
      mediaElementbon.pause();
    }
    //optionel, desactive le detecteur après usage
    //triggerElement.classList.remove('play-trigger');
  });
 });
});