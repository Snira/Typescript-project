class Game {
    private static instance: Game
    gameOver:boolean = false;
    gameObjects:GameObject[] = []

    private constructor(){
        this.gameObjects.push(new Car(), new Car())
        this.gameLoop()
    }

    private gameLoop(): void
    {
        for (let go of this.gameObjects){
            go.update()
            
            if(Util.checkCollision(this.gameObjects[0], this.gameObjects[1])){
                go.remove()
            }
        }

        if (!this.gameOver) {
            requestAnimationFrame(() => this.gameLoop())
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

