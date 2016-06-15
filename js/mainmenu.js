(function(){
  function onMenuClick(event){
    // event.preventDefault();

    var links = document.querySelectorAll('.main-nav__item--active');

    for (var i=0; i < links.length; i++){
      links[i].className = links[i].className.replace(' main-nav__item--active', '');
    }

    event.target.parentElement.className += ' main-nav__item--active';
  }

  var el = document.getElementById('main-menu');

  el.addEventListener('click', onMenuClick, false);
})();
