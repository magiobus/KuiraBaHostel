// OBJECT FOR CLICKABLE IMAGES...
class ClickableImg {
  constructor(img1, img2, x,y){
    this.img1 = img1;
    this.img2 = img2;
    this.image = this.img1
    this.x = x;
    this.y = y;
    this.fixed = false;
  }

  show(){
      image(this.image, this.x, this.y)
  }

  clicked(px,py){
    //if is not repaired...
      if(!this.fixed){
        if(px > this.x && px < (this.x + this.image.width)){
          console.log("repairing");
          this.fixed = true
          this.repair()
        }    
      }
      // if(x > this.x && x < x + this.width && y > this.y && y < this.y + this.height){
      //   console.log("toy dentro")
      // }
  }

  repair(){
    this.image = this.img2;    
  }

  transition(time){
    console.log("transition!")
    //wait
    //deletes current image instance
    //create a transitionImageObject that iterates trough array

  }
}