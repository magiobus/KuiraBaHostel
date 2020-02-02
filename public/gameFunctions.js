

var gameFunctions = {
	loadGameImage: function(imageUrl){
		img = loadImage(imageUrl);
		console.log("soy la funcion de la imagen =>", img);
		image(img, 0, 0);
	}
	
}



// loadGameImage: function(imageUrl){
// 		console.log("loading image...");
// 		img = loadImage(imageUrl);
// 		image(img, 0, 0);
// 	}