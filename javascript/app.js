let renderables = [];
class Renderable {
  constructor(x,y){
  this.x = x;
  this.y = y;
  }
}
let object = new Renderable(10,10);
const draw_frames = () => {
  for(i=0;i<renderables.length;i++){
    renderables[i].render_object();
  }
}
