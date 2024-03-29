(() => {

    prompt();
   
    function checkCurrentMinMax(minNumber,maxNumber,currentNumber){

        if( minNumber >0 && maxNumber >0 && currentNumber >0){

            if(minNumber <  maxNumber){
                if (currentNumber < maxNumber && currentNumber > minNumber) 
                    alert( currentNumber + " est bien compris entre "+ minNumber +"&"+ maxNumber);
                else
                    alert( currentNumber + " n'est pas compris entre "+ minNumber +"&"+ maxNumber) ;
            }else{
                alert('Le nombre minimal est plus grand que le maximal');
                prompt();
            }         
    
        }else{
            alert("Une valeur n'est pas un nombre");
            prompt();
        }
    }

    function prompt(){        
        let minNumber = parseInt(window.prompt("Donnez un nombre minimal"));
        let maxNumber = parseInt(window.prompt("Donnez un nombre maximal"));
        let currentNumber = parseInt( window.prompt("Donnez un nombre"));

        checkCurrentMinMax(minNumber,maxNumber,currentNumber);
    }
    

})();