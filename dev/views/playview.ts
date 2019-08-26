class PlayView implements View{
    gameObjects:GameObject[] = []
    private breakfast:Breakfast;

    constructor() {
        this.gameObjects.push(new Gandalf(), new Gandalf())
        this.breakfast = new Breakfast()
        this.gameObjects.push(new Ork(), new Ork())
        
    }

    public update(): void {
        for (let go of this.gameObjects){
            this.breakfast.update()
            go.update()

            // if(Util.checkCollision(this.gameObjects[0], this.gameObjects[1])){
            //     Game.getInstance().gameOver = true;
            //     go.remove()
            // }
        }
    }
}