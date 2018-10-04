/*
let canvas = document.getElementById('astrogation')
canvas = canvas.getContext('2d');
canvas.strokeStyle = "red";
canvas.fillStyle = "red";
canvas.beginPath();
canvas.moveTo(300,200);
canvas.arc(200,200,100,0,2*Math.PI,false)
canvas.closePath();
canvas.stroke();
*/
const img = new Image()

console.log(img.src)
img.addEventListener ('load',() => {
  console.log(img.src)
})

img.src = "images/red_star.png";


const zero_in_graphic = (x,y) => {
  const canvas = document.getElementById('astrogation').getContext('2d');
  canvas.strokeStyle = "red";
  canvas.fillStyle = "red";
  let radius = 115;
  let radians = 0;

  let zeroing = setInterval(() => {
    if (radius > 40){
      radius -= 15;
      canvas.clearRect(0,0,900,500)
      canvas.drawImage(img,200,200);
    }else{
      if(radians == 2*Math.PI){
        radians = 0;
      }
      radians += .035*Math.PI;
      canvas.clearRect(0,0,900,500)
      canvas.drawImage(img,200,200);
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

  },35)
  $('#astrogation').on('click', ()=>{clearInterval(zeroing)})
}
$('#astrogation').on('click', (event) => {
  const canvas = document.getElementById('astrogation').getContext('2d');
  canvas.clearRect(0,0,900,500)
  canvas.drawImage(img,200,200);
  x = event.originalEvent.clientX - event.currentTarget.offsetLeft;
  y = event.originalEvent.clientY - event.currentTarget.offsetTop;
  zero_in_graphic(x,y);
  });
