import * as Util from "./utils.js";
import { randomVec } from "./utils.js";
import * as MovingObject from "./moving_object.js"


class Asteroid extends MovingObject {
    static COLOR = "#00FF00";
    static RADIUS = 25;
    constructor (obj) {
        let options = {}
        options.pos = obj.pos;
        options.color = Asteroid.COLOR;
        options.radius = Asteroid.RADIUS;
        options.vel = randomVec(25)
        super(options)
    }
    
}

export default Asteroid;