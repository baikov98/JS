
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
        this.update();
        this.numberOfFrames = options.numberOfFrames || 1;
        this.start();
    }
    render() {
        this.ctx.drawImage(
            this.image,
            0,
            0,
            this.width,
            this.height,
            0,
            0,
            this.width,
            this.height
        )
    }
    update() {
        this.tickCount++;
        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;
            if (this.frameIndex < this.numberOfFrames - 1) {
                this.frameIndex++;
            }
            else {
                this.frameIndex = 0;
            }
        }
    };
    start () {
        let loop = () => {
            this.update();
            this.render();
            window.requestAnimationFrame(loop);
        };
        window.requestAnimationFrame(loop);
    }
}

let sprite = new Sprite ({
    ctx: can.getContext('2d'),
    image: ric1,
    width: 110,
    height: 60,
    numberOfFrames: 10,
    ticksPerFrame: 4,
})


let requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;
window.requestAnimationFrame = requestAnimationFrame;
