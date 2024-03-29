(() => {

let result = 0 ;

do {
    var n = window.prompt(" Enter a number ?");
} while (isNaN(n));

n = parseInt(n);

for (let i = 1; i <= n ; i++) {

    do {
        var number = window.prompt(" Enter a number ?");
    } while (isNaN(number));

    result += parseInt(number) ;
}
alert(result);
    
})(); 