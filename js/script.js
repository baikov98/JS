
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
    }
}



