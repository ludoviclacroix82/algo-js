(() => {
    let result="";

    let age = window.prompt("Votre Age ?","");

    result = (age >= 18)?"You are an adult":"You are not yet an adult";

    document.write (result);

})();