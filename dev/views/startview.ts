class StartView implements View {
    public callback:EventListener 
    
    constructor(game:Game)
    {
        document.body.innerHTML = 'Klik R om het spel te starten'
        this.callback = (e:Event) => game.showPlayView(e, this)
        window.addEventListener("keydown", this.callback)
    }

    public update():void{

    }
    
    
}