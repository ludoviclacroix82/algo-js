(() => {

var day = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];

    do {
        var number = parseInt(window.prompt("enter a number between 1 and 7"));
    } while (number <=0 || number >= 8 || isNaN(number));

        number = number -1;
        alert(day[number]);    
})(); 