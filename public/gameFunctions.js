

var gameFunctions = {
	loadGameImage: function(imageObj){
		console.log("cargando imagen =>  ", imageObj);
		let img = loadImage(imageObj.url);
		image(img, imageObj.x, imageObj.y);
	}
	
}



// loadGameImage: function(imageUrl){
// 		console.log("loading image...");
// 		img = loadImage(imageUrl);
// 		image(img, 0, 0);
// 	}