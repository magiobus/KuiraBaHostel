// OBJECT FOR CLICKABLE IMAGES...
class ClickableImg {
  constructor(clickableimgData){
    this.img1 = clickableimgData.img1;
    this.img2 = clickableimgData.img2;
    this.image = this.img1
    this.x = clickableimgData.x;
    this.y = clickableimgData.y;
    this.fixed = false;
    // this.transitionUrls = clickableimgData.transitionUrls
  }

  show(){
      image(this.image, this.x, this.y)
  }

  clicked(px,py){
    //if is not repaired...
      if(!this.fixed){
        if(px > this.x && px < (this.x + this.image.width)){
          console.log("repairing...");
          this.fixed = true
          this.repair()
        }    
      }
  }

  repair(){
    console.log("repaired")
    this.image = this.img2; 
    let that = this;
    // if(this.transitionUrls.length > 0){ setTimeout(function(){ that.transition() }, 100)};
  }

  transition(){
    console.log("transition!")
    let transitionObj = new TransitionImg(this.transitionUrls)
    transitionObj.startTransition()
    //wait
    //deletes current image instance
    //create a transitionImageObject that iterates trough array

  }
}