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
         * @returns {number} 1 si collision, 0 sinon.
         */
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