class StartView implements View {
    public callback:EventListener 
    
    constructor(game:Game)
    {
        document.body.innerHTML =
        '<p> Klik R om het spel te starten </p>'
	    this.callback = (e:Event) => game.showPlayView(e, this)
        window.addEventListener("keydown", this.callback)
    }

    public update():void{

    }
    
    
}