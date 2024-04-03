(() => {

    document.write(rand10());

    /**
     * Fonction renvoie un entier aléatoire compris entre 1 et 10.
     * @returns {randomNumber} retourne un nombre aléatoire compris entre 1 & 10
     */
    function rand10(){
        
        randomNumber = Math.floor((Math.random()*10)+1); 
        return randomNumber;

    }

})();