// Declare Enemy object with initial start point and speeds as properties
var Enemy = function(startX,startY,speedX,speedY) {
    
    this.x=startX
    this.y=startY
    this.Xspeed=speedX;
    this.Yspeed=speedY;
    this.Xstart=startX;
    this.Ystart=startY;


// The image/sprite for our enemies, this uses
// a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
   ;
   
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
// Update Enemy's position,returns it back to start point
// if exits screen
   
    if (this.x>400){
        (this.x=this.Xstart)*dt;
        (this.y=this.Ystart)*dt;
    };
    
    (this.x+=this.Xspeed)*dt;
    (this.y+=this.Yspeed)*dt;
    
    }
    
    
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);


}

// Declare player class at start point coordinates with methods
//  update(), render() and a handleInput() 
var Player=function(){
    this.x=202;
    this.y=395;
    this.sprite ='images/char-boy.png';
    
    };

//Update player position according to arrow keys input, return player
 //to start point if exits the screen 
Player.prototype.update = function(dt,key){
    switch (this.key){
     case 'left':
      (this.x-=101)*dt;
          this.key=0; 
          if(this.x<0){
            this.x=202;
            this.y=395;
          }
       break; 

      case 'up':
       (this.y-=83)*dt;
       this.key=0;
       if (this.y<0){
        this.y=395;
    }
        break;
        case 'right':
        (this.x += 101)*dt;
        this.key=0;
        if (this.x+75>505){
            this.x=202;
            this.y=395;
        }
        break;
        case 'down':
        (this.y+=83)*dt;
        this.key=0;

        if (this.y+75>498){
            this.x=202;
            this.y=395;
        }
        break;

        
default:
    this.x-=0;
    this.y-=0;
    break;
 }

//Detect collision using bug and player dimensions using modified pictures. 
//Return player back to start point if collision happens
if(this.y<bug1.y+65 && this.x<bug1.x+98 && this.x+75>bug1.x && this.y+75> bug1.y){
    this.y=395;
   this.x=200;
 }

if(this.y<bug2.y+65 && this.x<bug2.x+98 && this.x+75>bug2.x && this.y+75> bug2.y){
    this.y=395;
   this.x=200;

 }

}

Player.prototype.render =function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

}

//Gets input from keyboard for updating player postion
Player.prototype.handleInput=function(allowedKeys){

   switch(allowedKeys){

  case'left':
  this.key='left';
  break;
  case 'up':
  this.key='up';
  break;
  case 'right':
  this.key='right';
  break;
  case 'down':
  this.key='down';
  break;    
 
 }
}
 // Instantiate two instancess of Enemies
 var bug1 = new Enemy(0,150,6,0);
 
 var bug2 = new Enemy(0,232,2,0);
 
 
// Place all enemy objects in an array called allEnemies
var allEnemies = [bug1,bug2];

// Place the player object in a variable called player
 var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
