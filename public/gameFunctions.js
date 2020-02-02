

var gameFunctions = {
	loadClickableImgs: function(clickableImgs){
		  //loads every clickable image and saves it in gameData
		  if(clickableImgs.length > 0){
		  	for(let i=0; i<clickableImgs.length; i++){
	            clickableImgs[i].img1 = loadImage(clickableImgs[i].img1Url)
	            clickableImgs[i].img2 = loadImage(clickableImgs[i].img2Url)
	          }
		  }
	},
	loadTransitionImgs: function(transitionImgs){
		if(transitionImgs.length > 0){
			for(let i=0; i<transitionImgs.length; i++){
	          	 transitionImgs[i] = loadImage(transitionImgs[i])
	        }
		}
	}
	
}



