(() => {

    document.write(multiRand(rand10())); //j'ecris dans la page le resutlat de la fonction multiRand donc je recupere un numbre randoom via la foonction rand10

    function rand10(){
        
        randomNumber = Math.floor((Math.random()*10)+1); // je rcupere un nombre aléatoir entier entre 1 et 10
        return randomNumber;

    }
    /**
     *  Demandera le nombre de nombres aléatoires à générer, puis affichera ce même nombre de nombres aléatoires.
     * @param {*} n Nombre 
     * @param {*} result Tableau qui va récupéré les nombres aléatoires.
     * @returns le tableau "result"
     */
    function multiRand(n){

        let result = [] 

        for (let i = 1; i <= n; i++) {  
            
            randomNumber = rand10(); // nombre random de 1 a 10 
            result.push(randomNumber); // j'ajoute le nombre ramdom au array.

        }
        return result;
    }

})(); 