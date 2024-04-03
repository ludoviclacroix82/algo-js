(() => {

    let result = 1;

    /**
     * Fonction pour calculer le factoriel d'un nombre.
     * @param {number} a - Le nombre dont on souhaite calculer le factoriel.
     * @returns {number} Le factoriel du nombre.
     */
    function factorial(a){

        if(a!==0){ 
            result *= a;
            factorial(a-1);
            
        }
        return result;

    }
    document.write(factorial(5));

})(); 