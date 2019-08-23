class Game {
    private static instance: Game

    objects:GameObject[] = []

    private constructor(){
        this.objects.push(new Car(0,0,0.5), new Car(200,200,0.5))
        this.gameLoop()
    }

    private gameLoop(): void
    {
        for(let o of this.objects){
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

