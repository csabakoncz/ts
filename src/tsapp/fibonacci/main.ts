import 'createjs'
import $ from 'jquery'

var w = 1200
var h = 800
$('body').append($(`<canvas id="demoCanvas" width="${w}" height="${h}"></canvas>`))
var stage = new createjs.Stage("demoCanvas");

var x0 = w / 2
var y0 = h / 2
stage.setTransform(x0, y0)

stage.addChild(circle('green', 2))
stage.addChild(circle('yellow', 1))

var a2 = 0
var a1 = 0
var a = 10

var t = new createjs.Matrix2D();
for (var i = 0; i < 13; i++) {
  
  var arc = createArc(a)
  arc.transformMatrix = t
  stage.addChild(arc)
  
  a2 = a1
  a1 = a
  a = a1 + a2
  t = t.clone().rotate(90).translate(-a2,0)
}

createjs.Ticker.setFPS(60);
createjs.Ticker.addEventListener("tick", stage);

declare var window: any
window.stage = stage

function createArc(a) {
  var circle = new createjs.Shape();
  circle.graphics
    .beginStroke("blue")
    .drawRect(0, 0, a, a)
    .beginStroke("red")
    .arc(0, 0, a, 0, Math.PI / 2, false)

  return circle
}

function circle(color: string, radius: number) {
  var c = new createjs.Shape()
  c.graphics.beginFill(color).drawCircle(0, 0, radius)
  return c
}