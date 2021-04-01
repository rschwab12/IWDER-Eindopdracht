window.addEventListener("load", function(){
    var actors = document.getElementsByClassName('actor');
    for (let i = 0; i < actors.length; i++) {
        const actor = actors[i];
        let url = "/";
        if(actor.dataset.actor == "gabriel-macht"){
            url = "cast-gabriel-macht.html";
        }

        switch (actor.dataset.actor) {
            case 'gabriel-macht':
                url = "cast-gabriel-macht.html";
                break;
            case 'patrick-j-adams':
                url = "cast-patrick-j-adams.html";
                break;
            case 'sarah-rafferty':
                url = "cast-sarah-rafferty.html";
                break;
            case 'gina-torres':
                url = "cast-gina-torres.html";
                break;                
            case 'rick-hoffman':
                url = "cast-rick-hoffman.html";
                break;    
            case 'meghan-markle':
                url = "cast-meghan-markle.html";
                break;   
            default:
                break;
        }

        actor.addEventListener("click", function() {
            window.open(url, '_self');
        });
    }
});
