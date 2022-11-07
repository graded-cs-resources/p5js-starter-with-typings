/// @ts-check
/// <reference path="global.d.ts" />
"use strict";

// DO NOT TOUCH THE ABOVE CODE IF YOU WANT THE MAGIC!

/** This function runs as soon as the p5 library loads **/
function setup() {
  let canvas = createCanvas(450, 300);
  canvas.style("border: 1px solid black");
  // set up some settings to make everything centered by default
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  background("lightgray")
}

/** This function runs in an infinitely repeating loop */
function draw() {
  if (mouseIsPressed) {
    fill("black");
    stroke("white");
  } else {
    fill("white");
    stroke("black");
  }

  ellipse(mouseX, mouseY, 60, 60);


  writeText();
}


/** This function draws our welcome text and its rectangle background **/
function writeText() {
  fill("pink");
  stroke("black");
  rect(width / 2, 50, 300, 50);
  fill("black");
  stroke("black");
  textSize(32);
  text("Welcome to p5js!", width / 2, 50);

}
