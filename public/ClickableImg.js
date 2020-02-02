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
    //check if theres more
    gameData.currentSceneObj.fixesCounter += 1;

    //if fixes in the scene are done, make transition and change scene.
    if(gameData.currentSceneObj.fixesCounter >= gameData.currentSceneObj.fixesRequired){
      let transitionImgs = gameData.currentSceneObj.transitionImgs
      gameData.currentSceneObj.canChangeToNextScene = true
    }

  }
}