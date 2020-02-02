gameData.currentSceneName = "startScene"; //setting gameData current scene


function setup() { 
  createCanvas(windowWidth, windowHeight); //creating canvas
  gameData.currentSceneObj = gameData.scenesData.find(x => x.name === gameData.currentSceneName);
} 

function draw() {

  //check if background image to load
  if(gameData.currentSceneObj.backgroundImage){
  	console.log("si tiene background image, carga aqui el background images");
  } 

  
  	//check if unfixed images to load
	  	// Object.keys(gameData.currentSceneObj.unfixedImages).forEach(
	  	// 	key => gameFunctions.loadGameImage(gameData.currentSceneObj.unfixedImages[key])
	  	// )
	// }
}
