gameData.currentSceneName = "startScene"; //setting gameData current scene
let clickableImgs = [];


function preload(){
  let scenesData = gameData.scenesData

  //loads every clickable image and saves it in gameData
  scenesData.forEach((sceneData) => {
     if(sceneData.clickableImgs.length > 0){
       if(sceneData.clickableImgs.length > 0){
          for(let i=0; i<sceneData.clickableImgs.length; i++){
            sceneData.clickableImgs[i].img1 = loadImage(sceneData.clickableImgs[i].img1Url)
            sceneData.clickableImgs[i].img2 = loadImage(sceneData.clickableImgs[i].img2Url)
          }
       }
      }
  })
}

function setup() { 
  createCanvas(windowWidth, windowHeight); //creating canvas
  gameData.currentSceneObj = gameData.scenesData.find(x => x.name === gameData.currentSceneName);
   
  //create objects for every clickable image of the current scene
  // and adds it to local clickableImgs array
  gameData.currentSceneObj.clickableImgs.forEach(clickableImg => {
    let temp = new ClickableImg(clickableImg.img1,clickableImg.img2, clickableImg.x,clickableImg.y);
    clickableImgs.push(temp)
  })

}//setup

function draw(){
  background(0);
  for(let i=0; i<clickableImgs.length; i++){
    clickableImgs[i].show()
  }
}

function mousePressed(){
  for(let i=0; i<1; i++){
    clickableImgs[i].clicked(mouseX, mouseY);
  }
}


// OBJECT FOR CLICKABLE IMAGES...
class ClickableImg {
  constructor(img1, img2, x,y){
    this.img1 = img1;
    this.img2 = img2;
    this.x = x;
    this.y = y;
    this.fixed = false;
  }

  show(){
      image(this.img1, this.x, this.y)
  }

  clicked(px,py){
    //if is not repaired...
      if(!this.fixed){
        if(px > this.x && px < (this.x + this.img1.width)){
          console.log("repairing");
          this.fixed = true
        }    
      }
      // if(x > this.x && x < x + this.width && y > this.y && y < this.y + this.height){
      //   console.log("toy dentro")
      // }
  }
}
