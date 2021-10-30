/**
 * Archivo para vairables que utliza mi video juego
 */


 const canvas = document.getElementById("canvas");
 const ctx = canvas.getContext("2d");
 let frames = 0;
 const gravity = 0.1;
 //array Pipes
 let pipes = []
 let points = 0;
 let diff = 1; //dificultad
 let requestId;
 
 //audio
 const audio = new Audio()
 audio.src ="../audio/Battleship.ogg"
 audio.loop = true
 //audioend
 
 
 
 //ejemplo valores para heroe
 
 let dylanDefault = {
     vida: 3,
     status: "pequeño", //pequeño, grande, rojo, special(estrella)
     monedas:0
 }