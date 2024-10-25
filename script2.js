// initialisation du score si il n'existe pas deja
if (localStorage.getItem('score') === null) {
    localStorage.setItem('score', 0);
  }
   
  //reset du score si on revient sur index
  if (window.location.pathname.includes("index4.html")) {
    localStorage.setItem('score', 0);
  }
   
  // sauve le score, pour que si on change de page on perd pas tout nos points
  function adjustScore(amount) {
    let score = parseInt(localStorage.getItem('score')) || 0;
    score += amount;
    localStorage.setItem('score', score);
  }
   
  // detection du click des boutons
  document.addEventListener("DOMContentLoaded", function () {
    // For index.html
    document.querySelectorAll('.triggerbon').forEach(triggerbon=>
      triggerbon.addEventListener('click', () => adjustScore(1))
    );
   
    document.querySelectorAll('.triggerfaux').forEach(triggerfaux=>
    triggerfaux.addEventListener('click', () => adjustScore(0)) // or change to adjustScore(-1) to subtract points
    );
   
    // affiche le resultat final dans un div id="Score"
    const scoreDisplay = document.getElementById('Score');
    if (scoreDisplay) {
      scoreDisplay.textContent = localStorage.getItem('score') || 0;
    }
  });