const img = new Image()

img.addEventListener ('load',() => {
  console.log(img.src)
})

img.src = "images/red_star.png";


let canvas = document.getElementById('astrogation')
canvas = canvas.getContext('2d');
canvas.strokeStyle = "red";
canvas.fillStyle = "red";

let current_x = 0;
let current_y = 0;
let renderables = [];
let inventory = [];
const selector = {
  active: false,
  draw_selector (){
    x = selector.target.x-current_x;
    y = selector.target.y-current_y;
    radius = selector.radius;
    radians = selector.radians;
    if (radius > 40){
      radius -= 15;
      selector.radius -= 15;
    }else{
      if(radians == 2*Math.PI){
          radians = 0;
          selector.radians = 0;
        }
        selector.radians += .035*Math.PI;
        canvas.beginPath();
        canvas.moveTo(x+(radius*Math.cos(radians)),y+(radius*Math.sin(radians)));
        canvas.lineTo(x+(radius*Math.cos(radians))-12*Math.cos(radians),y+(radius*Math.sin(radians))-12*Math.sin(radians));
        canvas.lineTo(x+(radius*Math.cos(radians+.12*Math.PI)),y+(radius*Math.sin(radians+.12*Math.PI)));
        canvas.lineTo(x+(radius*Math.cos(radians)),y+(radius*Math.sin(radians)));
        canvas.fill();
        canvas.beginPath();
        canvas.moveTo(x+(radius*Math.cos(radians+.67*Math.PI)),y+(radius*Math.sin(radians+.67*Math.PI)));
        canvas.lineTo(x+(radius*Math.cos(radians+.67*Math.PI))-12*Math.cos(radians+.67*Math.PI),y+(radius*Math.sin(radians+.67*Math.PI))-12*Math.sin(radians+.67*Math.PI));
        canvas.lineTo(x+(radius*Math.cos(radians+.12*Math.PI+.67*Math.PI)),y+(radius*Math.sin(radians+.12*Math.PI+.67*Math.PI)));
        canvas.lineTo(x+(radius*Math.cos(radians+.67*Math.PI)),y+(radius*Math.sin(radians+.67*Math.PI)));
        canvas.fill();
        canvas.beginPath();
        canvas.moveTo(x+(radius*Math.cos(radians+1.34*Math.PI)),y+(radius*Math.sin(radians+1.34*Math.PI)));
        canvas.lineTo(x+(radius*Math.cos(radians+1.34*Math.PI))-12*Math.cos(radians+1.34*Math.PI),y+(radius*Math.sin(radians+1.34*Math.PI))-12*Math.sin(radians+1.34*Math.PI));
        canvas.lineTo(x+(radius*Math.cos(radians+.12*Math.PI+1.34*Math.PI)),y+(radius*Math.sin(radians+1.34*Math.PI+.12*Math.PI)));
        canvas.lineTo(x+(radius*Math.cos(radians+1.34*Math.PI)),y+(radius*Math.sin(radians+1.34*Math.PI)));
        canvas.fill();
      }
    canvas.beginPath();
    canvas.moveTo(x+radius,y);
    canvas.arc(x,y,radius,0,2*Math.PI,false)
    canvas.closePath();
    canvas.stroke();
      }
};
class Renderable {
  constructor(x,y){
  this.x = x;
  this.y = y;
  renderables.push(this);
  }
}
class Ship extends Renderable{

}
class Celestial_body extends Renderable{

}
class Inventory_item {
  constructor(name,stack_size){

  }
}
const draw_frames = (current_x, current_y) => {
  canvas.clearRect(0,0,800,500);
  for(i=0;i<renderables.length;i++){
    renderables[i].render_object(current_x,current_y);
  }
}
let object = new Renderable (250, 250)
const event_listeners = () => {
  $('#astrogation').on('click', (event) => {
    const canvas = document.getElementById('astrogation').getContext('2d');
    x = event.originalEvent.clientX - event.currentTarget.offsetLeft;
    y = event.originalEvent.clientY - event.currentTarget.offsetTop;
    if (x < 50){
      current_x -= 100;
    }
    if (x > 750){
      current_x += 100;
    }
    if(y < 50){
      current_y -= 75;
    }
    if(y > 450){
      current_y += 75;
    }
    console.log(x,y);
    for(i=0;i<renderables.length;i++){
      if(Math.sqrt(Math.pow((renderables[i].x-(current_x+x)),2)+Math.pow((renderables[i].y-(current_y+y)),2)) <= 30){
        selector.target = renderables[i];
        selector.x = renderables[i].x;
        selector.y = renderables[i].y;
        selector.radius = 115;
        selector.radians = 0;
        selector.active = true;
      }
    }
  });
}

event_listeners();
object.render_object = function (current_x, current_y){
     if(!(this.x-current_x > 1000) && !(this.x-current_x < -200) && !(this.y-current_y > 700)  && !(this.y-current_y < -200)){
       canvas.drawImage(img,this.x-current_x-25,this.y-current_y-25,50,50);
     }
   }
draw_frames(current_x,current_y);
let rendering = setInterval(()=>{
  draw_frames(current_x,current_y);
  if(selector.active == true){
    selector.draw_selector();
  }
  },30)
