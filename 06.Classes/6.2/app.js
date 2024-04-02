(() => {

    class Rectangle{
        constructor(topLeftXPos, topLeftYPos ,width , length){
            this.topLeftXPos = topLeftXPos;
            this.topLeftYPos = topLeftYPos;
            this.width = width;
            this.length = length;
        }
        collides(otherRectangle){
            this.topLeftXPos = otherRectangle.topLeftXPos;
            this.topLeftYPos = otherRectangle.topLeftYPos;
            this.width = otherRectangle.width;
            this.length = otherRectangle.length;
        }
    }

 let rectangle1 = new Rectangle (5,5,10,15);
 let rectangle2 = new Rectangle (20,20,15,10);

 console.log(rectangle1.collides());

})(); 