class StartView extends View {
    game:Game
    constructor(game:Game)
    {
        super()

        window.addEventListener("keydown", (e:KeyboardEvent) => game.showPlayView(e))

    }

    public update():void{

    }
    
    
}