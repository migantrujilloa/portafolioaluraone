//Haz tú validación en javascript acá



/**Banner - Presentación */

/**Linea de Teimpo Experiencia */


let leerMas_btns = document.querySelectorAll('.leerMas_btn');

leerMas_btns.forEach(function(leerMas_btn) {
  leerMas_btn.addEventListener('click', toggleText);
});

function toggleText(event) {
  let hideText = document.getElementById(`hideText_${event.target.id.split('_')[2]}`);
  hideText.classList.toggle('showText');
  
  if (hideText.classList.contains('showText')) {
    event.target.innerHTML = 'Leer menos';
  } else {
    event.target.innerHTML = 'Leer más';
  }
}