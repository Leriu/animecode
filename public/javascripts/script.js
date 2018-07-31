document.addEventListener('DOMContentLoaded', () => {

  var app = document.getElementById('typewrite');

  var typewriter = new Typewriter(app, {
      loop: true
  });
  
  typewriter.typeString('own mangas!')
      .pauseFor(2500)
      .deleteAll()
      .typeString('creativity!')
      .pauseFor(2500)
      .deleteAll()
      .typeString('talent!')
      .pauseFor(2500)
      .start();
  

}, false);
