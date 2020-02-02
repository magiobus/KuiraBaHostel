// OBJECT FOR Transition IMAGES...
class TransitionImg {
  constructor(urlArray){
    this.urlArray = urlArray;
    this.x = 0;
    this.y = 0;
  }

  show(url){
      image(url, this.x, this.y)
  }

  startTransition(){
    console.log("comienza transición")
    this.show(this.urlArray[0])
    // for(let i = 0; i<this.urlArray.length; i++){

    // }
  }

  finishTransition(){

  }

}