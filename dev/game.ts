class Game {
    private static instance: Game
    view:any
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
    }

    showPlayView(e:KeyboardEvent):void {
        if(e.key == 'ArrowUp'){
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

