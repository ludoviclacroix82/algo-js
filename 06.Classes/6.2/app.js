(() => {

    class Rectangle{
        constructor(topLeftXPos, topLeftYPos ,width , length){
            this.topLeftXPos = topLeftXPos;
            this.topLeftYPos = topLeftYPos;
            this.width = width;
            this.length = length;
        }
        collides(otherRectangle){
            
            let xPos = this.topLeftXPos + this.width;
            let yPos = this.topLeftYPos + this.length;

            let xPosOther = otherRectangle.topLeftXPos ;
            let yPosOther = otherRectangle.topLeftYPos ;

            return (xPosOther <= xPos && yPosOther <= yPos)?"collision !":"";

        }
    }

 let rectangle1 = new Rectangle(15,20,20,25);
 let rectangle2 = new Rectangle(25,30,25,20);

 let rectangle3 = new Rectangle(10,10,30,20);
 let rectangle4 = new Rectangle(45,35,10,15);
 
 console.log(rectangle1.collides(rectangle2));
 console.log(rectangle3.collides(rectangle4));

})(); 