(() => {

    do {
        var lengthNumber = window.prompt('Length');
    } while (isNaN(lengthNumber));
    do {
        var widthNumber = window.prompt('Width');
    } while (isNaN(widthNumber));

    

    document.write(calcSurface(lengthNumber, widthNumber)); 

   /**
    * Fonction pour calculer la surface d'un rectangle.
    * @param {number} length - La longueur du rectangle.
    * @param {number} width - La largeur du rectangle.
    * @returns {number} La surface du rectangle.
    */ 
    function calcSurface(length, width){
        let surface = 0;

        lenght = parseInt(length); 
        width = parseInt(width); 

        surface = length * width; 

        return surface;
    }

})(); 