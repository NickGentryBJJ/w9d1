console.log("Webpack is working!")

import MovingObject from "./moving_object.js";
import Asteroid from "./asteroid.js";
window.MovingObject = MovingObject;

const canvasEl = document.getElementsByTagName("canvas")[0];
canvasEl.height = window.innerHeight;
canvasEl.width = window.innerWidth;
let ctx = canvasEl.getContext("2d");

const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
  });
mo.draw(ctx);
mo.move(mo);
window.mo = mo; 
window.ctx = ctx;
const asteroid = new Asteroid({ pos: [30, 30] });

asteroid.draw(ctx);