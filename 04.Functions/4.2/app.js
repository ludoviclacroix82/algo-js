(() => {

    document.write(rand10());

    function rand10(){
        
        randomNumber = Math.floor((Math.random()*10)+1); // je rcupere un nombre aléatoir entier entre 1 et 10 
        return randomNumber;

    }

})();