let player1
let player2
let e1,e2,e3,e4,e5

function setup() {
  createCanvas(400, 400);
  player1 = new Player(200, 200, 50, 5, 87, 83, 65, 68)
  player2 = new Player(100, 100, 50, 5, 38, 40, 37, 39)
  e1 = new Enemy(300, 100, 40, 2)
  e2 = new Enemy(350, 120, 40, 2)
  e3 = new Enemy(100, 130, 40, 2)
  e4 = new Enemy(150, 150, 40, 2)
  e5 = new Enemy(200, 180, 40, 2)
  
}

function draw() {
  background(220);
  player1.update()
  player2.update()
  e1.update(player1)
  e2.update(player1)
  e3.update(player2)
  e4.update(player2)
  e5.update(player2)
  
  

}
class Player {//the everything
  constructor(x, y, size, speed, up, down, left, right) {//like kinda variables
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.up = up;
    this.down = down;
    this.left = left;
    this.right = right;
  }
  update(){//move and draw
    //show
    fill(255, 0, 0)//culer
    ellipse(this.x,this.y,this.size)//what will be drawn
    //move
    if(keyIsDown(this.left)){//move left
      this.x-=this.speed
      
    }
    if(keyIsDown(this.right)){//move right
      this.x+=this.speed
    }
    if(keyIsDown(this.up)){//move up
      this.y-=this.speed
    }
    if(keyIsDown(this.down)){//move down
      this.y+=this.speed
    }
  }
}
class Enemy{
  constructor(x, y, size, speed){
    this.x=x
    this.y=y
    this.speed=speed
    this.size=size
  }
  update(obj){
    fill("purple")//color enemy purple
    ellipse(this.x,this.y,this.size)//draw the enemy
    if(this.x<obj.x){
      this.x+=this.speed
    }
    if(this.x>obj.x){
      this.x-=this.speed
    }
        if(this.y>obj.y){
      this.y-=this.speed
    }
         if(this.y<obj.y){
      this.y+=this.speed
    }
  }
  
}