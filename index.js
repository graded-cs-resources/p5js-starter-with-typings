/// @ts-check
/// <reference path="global.d.ts" />
"use strict";
// DO NOT TOUCH THE ABOVE CODE IF YOU WANT THE MAGIC!
// (You can remove or add an extra slash to the top @ts-check line if you want things to be a bit less strict)

/** This function runs as soon as the p5 library loads */
function setup() {
  createCanvas(400, 600);
  // set up some settings to make everything centered by default
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
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

  ellipse(mouseX, mouseY, 80, 80);

  writeText();
}
/* This function draws our welcome text and its rectangle background */
function writeText() {
  fill("pink");
  stroke("black");
  rect(width / 2, 50, 300, 50);
  fill("black");
  stroke("black");
  textSize(32);
  text("Welcome to p5js!", width / 2, 50);

}
