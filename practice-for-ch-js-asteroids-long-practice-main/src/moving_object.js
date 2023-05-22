class MovingObject {
   constructor (obj) {
    this.pos = obj.pos,
    this.vel = obj.vel,
    this.radius = obj.radius,
    this.color = obj.color;
   }

   draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, true);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    move() {
        console.log(this.pos, "first pos")
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
        console.log(this.pos, "second pos")
    }
   


}

export default MovingObject;