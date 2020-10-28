
let can = document.getElementById('canvas');
let ctx = can.getContext("2d");


let ric1 = new Image();
ric1.src = 'JS/ricardo.png';

class Sprite {
    constructor(options) {
        this.ctx = options.ctx;
        this.image = options.image;
        this.width = options.width;
        this.height = options.height;
        this.render();
        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = options.ticksPerFrame || 0;
        this.update()
        this.numberOfFrames = options.numberOfFrames || 1;
        update() {
            this.tickCount++;
            if (this.tickCount > this.ticksPerFrame) {
                
            }
        }
    }
}

let sprite = new Sprite ({
    ctx: CanvasGradient.getContext('2d'),
    image: ric1,
    width: 110,
    height: 60,
    numberOfFrames: 10,
    ticksPerFrame: 4,
})


