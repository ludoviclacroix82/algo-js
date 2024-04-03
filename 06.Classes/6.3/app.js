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

            let checkCollision = (xPosOther <= xPos && yPosOther <= yPos)?1:0;
            return checkCollision;
        }
    }

    var numFor = 1000;
    var tabRectangle = [];
    let numCollision = 0;

    function numberRandom(){

        number = Math.floor((Math.random()*100)+1);
        return number;
    }

    for (let i = 0; i < numFor; i++) {
        
        let rectXpos = numberRandom();
        let rectYpos = numberRandom();
        let rectWidth = numberRandom();
        let rectLength = numberRandom();

        let rectangle = new Rectangle(rectXpos,rectYpos,rectWidth,rectLength);
        tabRectangle.push(rectangle);        

    }

    for (let i = 0; i < tabRectangle.length; i++) {
        for (let y = 1; y < tabRectangle.length -1; y++) {
            if(i !== y)
                numCollision += tabRectangle[i].collides(tabRectangle[y]);
        }      
    }

    console.log(numCollision + " Collision(s)");
})(); 