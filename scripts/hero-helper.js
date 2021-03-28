window.addEventListener("load", function(){
    var heroes = document.getElementsByClassName('hero');
    for (let i = 0; i < heroes.length; i++) {
        const hero = heroes[i];
        if(hero.hasAttribute('data-hero-background')){
            hero.style.backgroundImage = "url(" + hero.dataset.heroBackground + ")";
        }
    }
});

