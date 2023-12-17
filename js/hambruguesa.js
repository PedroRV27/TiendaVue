const iconoMenu = document.querySelector('#icno-menu'),
menu = document.querySelector('#menu'),
overlay = document.querySelector('#overlay');

iconoMenu.addEventListener('click', () => {
menu.classList.toggle('active');
overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';

iconoMenu.classList.toggle('blanco');
});

overlay.addEventListener('click', () => {
menu.classList.remove('active');
overlay.style.display = 'none';
iconoMenu.classList.remove('blanco');
});


      window.addEventListener('scroll', function() {
        var header = document.querySelector('header');
        var scrollPosition = window.scrollY;
  
        if (scrollPosition > 0) {
          header.classList.add('fixed');
        } else {
          header.classList.remove('fixed');
        }
      });
