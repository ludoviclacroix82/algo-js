(() => {

    var students = ["Ludovic","Denis","Adrien","Mohamed","Adrien B","Angel","Arnaud","Dorian","Stacy","Dylan"];
    let n = rand10(students.length,1) ;

    /**
     * Fonction renvoie un entier aléatoire compris entre 1 et 10.
     * @returns {randomNumber} retourne un nombre aléatoire compris entre 1 & 10
     */
    function rand10(max,num){ 
        
        randomNumber = Math.floor((Math.random()*max)+num);
        return randomNumber;

    }

    /**
     * Renvoyer un tableau d'apprenants sélectionnés au hasard
     * @param {*} inputAr tableau reprenant des Noms
     * @param {*} n nombre aléatoire entre 1 & 10 
     * @returns le nom d'un éleves du tableau inputAr
     */
    function pickLearner(inputAr, n){

        var result= [];
        let nameStudent = "";
       

        for (let i = 1; i <= n; i++) { 

            let studentsLength = students.length - 1 ;
            
            randomNumber = rand10(studentsLength,0);  
            nameStudent = inputAr[randomNumber] ;

                do {
                    randomNumber = rand10(studentsLength, 0);    
                    nameStudent = inputAr[randomNumber];
                } while (result.includes(nameStudent));   

            result.push(nameStudent);            
        }

        return result;
    }
    document.write(pickLearner(students, n));

})(); 