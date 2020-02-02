var gameData = {
	currentSceneName: "", 
	currentSceneObj: "", 
	objectsFixed: 0, 
	scenesData: [
		{
			name:"scene00", 
			fixesRequired: 1, 
			fixesCounter: 0,
			canChangeToNextScene: false, 
			backgroundImage: "",
			clickableImgs: [
				{ 
					img1Url: "static/images/scene00__unfixed.jpg", 
					img2Url: "static/images/scene00__fixed.jpg", 
					img1:"",
					img2: "",
					x: 0, 
					y: 0,
					destination: "scene01"
				}
			],
			transitionImgs:[
				"static/images/scene00_transition00.png",
				"static/images/scene00_transition01.png",
				"static/images/scene00_transition02.png",
				"static/images/scene00_transition03.png",
				"static/images/scene00_transition04.png",
				"static/images/scene00_transition05.png",
				"static/images/scene00_transition06.png",
				"static/images/scene00_transition07.png"
			]
		},
			{
			name:"scene01", 
			backgroundImage: "",
			clickableImgs: [
				{ 
					img1Url: "static/images/scene01__unfixed.jpg", 
					img2Url: "static/images/scene01__fixed.jpg", 
					img1:"",
					img2: "",
					x: 0, 
					y: 0,
					destination: "scene02",
				}
				
			]
		}
	]
}