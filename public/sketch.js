gameData.currentSceneName = "scene00"; //setting gameData current scene

//vars to store current scene clickable imgs and transitions
var clickableImgsLocal;
var mgr; 
let menuMusic

    
function preload(){
  soundFormats('mp3', 'ogg');
  menuMusic = loadSound('static/audio/kuirabaAudio128.mp3');
}


function setup(){
  createCanvas(windowWidth, windowHeight); //creating canvas

  mgr = new SceneManager();

  mgr.addScene ( menu );
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
      console.log("auch me presionaron el 1 y ya puedo cambiar de escena")
      //hacer transición y mandar a escena 2
      mgr.showScene( transitionScene );
    } 

    // ... then dispatch via the SceneManager.
    mgr.handleEvent("keyPressed");
}


//////////////////SCENES SCENES SCENES ///////////////

function menu(){
  let menuImg;
  this.enter = function(){
    createCanvas(windowWidth, windowHeight); //creating canvas
    background(0)
    menuImg = loadImage('static/images/menu_image.jpg'); 
    menuMusic.setVolume(0.5);
    menuMusic.play()
    menuMusic.loop()
    
  }

  this.draw = function(){
    image(menuImg, 0, 0)
  }

  this.keyPressed = function(){
    //PRESS ANY KEY TO START THE GAME
    mgr.showScene( gameScene );
  }
}


function gameScene(){

  this.enter = function(){
    createCanvas(windowWidth, windowHeight); //creating canvas
    background(0)
    clickableImgsLocal = []

    console.log(" estoy en la escena de gamescene =>", gameData)

    gameData.currentSceneObj = gameData.scenesData.find(x => x.name === gameData.currentSceneName);
    gameFunctions.loadClickableImgs(gameData.currentSceneObj.clickableImgs) // loads all clickables imgs of the current scene

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
  console.log("entramos al transition scene carnal")
  var transitionObj;
  this.enter = function(){
    gameFunctions.loadTransitionImgs(gameData.currentSceneObj.transitionImgs) // loads all clickables imgs of the current scene
    //create objects for every clickable image of the current scene
   // and adds it to local clickableImgs array
    transitionObj = new TransitionImg(gameData.currentSceneObj.transitionImgs);
    let that = this

    for (let i = 0; i<gameData.currentSceneObj.transitionImgs.length; i++) {
       (function(ind) {
          setTimeout(function(){
            if(i !== gameData.currentSceneObj.transitionImgs.length-1){
              transitionObj.updateImage(gameData.currentSceneObj.transitionImgs[i])
            } else {
              that.changeScene()
            }
          }, 180 * ind);
       })(i);
    }
  }


  this.changeScene = function(){
    console.log("a cambiar escena")
    gameData.currentSceneName = gameData.currentSceneObj.destination
    mgr.showScene( gameScene );
    console.log("gameData.currentSceneName =>", gameData.currentSceneName)

  }


} 