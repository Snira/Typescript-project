class Game {
    private static instance: Game
    score:number = 0
    view:View
    gameOver:boolean = false

    private constructor(){
        this.view = new StartView(this)
        
        this.gameLoop()
    }

    private gameLoop(): void
    {
        this.view.update()

        if (!this.gameOver) {
            requestAnimationFrame(() => this.gameLoop())
        }
        else{
            this.view = new GameOverView(this)
        }
    }

    showPlayView(e:Event|KeyboardEvent, view:StartView):void {
        if(e.code === "KeyR"){
        window.removeEventListener("keydown", view.callback)
        document.body.innerHTML = '<foodbutton></foodbutton><bar></bar><border></border><instructions></instructions>'
        this.setView()
        }
    }

    private setView(): void
    {
        if(this.view instanceof StartView){
            this.view = new PlayView()
        }
    }

    public static getInstance(): Game
    {
        return this.instance || (this.instance = new Game())
    }
}

window.addEventListener("load", () => {
    Game.getInstance()
})

