class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: false
     }
     this.body = Bodies.polygon(x, y, width, height, options);
     this.width = width;
     this.height = height;
     World.add(world, this.body);
    };

    display(){
      // Draw the tanker the way you like.
      push();
      angleMode(DEGREES); 
      fill(20);
      strokeWeight(4);
      stroke(255);
      rect(20, 340, 120, 20, 5);
      arc(80, 350, 80, 80, 165.1, 15.4, CHORD);
      rect(80, 360, 120, 20);
      rect(80, 380, 160, 20);
      pop();
    };
}
