/************************************
   == Copyright 2021 WebCodeTeam ==
*************************************/
window.addEventListener("DOMContentLoaded", showpopup, false);
function showpopup() {
    if (!localStorage.getItem('cookieaccept')) {

      var cookiepopupDiv = document.createElement('div');
      cookiepopupDiv.innerHTML = '<div class="notificationpopup text-center">' +
      'Este sitio utiliza cookies para el correcto funcionamiento del mismo, si continuas navegando aceptas su uso.' +
      '<br>'+
      '<a href="/privacidad">Declaracion de Privacidad</a>'+
      '<br>'+
      '<button href="#" class="accept btn btn-primary">Aceptar</button>'+
      '</div>';
      document.body.appendChild(cookiepopupDiv);
        document.querySelector('.notificationpopup .accept').onclick = function(e) {
            e.preventDefault();
            document.querySelector('.notificationpopup').style.display = 'none';
            localStorage.setItem('cookieaccept', true);
        };
    }
}