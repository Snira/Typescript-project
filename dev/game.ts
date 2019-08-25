class Game {
    private static instance: Game

    gameObjects:GameObject[] = []

    private constructor(){
        this.gameObjects.push(new Car(), new Car())
        this.gameLoop()
    }

    private gameLoop(): void
    {
        for(let o of this.gameObjects){
            o.update()
        } 

        requestAnimationFrame(() => this.gameLoop())
    }

    public static getInstance(): Game
    {
        return this.instance || (this.instance = new Game())
    }
}

window.addEventListener("load", () => {
    Game.getInstance()
})

