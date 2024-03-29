(() => {

    do {
        var favoriteNum = window.prompt(" Your favorite number ?");
        if(parseInt(favoriteNum) !==42)
            alert("Are you sure?");
    } while (parseInt(favoriteNum) !== 42);    
        

})(); 