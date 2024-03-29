(() => {

    prompt();
   
    function checkCurrentMinMax(minNumber,maxNumber,currentNumber){

        minNumber = parseInt(minNumber);
        maxNumber = parseInt(maxNumber);
        currentNumber = parseInt(currentNumber);

            if(minNumber <  maxNumber){
                if (currentNumber < maxNumber && currentNumber > minNumber) 
                    alert( currentNumber + " est bien compris entre "+ minNumber +"&"+ maxNumber);
                else
                    alert( currentNumber + " n'est pas compris entre "+ minNumber +"&"+ maxNumber) ;
            }else{
                alert('Le nombre minimal est plus grand que le maximal');
                prompt();
            }         
    }

    function prompt(){        
        do {
            var minNumber = window.prompt("Donnez un nombre minimal");
        } while (isNaN(minNumber));

        do {
            var maxNumber = window.prompt("Donnez un nombre maximal");
        } while (isNaN(minNumber));

        do {
            var currentNumber =  window.prompt("Donnez un nombre");
        } while (isNaN(minNumber));
       

        checkCurrentMinMax(parseInt(minNumber),parseInt(maxNumber),parseInt(currentNumber));
    }
    

})();