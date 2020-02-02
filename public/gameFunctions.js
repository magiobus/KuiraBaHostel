

var gameFunctions = {
	loadClickableImgs: function(scenesData){
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
	},
	loadTransitionImgs: function(scenesData){
		scenesData.forEach((sceneData) => {
			console.log("holi", sceneData)
	    	if(sceneData.transitionImgs){
	    		for(let i=0; i<sceneData.transitionImgs.length; i++){
	          	  sceneData.transitionImgs[i] = loadImage(sceneData.transitionImgs[i])
	        	}
	    	}
		})
	}
	
}



