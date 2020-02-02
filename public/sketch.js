gameData.currentSceneName = "scene00"; //setting gameData current scene

//vars to store current scene clickable imgs and transitions
var clickableImgs = [];
var transitionImgs = [];


function preload(){
  let scenesData = gameData.scenesData
  gameFunctions.loadClickableImgs(scenesData) // loads all clickables imgs
  gameFunctions.loadTransitionImgs(scenesData)
  console.log(gameData)
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