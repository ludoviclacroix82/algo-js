(() => {

    let i =1 
    let paireWhile = "";
    let paireFor = ""

    while (i <= 100){

        if(i % 2 === 0)
            paireWhile += i;
        i++;
    }
    
    for (let i = 1; i <= 100; i++) {
        if(i % 2 === 0)
            paireFor += i;
      }
      console.log(paireWhile + "\n"+paireFor);
})();