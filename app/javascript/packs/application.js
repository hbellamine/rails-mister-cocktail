/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
import 'bootstrap';

console.log('Hello World from Webpacker')

new p5();
window.onload = function() {

  //setting up canvas
  let c = init("canvas").c,
      canvas = init("canvas").canvas,
      w = (canvas.width = window.innerWidth),
      h = (canvas.height = window.innerHeight);

  class circle{
    constructor(res,seed,r){
      this.num = Math.floor(360/res);
      this.da = res*Math.PI/180;
      this.s = seed;
      this.x = w/2;
      this.y = h/2;
      this.ox = 1000;
      this.oy = 1000;
      this.r = r;
      this.b = Math.random()*0.9+0.1;
      this.offs = new Array(this.num);
      for(let i = 0; i < this.num; i++){
        this.offs[i] = noise(this.ox+ns*Math.cos(i*this.da),this.oy+ns*Math.sin(i*this.da),seed+t)*max;
      }
    }
    calc(){
      for(let i = 0; i < this.num; i++){
        this.offs[i] = noise(this.ox+ns*Math.cos(i*this.da),this.oy+ns*Math.sin(i*this.da),this.s+t)*max;
      }
    }
    show(){
      c.beginPath();
      for(let i = 0; i < this.num; i++){
        c.lineTo(this.x+(this.r+this.offs[i])*Math.cos(i*this.da),this.y+(this.r+this.offs[i])*Math.sin(i*this.da));
      }
      c.strokeStyle="white";
      c.closePath();
      c.lineWidth=this.b;
      c.stroke();
    }
  }

  //variables definition
  let nameOfVariable = "value",
      mouse = {x: w/2, y: h/2},
      last_mouse = {},
      max = 40,
      t = 0,
      ns = 2,
      p = [],
      num = Math.floor(h/4);

  for(let i = 0; i < num; i++){
    p.push(new circle(1,i/20,i));
  }

  //place for objects in animation
  function draw() {
    for(let i = 0; i < num; i++){
      p[i].calc();
      p[i].show();
    }
    t+=0.1;
  }

  //mouse position
  canvas.addEventListener(
    "mousemove",
    function(e) {
      last_mouse.x = mouse.x;
      last_mouse.y = mouse.y;

      mouse.x = e.pageX - this.offsetLeft;
      mouse.y = e.pageY - this.offsetTop;
    },
    false
  );

  //animation frame
  function loop() {
    window.requestAnimFrame(loop);
    c.clearRect(0, 0, w, h);
    draw();
  }

  //window resize
  window.addEventListener("resize", function() {
    (w = canvas.width = window.innerWidth),
    (h = canvas.height = window.innerHeight);
    loop();
  });

  //animation runner
  loop();
  setInterval(loop, 1000 / 60);
}
