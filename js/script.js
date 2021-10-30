window.onload = function() {

  // LLamar las clases
  const bg = new Background(canvas.width,canvas.height);
  const flappy = new Flappy(20,40,30,30);


  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    requestID = requestAnimationFrame(update)
  }

  function gameOver(){

  }

  function update(){
    // Actualización continua de frames
    frames++;
    // limpiar capas
    ctx.clearRect(0,0,canvas.width,canvas.height);
    bg.draw();
    flappy.draw();

    if(requestID){
      requestID = requestAnimationFrame(update)
    }
  }

  // Event Listenner
  addEventListener('keydown',(e) =>{
    if(e.keyCode === 32){
      flappy.userPull = 0.3;
    }
  })

  addEventListener('keyup',(e) =>{
    if(e.keyCode === 32){
      flappy.userPull = 0.3;
    }
  })

};
