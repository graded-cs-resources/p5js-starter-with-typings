/// @ts-check
/// <reference path="global.d.ts" />
"use strict";
// DO NOT TOUCH THE ABOVE CODE.


function setup() {
    createCanvas(400, 600);
    textSize(32);
    textAlign(CENTER);
}

function draw() {
    
    if (mouseIsPressed) {
        fill(0);
        stroke(255);  
    }
    else {
        fill(255);
        stroke(0);
    }
    
    ellipse(mouseX, mouseY, 80, 80);
    
    fill("red");
    text("Welcome to p5js!",200,50);
}