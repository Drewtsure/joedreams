(function(){
  function onTabClick(event){
    event.preventDefault();

    var tabs = document.querySelectorAll('.about-band__tabs-nav--active');
    var blocks = document.querySelectorAll('.about-band__block--active');

    for (var i=0; i < tabs.length; i++){
      tabs[i].className = tabs[i].className.replace(' about-band__tabs-nav--active', '');
    }

    for (var i=0; i < blocks.length; i++){
      blocks[i].className = blocks[i].className.replace(' about-band__block--active', '');
    }

    event.target.parentElement.className += ' about-band__tabs-nav--active';
    document.getElementById(event.target.href.split('#')[1]).className += ' about-band__block--active';
  }

  var el = document.getElementById('tabs-control');

  el.addEventListener('click', onTabClick, false);
})();
