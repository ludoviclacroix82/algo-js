(() => {

    /**
    * Classe représentant un cercle avec une position (x, y) et un rayon.
    */
    class Circle{
        /**
         * Crée une instance de Circle.
         * @param {number} xPos - La position en x du centre du cercle.
         * @param {number} yPos - La position en y du centre du cercle.
         * @param {number} radius - Le rayon du cercle.
         */
        constructor(xPos,yPos,radius){
            this.xPos = xPos;
            this.yPos = yPos;
            this.radius = radius;            
        }
        /**
         * Déplace le cercle selon les décalages donnés.
         * @param {number} xOffset - Le décalage en x.
         * @param {number} yOffset - Le décalage en y.
         * @returns {string} Les nouvelles positions du cercle.
         */
        move(xOffset, yOffset){
            this.xPos += xOffset;
            this.yPos += yOffset; 

            return "Xposition:"+ this.xPos + "/ Yposition :" + this.yPos;
        }
        /**
         * Calcule la surface du cercle.
         * @returns {string} La surface du cercle.
         */
        get surface(){
            return "Surface : "+Math.PI*Math.pow(this.radius,2);
        }
    }

    let circle = new Circle(25,60,80);
    console.log(circle.move(15,20));
    console.log(circle.surface);

    
})(); 