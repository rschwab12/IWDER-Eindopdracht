window.addEventListener("load", function(){
    const toggleNavButton = document.getElementById("menu-toggle");
    toggleNavButton.addEventListener("click", function() {
        const navmenu = document.getElementById("nav-menu");
        navmenu.classList.toggle('is-hidden-mobile');
    });
});