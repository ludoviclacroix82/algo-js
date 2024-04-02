(() => {

    var students = ["Ludovic","Denis","Adrien","Mohamed","Adrien B","Angel","Arnaud","Dorian","Stacy","Dylan"];
    let n = rand10(students.length,1) ;


    function rand10(max,num){ // function rand10 avec 2 params valeur max du random (max) & (n) = 0  le ramdom commencrea pas 0 
        
        randomNumber = Math.floor((Math.random()*max)+num);
        return randomNumber;

    }

    function pickLearner(inputAr, n){

        var result= [];
        let nameStudent = "";
       

        for (let i = 1; i <= n; i++) { // boucle de 1 a la valeur n -> number random.

            let studentsLength = students.length - 1 ; // Récupère la longueur de students et soustrais 1 car la première valeur du tableau commence à 0.
            
            randomNumber = rand10(studentsLength,0);  // Appelle la fonction rand10 avec un paramètre de la longueur du tableau students & 0 pour que le nombre aléatoire soit compris entre 0 et la longueur du tableau students.
            nameStudent = inputAr[randomNumber] ;

                do {
                    randomNumber = rand10(studentsLength, 0);    
                    nameStudent = inputAr[randomNumber];
                } while (result.includes(nameStudent));   
                // Je vérifie si le nom de l'étudiant existe déjà dans le tableau resultat, si oui je boucle.
                // J'évite une redondance dans le tableau resultat.

            result.push(nameStudent);            
        }

        return result;
    }
    document.write(pickLearner(students, n));

})(); 