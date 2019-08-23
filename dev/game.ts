class Game {
    private static instance: Game;

    private constructor(){
        let car = new Car();
        this.gameLoop(car)
    }

    private gameLoop(car:Car): void
    {
        car.update()
        requestAnimationFrame(() => this.gameLoop(car))
    }

    public static getInstance(): Game
    {
        console.log('init')
        return this.instance || (this.instance = new Game())
    }
}

window.addEventListener("load", () => {
    Game.getInstance()
})

