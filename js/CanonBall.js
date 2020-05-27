class CanonBall extends Ball {
  constructor(x, y) {
    super(x,y,50,50);
    this.image = loadImage("assets/canonBall.png");
  }

  display() {
    super.display();
  }
}

