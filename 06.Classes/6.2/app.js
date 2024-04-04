(() => {
    /**
    * Classe représentant un rectangle avec un coin supérieur gauche, une largeur et une longueur.
    */
    class Rectangle{
        /**
         * Crée une instance de Rectangle.
         * @param {number} topLeftXPos - La position en x du coin supérieur gauche du rectangle.
         * @param {number} topLeftYPos - La position en y du coin supérieur gauche du rectangle.
         * @param {number} width - La largeur du rectangle.
         * @param {number} length - La longueur du rectangle.
         */
        constructor(topLeftXPos, topLeftYPos ,width , length){
            this.topLeftXPos = topLeftXPos;
            this.topLeftYPos = topLeftYPos;
            this.width = width;
            this.length = length;
        }
        /**
         * Vérifie s'il y a une collision entre ce rectangle et un autre rectangle donné.
         * @param {Rectangle} otherRectangle - L'autre rectangle avec lequel vérifier la collision.
         * @returns {string} Un message indiquant s'il y a collision ou non.
         */
        collides(otherRectangle){
            
            let  checkCollision =0;

            let xPos = this.topLeftXPos + this.width;
            let yPos = this.topLeftYPos + this.length; 

            let xPosOther = otherRectangle.topLeftXPos + otherRectangle.width ;
            let yPosOther = otherRectangle.topLeftYPos + otherRectangle.length ;

       
            if(this.topLeftXPos < xPosOther && xPos > otherRectangle.topLeftXPos &&
                this.topLeftYPos < yPosOther && yPos > otherRectangle.topLeftYPos){
                     checkCollision = 1;
                }
            return checkCollision;

        }
    }

 let rectangle1 = new Rectangle(15,20,20,25);
 let rectangle2 = new Rectangle(25,30,25,20);

 let rectangle3 = new Rectangle(10,10,30,20);
 let rectangle4 = new Rectangle(45,35,10,15);
 
 console.log(rectangle1.collides(rectangle2));
 console.log(rectangle3.collides(rectangle4));

})(); 