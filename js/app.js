// Van a ir mis Clases

class Background {
    //constructor
    constructor(w,h){
        this.x = 0;
        this.y = 0;
        this.width = w;
        this.height = h;
        this.image = new Image();
        this.image.src = "../images/bg.png" // ./ => en este mismo nievel; ../ salte un nivel
        this.imgGameOver = new Image();
        this.imgGameOver.src = "https://w7.pngwing.com/pngs/359/749/png-transparent-death-certificate-sword-art-online-gamebanana-died-text-rectangle-logo.png"
    }

    //metodos
    draw(){
        //para hacer que el background se mueva
        if(this.x < -canvas.width){
            this.x = 0
        }
        this.x--;

        //dibujar la imagen
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
        ctx.drawImage(
            this.image,
            this.x + this.width,
            this.y,
            this.width,
            this.height
        )
    }

    gameOver(){
        //esto es en texto pls no lo hagan así SOLO ES EJEMPLO!
        // ctx.font = "80px Arial";
        // ctx.fillText = ("Te moriste mi rey!",150,100)

        //imaga para gameOver este si lo pueden hace
        //ctx.globalAlpha = 0.5
        ctx.drawImage(this.imgGameOver,300,140,400,400)

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


    //metodos
    draw(){
        //validar gravedad
        this.vy = this.vy + (gravity - this.userPull);
        //validamos al tramposo del flappy para que no se salga del canvas en -y
        if(this.y <= 0){
            this.userPull = 0;
            this.y = 2;
            this.vy = 2;
        }

        //modificamos su y con la gravedad

        if(this.y + this.height < canvas.height){
            this.y += this.vy;
        }

        //dibujar
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
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



class Pipe{
    constructor(pos,x,y,h){
        this.x = x;
        this.y= y;
        this.width = 50;
        this.height= h;
        this.image = new Image()
        this.image.src = 
            pos === "top" 
            ? "../images/obstacle_top.png" 
            : "../images/obstacle_bottom.png";
    }

    draw(){
        this.x -= 2;
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    }
}
