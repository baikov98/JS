let can = document.getElementById('canvas');
let ctx = can.getContext("2d");
let score = 0;
can.width = 1000;
can.height = 600;
let flexon = false;
let cw = can.width;
let ch = can.height;
let posx = (cw / 2) - 60;
let posy = ch - 150;
let growscore = false;
let ran;
let pants = new Image();
pants.src = "js/pants.png"
let bg = new Image();
bg.src = "js/bg.png"

let ric1 = new Image();

ric1.src = 'js/ricardo11.png';
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

alex1.src = 'js/alex(1).png';
alex2.src = 'js/alex(2).png';
alex3.src = 'js/alex(3).png';
alex4.src = 'js/alex(4).png';
alex5.src = 'js/alex(5).png';
alex6.src = 'js/alex(6).png';
alex7.src = 'js/alex(7).png';
alex8.src = 'js/alex(8).png';
alex9.src = 'js/alex(9).png';
alex10.src = 'js/alex(10).png';

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

newpipe1.src = "sound/pipe(1).mp3";
newpipe2.src = "sound/pipe(2).mp3";
newpipe3.src = "sound/pipe(3).mp3";
newpipe4.src = "sound/pipe(5).mp3";
newpipe6.src = "sound/pipe(6).mp3";
newpipe7.src = "sound/pipe(7).mp3";
newpipe8.src = "sound/pipe(8).mp3";
newpipe9.src = "sound/pipe(9).mp3";
newpipe10.src = "sound/pipe(10).mp3";
newpipe11.src = "sound/pipe(11).mp3";
newpipe12.src = "sound/pipe(12).mp3";
newpipe13.src = "sound/pipe(13).mp3";
newpipe14.src = "sound/pipe(14).mp3";


let newpipe = [newpipe1, newpipe2, newpipe3, newpipe4, newpipe5, 
    newpipe6, newpipe7, newpipe8, newpipe9, newpipe10, newpipe11, newpipe12, newpipe13, newpipe14]

let dead1 = new Audio();
let dead2 = new Audio();
let dead3 = new Audio();
let dead4 = new Audio();
dead1.src = "sound/dead(1).mp3";
dead2.src = "sound/dead(2).mp3";
dead3.src = "sound/dead(3).mp3";
dead4.src = "sound/dead(4).mp3";
let dead = [dead1, dead2, dead3, dead4];

let pushup1 = new Audio();
let pushup2 = new Audio();
let pushup3 = new Audio();
let pushup4 = new Audio();
let pushup5 = new Audio();
let pushup6 = new Audio();
let pushup7 = new Audio();
let pushup8 = new Audio();
let pushup9 = new Audio();
pushup1.src = "sound/pushup(1).mp3";
pushup2.src = "sound/pushup(2).mp3";
pushup3.src = "sound/pushup(3).mp3";
pushup4.src = "sound/pushup(4).mp3";
pushup5.src = "sound/pushup(5).mp3";
pushup6.src = "sound/pushup(6).mp3";
pushup7.src = "sound/pushup(7).mp3";
pushup8.src = "sound/pushup(8).mp3";
pushup9.src = "sound/pushup(9).mp3";
let pushup = [pushup1, pushup2, pushup3, pushup4, pushup5, pushup6, pushup7, pushup8, pushup9];

let flex1 = new Audio();
let flex2 = new Audio();
let flex3 = new Audio();
let flex4 = new Audio();
let flex5 = new Audio();
let flex6 = new Audio();
let flex7 = new Audio();
let flex8 = new Audio();
let flex9 = new Audio();
let flex10 = new Audio();
flex1.src = "sound/flex(1).mp3";
flex2.src = "sound/flex(2).mp3";
flex3.src = "sound/flex(3).mp3";
flex4.src = "sound/flex(4).mp3";
flex5.src = "sound/flex(5).mp3";
flex6.src = "sound/flex(6).mp3";
flex7.src = "sound/flex(7).mp3";
flex8.src = "sound/flex(8).mp3";
flex9.src = "sound/flex(9).mp3";
flex10.src = "sound/flex(10).mp3";
let flex = [flex1, flex2, flex3, flex4, flex5, flex6, flex7, flex8, flex9, flex10]

var pipe = [];

pipe[0] = {
 x : 0,
 y : 0,
 img : alex[0]
}

var pant = [];

pant[0] = {
 x : -100,
 y : posy,
 img : pants
}

function move() {
    growscore = false;
    flexon = false;
    ric1.src = 'js/ricardo12.png';
    if (posx > -20) {posx -= 20;}
    
}

function move2() {
    growscore = false;
    flexon = false;
    ric1.src = 'js/ricardo11.png';
    if (posx < (cw-110)) {posx += 20;}
}

function move3() {
    growscore = true;
    flexon = false;
    pushup[rnd(0,8)].play();
    ric1.src = 'js/ricardo3.png';
    
}
function move4() {
    if ((!growscore) && (score > 100)){
    pant.push({
        x : posx,
        y : posy,
        img : pants
        });
    score -= 100;}
}
function move5() {
    if (score >= 100) {
    growscore = false;
    flexon = true;
    score -= 100;
    flex[rnd(0,9)].play();
    ric1.src = 'js/ricardodance.png';}
    
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
      if (event.code == 'Space') {
        move4();
    }
    if (event.code == 'KeyW') {
        move5();
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
        
        ctx.drawImage(bg, 0, 0)
        for(var i = 0; i < pipe.length; i++) {
            if (pipe[i] != undefined) {
            ctx.clearRect(pipe[i].x, pipe[i].y, 100, 100);
            pipe[i].y += 2;
            if ((pipe[i].y > -100) && (pipe[i].y < 600)) {
            ctx.drawImage(pipe[i].img, pipe[i].x, pipe[i].y);}
           //создание врагов
            if (pipe[i].y == 60) {
            ran = (posx+50) + (rnd(-250, 250));
            if (ran>900){ran=880};
            if (ran<0){ran=0};
            newpipe[rnd(0, 11)].play();
            pipe.push({
            x : ran,
            y : -50,
            img : alex[rnd(0,9)]
            })
            ;
            }
            //проверка столкновения
            if ((!flexon) && (posy < (pipe[i].y + 100)) && (((posx < pipe[i].x) && ((posx +110) > pipe[i].x)) || ((posx > pipe[i].x) && ((pipe[i].x+100)>posx))) && (pipe[i].y < 600))
             {  dead[rnd(0,3)].play();
                location.reload();}
            
            
        }
            for(let j = 0; j < pant.length; j++) {
                if (pipe[i].y != undefined) {
                if ((pant[j].y > pipe[i].y) && (pant[j].y <= (pipe[i].y + 100)) && (((pant[j].x <= pipe[i].x) && ((pant[j].x + 60) >= pipe[i].x)) || ((pant[j].x <= (pipe[i].x + 100)) && ((pant[j].x + 60) >= (pipe[i].x + 100))) || ((pipe[i].x <= pant[j].x) && ((pipe[i].x+100)>=(pant[j].x+60) ))  ) ) 
                {
                    dead[rnd(0,3)].play();
                    score += 50;
                    pipe[i].x = 1010;
                    pipe[i].y = 500;
                    pant[j].x = -150;
                    pant[j].y = 0;
                };}
                pant[j].y -= 4;
                // ограничиваем радиус атаки трусов
                if (pant[j].y <= 252) {pant[j].x = -100; pant[j].y = -100}; 
                if ((pant[j].y > -60) && (pant[j].y < 600)) {
                ctx.drawImage(pant[j].img, pant[j].x, pant[j].y);}
                };
        }

        if (growscore) {score += 1};
        ctx.fillStyle = "#fff";
        ctx.font = "16px Verdana";
        ctx.fillText("Анаболизм: " + score, 10, 20);

        

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

