(() => {

    let price = 160;
    let moneyHanded = 500;

    const change1 = computeChange(price,moneyHanded)

    function computeChange(price,moneyHanded){

        let changeMoney = moneyHanded - price; // calcule pour trouver le monatnt a rendre
        let changeRecap = changeMoney.toFixed(2); // valeur tampon pour le montant a rendre
        var change= []; // tab pour la resitution des billet & coin
        var money = [500,200,100,50,20,10,5,2,1,0.50,0.20,0.10,0.05,0.02]; // billet & coin
        var noMoney = [200,20]; // money manquant dans la caisse

        if(changeMoney === 0){ // si le client donne le compte juste
            return "Compte juste !";
        }else if(changeMoney<0){ // si celui-ci ne donne pas assez
            return "Vous n'avez pas donné assez !"
        }else{

            for (let i = 0; i < money.length; i++) {
                if(noMoney.includes(money[i]) !== true){ // check si le billet ou coin est manquant ou pas dans la caisse.
                    let moneyCheck = Math.floor(changeMoney / money[i]); // verifier combien de billet ou coin il ya dans le montant
                    if(moneyCheck !==0 ){
                        let numberMoney = moneyCheck * money[i];   // calcule pour soustraire au montant                 
                        changeMoney -=(numberMoney);

                        if(money[i] < 1 )
                            change.push(moneyCheck + "x" + money[i].toFixed(2)); // ajout dans la tab le nombre de restitution
                        else
                            change.push(moneyCheck + "x" + money[i]);
                        
                        changeMoney = changeMoney.toFixed(2); // fixe le montant a 2 décimale
                    }  
                }          
            } 
            return  changeRecap +" = " + change;
        }
    }
    console.log(change1);
})(); 