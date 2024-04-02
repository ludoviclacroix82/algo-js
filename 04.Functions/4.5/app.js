(() => {


    function calcDistance(a0,b0,a1,b1){

        let result = Math.sqrt(Math.pow((a1-a0),2) + Math.pow((b1-b0),2));
        // Le résultat est la racine carrée (math.sqrt) de la somme des carrés (Math.pow) de a1-a0 & de b1-b0 
        return result;
    }


    document.write(calcDistance(1,1,2,2)+"<br>");
    document.write(calcDistance(1,1,3,1)+"<br>");
    document.write(calcDistance(4,1,1,1));
})(); 