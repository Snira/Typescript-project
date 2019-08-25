/// <reference path="view.ts" />

class PlayView extends View{
    gameObjects:GameObject[] = []

    constructor() {
        super()
        Game.getInstance()
        this.gameObjects.push(new Car(), new Car())
        
    }

    public update(): void {
        for (let go of this.gameObjects){
            go.update()

            if(Util.checkCollision(this.gameObjects[0], this.gameObjects[1])){
                go.remove()
            }
        }
    }
}