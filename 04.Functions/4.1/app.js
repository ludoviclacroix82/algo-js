(() => {

    do {
        var lengthNumber = window.prompt('Length');
    } while (isNaN(lengthNumber));
    do {
        var widthNumber = window.prompt('Width');
    } while (isNaN(widthNumber));

    

    document.write(calcSurface(lengthNumber, widthNumber)); // j'appel la fucntion calcSurface et je recupere les 2 param. des 2 prompts

   
    function calcSurface(length, width){
        let surface = 0;

        lenght = parseInt(length); // je convertit la varial en entier 
        width = parseInt(width); // je convertit la varial en entier 

        surface = length * width; // je multiplie les 2 variables pour avoir la surface 

        return surface;
    }

})(); 