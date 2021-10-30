const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let frames = 0;
const gravity = 0.1;

// Array Pipes
let pipes = [];
let points = 0;
let diff = 1;
let requestID;


// Audio
const audio = new Audio();
// audio.src = ''

// Ejemplo valores heroes

let heroeDefault = {
    vida: 3;
    status: "pequeño","grande","rojo";

}