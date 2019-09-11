/// @ts-check
/// <reference path="global.d.ts" />
"use strict";
// DO NOT TOUCH THE ABOVE CODE IF YOU WANT THE MAGIC!
// (You can remove or add an extra slash to the top @ts-check line if you want things to be a bit less strict)

function setup() {
  createCanvas(400, 600);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
}

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

function writeText() {
  fill("pink");
  stroke("black");
  rect(width / 2, 50, 300, 50);
  fill("black");
  stroke("black");
  textSize(32);
  text("Welcome to p5js!", width / 2, 50);

}
