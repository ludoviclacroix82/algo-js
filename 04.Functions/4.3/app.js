(() => {

    document.write(multiRand(rand10())); //j'ecris dans la page le resutlat de la fonction multiRand donc je recupere un numbre randoom via la foonction rand10

    function rand10(){
        
        randomNumber = Math.floor((Math.random()*10)+1); // je rcupere un nombre aléatoir entier entre 1 et 10
        return randomNumber;

    }

    function multiRand(n){

        let result = [] // creation d'un array

        for (let i = 1; i <= n; i++) { // Boucle de 1 a nombre random de la fonction rand10() 
            
            randomNumber = rand10(); // nombre random de 1 a 10 
            result.push(randomNumber); // j'ajoute le nombre ramdom au array.

        }
        return result;
    }

})(); 