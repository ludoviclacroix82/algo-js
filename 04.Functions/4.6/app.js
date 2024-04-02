(() => {

    let result = 1;

    function factorial(a){

        if(a!==0){ // une fois que 
            result *= a;
            factorial(a-1);
            // on appel la function , car on a demander une fonction recursive 
        }
        return result;

    }
    document.write(factorial(5));

})(); 