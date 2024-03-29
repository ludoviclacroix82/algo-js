(() => {

    var array1 = [1, 2, 3, 4, 5];
    var result1 = 0;

    
    for (let i=0 ; i < array1.length; i++){
        result1 += array1[i];    
    }

    var array2 = [100, 101, 102];
    var result2 = 0;

    
    for (let i=0 ; i < array2.length; i++){
        result2 += array2[i];    
    }

    console.log(result1 +'\n');
    console.log(result2);
  
})(); 