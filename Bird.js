class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage("sprites/smoke.png");
    this.trail = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    var pos = [this.body.position.x,this.body.position.y];
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      this.trail.push(pos);
      
    
    }
    

    for(var i = 0; i<this.trail.length;i++){
      image(this.smokeImg,this.trail[i][0],this.trail[i][1]);
    }
    
    
  }
}
