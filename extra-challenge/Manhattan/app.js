(() => {

    console.log(manhattan(1, 1, 2, 2));
    console.log(manhattan(1, 1, 1, 1));
    console.log(manhattan(5, 4, 3, 2));

    /**
     * Fonction pour calculer la distance de Manhattan entre deux points dans une grille.
     * @param {number} streetA - Le numéro de rue du premier point.
     * @param {number} avenueA - Le numéro d'avenue du premier point.
     * @param {number} streetB - Le numéro de rue du deuxième point.
     * @param {number} avenueB - Le numéro d'avenue du deuxième point.
     * @returns {number} La distance de Manhattan entre les deux points.
     */
    function manhattan (streetA,avenueA,streetB,avenueB){

        let street = 0;
        let avenue = 0;

        if(streetA > streetB)
            street = streetA - streetB;
        else
            street = streetB - streetA;

        if(avenueA > avenueB)
            avenue = avenueA - avenueB;
        else    
            avenue = avenueB - avenueA;
        

        let distance = street + avenue;
 
        return distance;

    }

})(); 