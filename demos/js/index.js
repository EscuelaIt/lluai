import 'lluai/styles/theme.css';
import '../style.css';

import 'lluai/components/button/button.js';
import 'lluai/components/input/input.js';
import 'lluai/components/card/card.js';

import 'lluai-icons/components/ambulance.js';
import 'lluai-icons/components/house.js';
import 'lluai-icons/components/youtube.js';
import 'lluai-icons/components/vegan.js';
import 'lluai-icons/components/school.js';
import 'lluai-icons/components/library-big.js';
import 'lluai-icons/lluai-icon.js';

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('botonsimple').addEventListener('click', function() {
    console.log('clic en botonsimple');
  });
  document.getElementById('botondesactivado').addEventListener('click', function() {
    console.log('clic en botondesactivado');
  });

  document.getElementById("inputvalue").addEventListener('click', function() {
    document.getElementById("inputvalue").reset();
  })

  document.getElementById('buscador').addEventListener('lluai-input-search-click', function(){
    alert('Es una búsqueda!!!')
  })
});