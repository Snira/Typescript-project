class StartView implements View {

    constructor(game:Game)
    {
        document.body.innerHTML = 'Klik R om het spel te starten'
        window.addEventListener("keydown", (e:KeyboardEvent) => game.showPlayView(e))
    }

    public update():void{

    }
    
    
}