gameData.currentSceneName = "scene00"; //setting gameData current scene

//vars to store current scene clickable imgs and transitions
var clickableImgsLocal = [];
var transitionImgsLocal = [];
var mgr; 

function setup(){
  createCanvas(windowWidth, windowHeight); //creating canvas
  mgr = new SceneManager();

  mgr.addScene ( gameScene );
  mgr.addScene ( transitionScene );
  mgr.showNextScene();
}

function draw(){
  mgr.draw();
}

function mousePressed(){ mgr.handleEvent("mousePressed");}
function keyPressed()
{
    // You can optionaly handle the key press at global level...
    if(key === '1' && gameData.currentSceneObj.canChangeToNextScene){
      console.log("auch me presionaron el 1 y ya puedo cambair de escena")
      //hacer transición y mandar a escena 2
      mgr.showScene( transitionScene );
    }  
    // ... then dispatch via the SceneManager.
    mgr.handleEvent("keyPressed");
}


//////////////////SCENES SCENES SCENES ///////////////
function gameScene(){

  this.setup = function(){
    console.log("setup scene1")
    createCanvas(windowWidth, windowHeight); //creating canvas
    background(0)

    gameData.currentSceneName = "scene00";
    gameData.currentSceneObj = gameData.scenesData.find(x => x.name === gameData.currentSceneName);
    gameFunctions.loadClickableImgs(gameData.currentSceneObj.clickableImgs) // loads all clickables imgs of the current scene
    gameFunctions.loadTransitionImgs(gameData.currentSceneObj.transitionImgs) // loads all clickables imgs of the current scene

    //create objects for every clickable image of the current scene
   // and adds it to local clickableImgs array
    gameData.currentSceneObj.clickableImgs.forEach(clickableImgData => {
      let temp = new ClickableImg(clickableImgData);
      clickableImgsLocal.push(temp)
    })

  }

  this.draw = function(){
   for(let i=0; i<clickableImgsLocal.length; i++){
      clickableImgsLocal[i].show()
    }
  }


  this.mousePressed = function(){ for(let i=0; i<1; i++){ clickableImgsLocal[i].clicked(mouseX, mouseY); } }
} 

function transitionScene(){
  let transitionObj;
  this.setup = function(){
    console.log("setup transition scene", gameData)
    transitionObj = new TransitionImg(gameData.currentSceneObj.transitionImgs)
    transitionObj.startTransition()

    // cargar transición del current scene obj
  }
} 