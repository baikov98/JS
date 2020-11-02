
let can = document.getElementById('canvas');
let ctx = can.getContext("2d");
let score = 10;
can.width = 1000;
can.height = 600;
let cw = can.width;
let ch = can.height;
let posx = (cw / 2) - 60;
let posy = ch - 150;
let growscore = false;

let ric1 = new Image();

ric1.src = 'JS/ricardo11.png';
let alex1 = new Image(),
    alex2 = new Image(),
    alex3 = new Image(),
    alex4 = new Image(),
    alex5 = new Image(),
    alex6 = new Image(),
    alex7 = new Image(),
    alex8 = new Image(),
    alex9 = new Image(),
    alex10 = new Image();

alex1.src = 'JS/alex (1).png';
alex2.src = 'JS/alex (2).png';
alex3.src = 'JS/alex (3).png';
alex4.src = 'JS/alex (4).png';
alex5.src = 'JS/alex (5).png';
alex6.src = 'JS/alex (6).png';
alex7.src = 'JS/alex (7).png';
alex8.src = 'JS/alex (8).png';
alex9.src = 'JS/alex (9).png';
alex10.src = 'JS/alex (10).png';

let alex = [alex1, alex2, alex3, alex4, alex5, alex6, alex7, alex8, alex9, alex10 ];
var newpipe1 = new Audio();
var newpipe2 = new Audio();
var newpipe3 = new Audio();
var newpipe4 = new Audio();
var newpipe5 = new Audio();
var newpipe6 = new Audio();
var newpipe7 = new Audio();
var newpipe8 = new Audio();
var newpipe9 = new Audio();
var newpipe10 = new Audio();
var newpipe11 = new Audio();
var newpipe12 = new Audio();
var newpipe13 = new Audio();
var newpipe14 = new Audio();

newpipe1.src = "sound/pipe (1).mp3";
newpipe2.src = "sound/pipe (2).mp3";
newpipe3.src = "sound/pipe (3).mp3";
newpipe4.src = "sound/pipe (5).mp3";
newpipe6.src = "sound/pipe (6).mp3";
newpipe7.src = "sound/pipe (7).mp3";
newpipe8.src = "sound/pipe (8).mp3";
newpipe9.src = "sound/pipe (9).mp3";
newpipe10.src = "sound/pipe (10).mp3";
newpipe11.src = "sound/pipe (11).mp3";
newpipe12.src = "sound/pipe (12).mp3";
newpipe13.src = "sound/pipe (13).mp3";
newpipe14.src = "sound/pipe (14).mp3";


let newpipe = [newpipe1, newpipe2, newpipe3, newpipe4, newpipe5, newpipe6, newpipe7, newpipe8, newpipe9, newpipe10, newpipe11, newpipe12, newpipe13, newpipe14];


var pipe = [];

pipe[0] = {
 x : 0,
 y : 0,
 img : alex[0]
}

//document.addEventListener("keydown", move);
function move() {
    //sprite.ctx.clearRect(posx, posy, sprite.width / sprite.numberOfFrames, sprite.height);
    ric1.src = 'JS/ricardo12.png';
    growscore = false;
    if (posx > -20) {posx -= 20;}
    
    
}

function move2() {
   // sprite.ctx.clearRect(posx, posy, sprite.width / sprite.numberOfFrames, sprite.height);
    ric1.src = 'JS/ricardo11.png';
    growscore = false;
    if (posx < (cw-110)) {posx += 20;}
}

function move3() {
    sprite.ctx.clearRect(posx, posy, sprite.width / sprite.numberOfFrames, sprite.height);
    ric1.src = 'JS/ricardo3.png';
    growscore = true;
}

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyA') {
      move();
    }
    if (event.code == 'KeyD') {
        move2();
      }
      if (event.code == 'KeyS') {
        move3();
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
        
        //ctx.drawImage(alex1, 0, 0)
        for(var i = 0; i < pipe.length; i++) {
            if (pipe[i] != undefined) {
            ctx.clearRect(pipe[i].x, pipe[i].y, 100, 100);
            pipe[i].y += 2;
            ctx.drawImage(pipe[i].img, pipe[i].x, pipe[i].y);
           //создание врагов
            if(pipe[i].y == 150) {
            newpipe[rnd(0, 13)].play();
            pipe.push({
            x : rnd(0, 900),
            y : -80,
            img : alex[rnd(0,9)]
            })
            ;
            }
            //проверка столкновения
            if ((posy < (pipe[i].y + 100)) && (((posx < pipe[i].x) && ((posx +110) > pipe[i].x)) || ((posx > pipe[i].x) && ((pipe[i].x+100)>posx))) && (pipe[i].y < 600))
             {location.reload();}
            // удаление врагов
            if ((pipe[i].y) > 599) {pipe[i] = undefined}}
        }
        if (growscore) {score += 1};
        ctx.clearRect(0, 0, cw, 20);
        ctx.fillStyle = "#fff";
        ctx.font = "16px Verdana";
        ctx.fillText("Анаболизм: " + score, 5, 5);
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
