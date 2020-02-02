var gameData = {
	currentSceneName: "", 
	currentSceneObj: "", 
	objectsFixed: 0, 
	scenesData: [
		{
			name:"scene00", 
			destination: "scene01", 
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
					y: 0
				}
			],
			transitionImgs:[
				"static/images/scene00_transition00.jpg",
				"static/images/scene00_transition01.jpg",
				"static/images/scene00_transition02.jpg",
				"static/images/scene00_transition03.jpg",
				"static/images/scene00_transition04.jpg",
				"static/images/scene00_transition05.jpg",
				"static/images/scene00_transition06.jpg",
				"static/images/scene00_transition07.jpg"
			]
		},
		{
			name:"scene01", 
			destination: "scene02", 
			fixesRequired: 1, 
			fixesCounter: 0,
			canChangeToNextScene: false, 
			backgroundImage: "",
			clickableImgs: [
				{ 
					img1Url: "static/images/scene01__unfixed.jpg", 
					img2Url: "static/images/scene01__fixed.jpg", 
					img1:"",
					img2: "",
					x: 0, 
					y: 0
				}
			],
			transitionImgs:[
				"static/images/scene01_transition00.jpg",
				"static/images/scene01_transition01.jpg",
				"static/images/scene01_transition02.jpg",
				"static/images/scene01_transition03.jpg",
				"static/images/scene01_transition04.jpg",
				"static/images/scene01_transition05.jpg"
			]
		},
			{
			name:"scene02", 
			destination: "scene03", 
			fixesRequired: 1, 
			fixesCounter: 0,
			canChangeToNextScene: false, 
			backgroundImage: "",
			clickableImgs: [
				{ 
					img1Url: "static/images/scene02__unfixed.jpg", 
					img2Url: "static/images/scene02__fixed.jpg", 
					img1:"",
					img2: "",
					x: 0, 
					y: 0
				}
			],
			transitionImgs:[
				"static/images/scene02_transition00.jpg",
				"static/images/scene02_transition01.jpg",
				"static/images/scene02_transition02.jpg",
				"static/images/scene02_transition03.jpg",
				"static/images/scene02_transition04.jpg",
				"static/images/scene02_transition05.jpg",
				"static/images/scene02_transition06.jpg",
				"static/images/scene02_transition07.jpg",
				"static/images/scene02_transition08.jpg",
				"static/images/scene02_transition09.jpg",
				"static/images/scene02_transition010.jpg"
			]
		},
		{
			name:"scene03", 
			destination: "scene04", 
			fixesRequired: 1, 
			fixesCounter: 0,
			canChangeToNextScene: false, 
			backgroundImage: "",
			clickableImgs: [
				{ 
					img1Url: "static/images/scene03__unfixed.jpg", 
					img2Url: "static/images/scene03__fixed.jpg", 
					img1:"",
					img2: "",
					x: 0, 
					y: 0
				}
			],
			transitionImgs:[
				"static/images/scene03_transition00.jpg",
				"static/images/scene03_transition01.jpg",
				"static/images/scene03_transition02.jpg",
				"static/images/scene03_transition03.jpg",
				"static/images/scene03_transition04.jpg",
				"static/images/scene03_transition05.jpg",
				"static/images/scene03_transition06.jpg",
				"static/images/scene03_transition07.jpg",
				"static/images/scene03_transition08.jpg",
				"static/images/scene03_transition09.jpg",
				"static/images/scene03_transition010.jpg",
				"static/images/scene03_transition011.jpg",
				"static/images/scene03_transition012.jpg",
				"static/images/scene03_transition013.jpg",
				"static/images/scene03_transition014.jpg",
				"static/images/scene03_transition015.jpg",
				"static/images/scene03_transition016.jpg",
				"static/images/scene03_transition017.jpg",
				"static/images/scene03_transition018.jpg",
				"static/images/scene03_transition019.jpg",
				"static/images/scene03_transition020.jpg",
				"static/images/scene03_transition021.jpg",
				"static/images/scene03_transition022.jpg",
				"static/images/scene03_transition023.jpg",
				"static/images/scene03_transition024.jpg",
				"static/images/scene03_transition025.jpg",
				"static/images/scene03_transition026.jpg",
				"static/images/scene03_transition027.jpg",
				"static/images/scene03_transition028.jpg",
				"static/images/scene03_transition029.jpg",
				"static/images/scene03_transition030.jpg",
				"static/images/scene03_transition031.jpg",
				"static/images/scene03_transition032.jpg"
			]
		},
		{
			name:"scene04", 
			destination: "scene05", 
			fixesRequired: 1, 
			fixesCounter: 0,
			canChangeToNextScene: false, 
			backgroundImage: "",
			clickableImgs: [
				{ 
					img1Url: "static/images/scene04__unfixed.jpg", 
					img2Url: "static/images/scene04__fixed.jpg", 
					img1:"",
					img2: "",
					x: 0, 
					y: 0
				}
			],
			transitionImgs:[
				"static/images/scene04_transition00.jpg",
				"static/images/scene04_transition01.jpg",
				"static/images/scene04_transition02.jpg",
				"static/images/scene04_transition03.jpg",
				"static/images/scene04_transition04.jpg",
				"static/images/scene04_transition05.jpg",
				"static/images/scene04_transition06.jpg",
				"static/images/scene04_transition07.jpg",
				"static/images/scene04_transition08.jpg",
				"static/images/scene04_transition09.jpg",
				"static/images/scene04_transition010.jpg",
				"static/images/scene04_transition011.jpg",
				"static/images/scene04_transition012.jpg",
				"static/images/scene04_transition013.jpg",
				"static/images/scene04_transition014.jpg",
				"static/images/scene04_transition015.jpg",
				"static/images/scene04_transition016.jpg",
				"static/images/scene04_transition017.jpg",
				"static/images/scene04_transition018.jpg",
				"static/images/scene04_transition019.jpg",
				"static/images/scene04_transition020.jpg",
				"static/images/scene04_transition021.jpg"
			]
		},
		{
			name:"scene05", 
			destination: "scene06", 
			fixesRequired: 1, 
			fixesCounter: 0,
			canChangeToNextScene: false, 
			backgroundImage: "",
			clickableImgs: [
				{ 
					img1Url: "static/images/scene05__unfixed.jpg", 
					img2Url: "static/images/scene05__fixed.jpg", 
					img1:"",
					img2: "",
					x: 0, 
					y: 0
				}
			],
			transitionImgs:[
				"static/images/scene05_transition00.jpg",
				"static/images/scene05_transition01.jpg",
				"static/images/scene05_transition02.jpg",
				"static/images/scene05_transition03.jpg",
				"static/images/scene05_transition04.jpg",
				"static/images/scene05_transition05.jpg",
				"static/images/scene05_transition06.jpg",
				"static/images/scene05_transition07.jpg",
				"static/images/scene05_transition08.jpg",
				"static/images/scene05_transition09.jpg",
				"static/images/scene05_transition010.jpg",
				"static/images/scene05_transition011.jpg",
				"static/images/scene05_transition012.jpg",
				"static/images/scene05_transition013.jpg",
				"static/images/scene05_transition014.jpg",
				"static/images/scene05_transition015.jpg",
				"static/images/scene05_transition016.jpg"
			]
		},
		{
			name:"scene06", 
			destination: "scene07", 
			fixesRequired: 1, 
			fixesCounter: 0,
			canChangeToNextScene: false, 
			backgroundImage: "",
			clickableImgs: [
				{ 
					img1Url: "static/images/scene06__unfixed.jpg", 
					img2Url: "static/images/scene06__fixed.jpg", 
					img1:"",
					img2: "",
					x: 0, 
					y: 0
				}
			],
			transitionImgs:[
				"static/images/scene06_transition00.jpg",
				"static/images/scene06_transition01.jpg",
				"static/images/scene06_transition02.jpg",
				"static/images/scene06_transition03.jpg",
				"static/images/scene06_transition04.jpg",
				"static/images/scene06_transition05.jpg",
				"static/images/scene06_transition06.jpg",
				"static/images/scene06_transition07.jpg",
				"static/images/scene06_transition08.jpg",
				"static/images/scene06_transition09.jpg",
				"static/images/scene06_transition010.jpg"
			]
		},
		{
			name:"scene07", 
			destination: "scene08", 
			fixesRequired: 1, 
			fixesCounter: 0,
			canChangeToNextScene: false, 
			backgroundImage: "",
			clickableImgs: [
				{ 
					img1Url: "static/images/scene07__unfixed.jpg", 
					img2Url: "static/images/scene07__fixed.jpg", 
					img1:"",
					img2: "",
					x: 0, 
					y: 0
				}
			],
			transitionImgs:[
				"static/images/scene07_transition00.jpg",
				"static/images/scene07_transition01.jpg"
			]
		},
		{
			name:"scene08", 
			destination: "scene09", 
			fixesRequired: 1, 
			fixesCounter: 0,
			canChangeToNextScene: false, 
			backgroundImage: "",
			clickableImgs: [
				{ 
					img1Url: "static/images/scene08__unfixed.jpg", 
					img2Url: "static/images/scene08__fixed.jpg", 
					img1:"",
					img2: "",
					x: 0, 
					y: 0
				}
			],
			transitionImgs:[
				"static/images/scene08_transition00.jpg",
				"static/images/scene08_transition01.jpg",
				"static/images/scene08_transition02.jpg",
				"static/images/scene08_transition03.jpg",
				"static/images/scene08_transition04.jpg",
				"static/images/scene08_transition05.jpg",
				"static/images/scene08_transition06.jpg",
				"static/images/scene08_transition07.jpg",
			]
		},
		{
			name:"scene09", 
			destination: "scene010", 
			fixesRequired: 1, 
			fixesCounter: 0,
			canChangeToNextScene: false, 
			backgroundImage: "",
			clickableImgs: [
				{ 
					img1Url: "static/images/scene09__unfixed.jpg", 
					img2Url: "static/images/scene09__fixed.jpg", 
					img1:"",
					img2: "",
					x: 0, 
					y: 0
				}
			],
			transitionImgs:[
				"static/images/scene09_transition00.jpg",
				"static/images/scene09_transition01.jpg",
				"static/images/scene09_transition02.jpg",
				"static/images/scene09_transition03.jpg",
				"static/images/scene09_transition04.jpg",
				"static/images/scene09_transition05.jpg",
				"static/images/scene09_transition06.jpg",
				"static/images/scene09_transition07.jpg",
				"static/images/scene09_transition08.jpg",
				"static/images/scene09_transition09.jpg",
				"static/images/scene09_transition010.jpg",
				"static/images/scene09_transition011.jpg",
				"static/images/scene09_transition012.jpg",
				"static/images/scene09_transition013.jpg",
				"static/images/scene09_transition014.jpg",
				"static/images/scene09_transition015.jpg",
				"static/images/scene09_transition016.jpg",
				"static/images/scene09_transition017.jpg",
				"static/images/scene09_transition018.jpg",
				"static/images/scene09_transition019.jpg",
				"static/images/scene09_transition020.jpg",
				"static/images/scene09_transition021.jpg",
				"static/images/scene09_transition022.jpg",
				"static/images/scene09_transition023.jpg",
				"static/images/scene09_transition024.jpg",
				"static/images/scene09_transition025.jpg",
				"static/images/scene09_transition026.jpg",
				"static/images/scene09_transition027.jpg"

			]
		},
		{
			name:"scene010", 
			destination: "scene011", 
			fixesRequired: 1, 
			fixesCounter: 0,
			canChangeToNextScene: false, 
			backgroundImage: "",
			clickableImgs: [
				{ 
					img1Url: "static/images/scene010__unfixed.jpg", 
					img2Url: "static/images/scene010__fixed.jpg", 
					img1:"",
					img2: "",
					x: 0, 
					y: 0
				}
			],
			transitionImgs:[
				"static/images/scene010_transition00.jpg",
				"static/images/scene010_transition01.jpg",
				"static/images/scene010_transition02.jpg",
				"static/images/scene010_transition03.jpg",
				"static/images/scene010_transition04.jpg",
				"static/images/scene010_transition05.jpg",
				"static/images/scene010_transition06.jpg",
				"static/images/scene010_transition07.jpg",
				"static/images/scene010_transition08.jpg",

			]
		},
		{
			name:"scene011", 
			destination: "scene012", 
			fixesRequired: 1, 
			fixesCounter: 0,
			canChangeToNextScene: false, 
			backgroundImage: "",
			clickableImgs: [
				{ 
					img1Url: "static/images/scene011__unfixed.jpg", 
					img2Url: "static/images/scene011__fixed.jpg", 
					img1:"",
					img2: "",
					x: 0, 
					y: 0
				}
			],
			transitionImgs:[
				"static/images/scene011_transition00.jpg",
				"static/images/scene011_transition01.jpg",
				"static/images/scene011_transition02.jpg",
				"static/images/scene011_transition03.jpg",
				"static/images/scene011_transition04.jpg",
				"static/images/scene011_transition05.jpg",
				"static/images/scene011_transition06.jpg",
				"static/images/scene011_transition07.jpg",
				"static/images/scene011_transition08.jpg",
				"static/images/scene011_transition09.jpg",
				"static/images/scene011_transition010.jpg",
				"static/images/scene011_transition011.jpg",
				"static/images/scene011_transition012.jpg",
				"static/images/scene011_transition013.jpg",
				"static/images/scene011_transition014.jpg",
				"static/images/scene011_transition015.jpg",
				"static/images/scene011_transition016.jpg",
				"static/images/scene011_transition017.jpg",
				"static/images/scene011_transition018.jpg",
				"static/images/scene011_transition019.jpg",
				"static/images/scene011_transition020.jpg",
				"static/images/scene011_transition021.jpg",
				"static/images/scene011_transition022.jpg",
				"static/images/scene011_transition023.jpg",
				"static/images/scene011_transition024.jpg",
				"static/images/scene011_transition025.jpg",
				"static/images/scene011_transition026.jpg",
				"static/images/scene011_transition027.jpg",
				"static/images/scene011_transition028.jpg",
				"static/images/scene011_transition029.jpg",
				"static/images/scene011_transition030.jpg",
				"static/images/scene011_transition031.jpg",
				"static/images/scene011_transition032.jpg",
				"static/images/scene011_transition033.jpg",
				"static/images/scene011_transition034.jpg",
				"static/images/scene011_transition035.jpg",
				"static/images/scene011_transition036.jpg",
				"static/images/scene011_transition037.jpg",
				"static/images/scene011_transition038.jpg",
				"static/images/scene011_transition039.jpg",
				"static/images/scene011_transition040.jpg",
				"static/images/scene011_transition041.jpg",
				"static/images/scene011_transition042.jpg",
				"static/images/scene011_transition043.jpg",
				"static/images/scene011_transition044.jpg",
				"static/images/scene011_transition045.jpg",
				"static/images/scene011_transition046.jpg",
				"static/images/scene011_transition047.jpg",
				"static/images/scene011_transition048.jpg",
				"static/images/scene011_transition049.jpg"

			]
		},
	]
}