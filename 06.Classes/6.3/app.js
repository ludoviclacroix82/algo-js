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

    var numFor = 1000;

    function numberRandom(){

        number = Math.floor((Math.random()*100)+1);
        return number;
    }

    for (let i = 0; i < numFor; i++) {
        
        let rectXpos = numberRandom();
        let rectYpos = numberRandom();
        let rectWidth = numberRandom();
        let rectLength = numberRandom();

        let rectangle1 = new Rectangle(rectXpos,rectYpos,rectWidth,rectLength);

        let rect2Xpos = numberRandom();
        let rect2Ypos = numberRandom();
        let rect2Width = numberRandom();
        let rect2Length = numberRandom();

        let rectangle2 = new Rectangle(rect2Xpos,rect2Ypos,rect2Width,rect2Length);

        console.log(rectangle1.collides(rectangle2));
    }

})(); 