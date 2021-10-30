window.onload = function() {

  //llamar mis clases
  const bg = new Background(canvas.width,canvas.height)
  const flappy = new Flappy(50,40,30,30)

  document.getElementById("start-button").onclick = function() {
    if(requestId){
      return true
    }
    startGame();
  };

  function startGame() {
    audio.play()
    requestId = requestAnimationFrame(update)
  }

  function gameOver(){
    audio.pause()
    bg.gameOver()
    requestId = undefined

  }

  function update(){
    frames ++;
    //limpiar el canvas
    ctx.clearRect(0,0,canvas.width,canvas.height)
    bg.draw();
    flappy.draw()
    generatePipes()
    drawPipes()
    ctx.font= "80px Arial"
    ctx.fillText(`Score: ${points}`,600,80)
    if(flappy.y + flappy.height > canvas.height){
      gameOver()
    }

    if(requestId){
      requestId = requestAnimationFrame(update)
    }
  }

  function generatePipes(){
    if( !(frames % 160 === 0)  ){
      return true
    }

    //height random
                          //floor(math.random() *(max - min)) + min
    const height = Math.floor(Math.random() * (canvas.height * 0.6 ) ) + 30;
    const pipe1 = new Pipe("top",canvas.width,0,height);
    const pipe2 = new Pipe("ElDeAbajo",canvas.width,height + 120,canvas.height - 120 - height)

    pipes.push(pipe1,pipe2)
    
    //pipes+
  }

  function drawPipes(){
    pipes.forEach((pipe,index_pipe)=>{

      //sacar los pipes si se salen del canvas
      if(pipe.x < -30){
        //le decimos al arreglo que elemento sacar
       
        pipes.splice(index_pipe, 1)
      }
      if(pipe.x + pipe.width === 80){
        points += .5;
      }
      pipe.draw()

      if(flappy.collision(pipe)){
        gameOver()
      }
    })
  }

  function resetGame(){
    if(requestId){
      return true 
    }
    points = 0;
    flappy.y = 40
    flappy.userPull = 0
    flappy.vy = 2
    startGame()
  }

  //eventlistenner
  addEventListener("keydown",(e)=>{
    if(e.keyCode === 32){
      flappy.userPull = 0.3;
    }
    if(e.keyCode === 82 ){
      resetGame()
    }
  })

  addEventListener("keyup",(e)=>{
    if(e.keyCode === 32){
      flappy.userPull = 0;
    }
  })

};



