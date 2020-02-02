// OBJECT FOR Transition IMAGES...
class TransitionImg {
  constructor(urlArray){
    this.urlArray = urlArray
    this.image = this.urlArray[0]
    this.x = 0;
    this.y = 0;
  }

  updateImage(newImg){
    this.image = newImg
    image(this.image , this.x, this.y)
  }
}