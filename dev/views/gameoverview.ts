class GameOverView implements View{

    constructor(game:Game) {
        console.log('gameover', game)
        document.body.innerHTML = 'Gameover: Eindscore =' + game.score
    }

    public update(): void {
        
    }
}