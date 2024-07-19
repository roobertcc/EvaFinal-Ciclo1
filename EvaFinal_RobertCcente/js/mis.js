document.addEventListener('DOMContentLoaded', function() {
    let menuheader = document.querySelector('#menuheader');
    let buttonmenu = document.querySelector('#buttonmenu');
    let closeheader = document.querySelector('#closeheader');

    buttonmenu.addEventListener('click', function() {
        setTimeout(function() {
            menuheader.classList.toggle('menu-header-toggle');
        }, 50); 
            menuheader.style.display = 'flex';
    });


    closeheader.addEventListener('click', function() {
        menuheader.classList.remove('menu-header-toggle');
        menuheader.style.display = 'none';
    });
});
