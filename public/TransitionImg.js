// OBJECT FOR Transition IMAGES...
class TransitionImg {
  constructor(urlArray){
    this.urlArray = urlArray;
    this.image = this.urlArray[0]
    this.x = 0;
    this.y = 0;
  }

  show(url){
      image(this.image , this.x, this.y)
  }

  startTransition(){
    console.log("comienza transición")
    this.show(this.image)
    for(let i = 1; i<this.urlArray.length; i++){
      console.log("iiiiii =>", i)
      this.updateTransitionImage(i)
    }
  }

  updateTransitionImage(i){
    let that = this;
    setTimeout(function(i) { 
      // Add tasks to do 
      console.log("that.urlArray[i] =>",  that.urlArray)
      console.log("i =>", i)
      that.image = that.urlArray[i]

      console.log("that image =>", that.image)
      redraw()
    }, 1000 * i); 
  }

  finishTransition(){

  }

}