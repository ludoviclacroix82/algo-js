(() => {

    let i =1 
    let result = "";
    let division ="";
    let multip ="";


    while (i <= 100){

        if(i % 2 !== 0){
            multip = i * 3 ;
            result += multip + "-"

        }else{
            division = i / 2 ;
            result += division + "-";
        }
        
            
        i++;
    }
    
    console.log(result);
})();