(() => {

    class Circle{

        constructor(xPos,yPos,radius){
            this.xPos = xPos;
            this.yPos = yPos;
            this.radius = radius;            
        }
        move(xOffset, yOffset){
            this.xPos += xOffset;
            this.yPos += yOffset; 

            return "Xposition:"+ this.xPos + "/ Yposition :" + this.yPos;
        }
        get surface(){
            return "Surface : "+Math.PI*Math.pow(this.radius,2);
        }
    }

    let circle = new Circle(25,60,80);
    console.log(circle.move(15,20));
    console.log(circle.surface);

})(); 