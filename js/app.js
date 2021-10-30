// Van las clases

class Background {
    constructor(w,h){
        this.x = 0;
        this.y = 0;
        this.w = w;
        this.h = h;
        this.image = new Image()
        this.image.src = '../images/bg.png'
        //this.imgGameOver = new Image();
        // this.
    }

    draw(){
        // Para mover el Background
        if(this.x < -canvas.witdh){
            this.x = 0
        }
        this.x --; // movimiento negativo X <--
        
        ctx.drawImage(this.image,this.x,this.y,this.w,this.h);
        ctx.drawImage(this.image,this.x + this.w,this.y,this.w,this.h);

    }

    gameOver(){

        // NO usar Texto
        ctx.font = '80px Arial';
        ctx.fillText = ('Te moriste mi rey!',250,200)

        // USAR IMAGENES
        // ctx.globalAlpha = 0.5;
       // ctx.drawImage(this.image,this.x + this.w,this.y,this.w,this.h);
    }
}

class Flappy{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.vy = 2 //gravity
        this.userPull= 0;//gravity
        this.image = new Image();
        this.image.src = "../images/flappy.png"
    }

    draw(){
        // validar gravedad
        this.vy = this.vy + (gravity - this.userPull);
        
        // Validamos para que no se salga del canvas
        if(this.y <= 0){
            this.userPull = 0;
            this.y = 2;
            this.vy = 2;
        }

        // Modificamos su Y con la gravedad
        if(this.y + this.height < canvas.height){
            this.y += this.vy;
        }


        // dibujar
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);

    }

    collision(item){
        
        return(
            this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y
        )
    }
}