
let can = document.getElementById('canvas');
let ctx = can.getContext("2d");
can.width = 1000;
can.height = 600;
let cw = can.width;
let ch = can.height;
let posx = (cw / 2) - 60;
let posy = ch - 150;


let ric1 = new Image();
let alex1 = new Image();
alex1.src = 'JS/alex (1).png';
ric1.src = 'JS/ricardo11.png';

//document.addEventListener("keydown", move);
function move() {
    sprite.ctx.clearRect(posx, posy, sprite.width / sprite.numberOfFrames, sprite.height);
    ric1.src = 'JS/ricardo12.png';
    if (posx > -20) {posx -= 20;}
    
}

function move2() {
    sprite.ctx.clearRect(posx, posy, sprite.width / sprite.numberOfFrames, sprite.height);
    ric1.src = 'JS/ricardo11.png';
    if (posx < (cw-110)) {posx += 20;}
}

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyA') {
      move();
    }
    if (event.code == 'KeyD') {
        move2();
      }
  });

class Sprite {
    constructor(options) {
        this.ctx = options.ctx;
        this.image = options.image;
        this.width = options.width;
        this.height = options.height;
        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = options.ticksPerFrame || 0;
        this.numberOfFrames = options.numberOfFrames || 1;
        this.start();
        
    }
    render() {
        ctx.drawImage(alex1, 0, 0)
        this.ctx.drawImage(
            this.image,
            this.frameIndex * this.width / this.numberOfFrames,
            0,
            this.width / this.numberOfFrames,
            this.height,
            posx,
            posy,
            this.width / this.numberOfFrames,
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

class Enemy {
    constructor(options){
        this.ctx = options.ctx;
        this.image = options.image;
        this.width = options.width;
        this.height = options.height;
    }
}
let sprite = new Sprite ({
    ctx: can.getContext('2d'),
    image: ric1,
    width: 1100,
    height: 150,
    numberOfFrames: 10,
    ticksPerFrame: 4,
})


let requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;
window.requestAnimationFrame = requestAnimationFrame;



function rnd(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
