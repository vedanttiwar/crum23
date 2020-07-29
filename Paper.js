class Paper{
    constructor(x,y,width,height) {
        var options = {
        restitution:0.4,
        density:1.2,
        friction:0.2        
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        imageMode(CENTER);
        fill("brown");
        //rect(pos.x, pos.y, this.width, this.height);
        image(this.image,pos.x,pos.y,40,40);
      }
  }
