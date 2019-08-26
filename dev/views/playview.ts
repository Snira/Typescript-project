class PlayView implements View{
    gameObjects:GameObject[] = []

    constructor() {
        this.gameObjects.push(new Car(), new Car())
        
    }

    public update(): void {
        for (let go of this.gameObjects){
            go.update()

            if(Util.checkCollision(this.gameObjects[0], this.gameObjects[1])){
                Game.getInstance().gameOver = true;
                go.remove()
            }
        }
    }
}