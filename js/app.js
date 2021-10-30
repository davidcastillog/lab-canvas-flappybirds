// Van las clases
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

class Background {
    constructor(w,h){
        this.x = 0;
        this.y = 0;
        this.w = w;
        this.h = h;
        this.image = new Image()
        this.image.src = '../images/bg.png'
    }

    draw(){
        // Para mover el Background
        if(this.x < -canvas.witdh){
            this.x = 0
        }
        this.x --;
        
        ctx.drawImage(this.image,this.x,this.y,this.w,this.h);
        ctx.drawImage(this.image,this.x + this.w,this.y,this.w,this.h);

    }

    gameOver(){

    }

}