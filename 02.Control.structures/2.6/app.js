(() => {

var day = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];

    do {
        var number = window.prompt("enter a number between 1 and 7");
    } while ((isNaN(number)) || ((parseInt(number) > 0) && (parseInt(number < 8))));

        number = number -1;
        alert(day[number]);    
})(); 