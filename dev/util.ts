class Util {
    // /**
    //  * deze formule rekent een constante snelheid uit in de richting van het doel
    //  */
    // public static setSpeed(go:GameObject, xdist:number, ydist:number):void {
    //     let distance:number = Math.sqrt(xdist * xdist + ydist * ydist);
    //     go.xspeed = xdist/distance;
    //     go.yspeed = ydist/distance;

    //     go.xspeed *= go.speedmultiplier;
    //     go.yspeed *= go.speedmultiplier;
    // }

    public static checkCollision(go1:GameObject, go2:GameObject):boolean {
        return (go1.x < go2.x + go2.width &&
                go1.x + go1.width > go2.x &&
                go1.y < go2.y + go2.height &&
                go1.height + go1.y > go2.y)
    }
}