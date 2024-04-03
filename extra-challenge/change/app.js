(() => {

    let price = 160;
    let moneyHanded = 500;

    const change1 = computeChange(price,moneyHanded)

    /**
     * fonction qui calcule le montant a rendre au client.
     * @param {*} price - le prix 
     * @param {*} moneyHanded - l'argnet que le client donne
     * @var change - tableau pour la resitution des billet & coin 
     * @var money - billet & coin
     * @var noMoney - billet & coin manquant dans la caisse
     * @returns 
     */
    function computeChange(price,moneyHanded){

        let changeMoney = moneyHanded - price; 
        let changeRecap = changeMoney.toFixed(2); 
        var change= []; 
        var money = [500,200,100,50,20,10,5,2,1,0.50,0.20,0.10,0.05,0.02]; 
        var noMoney = [200,20]; 

        if(changeMoney === 0){ 
            return "Compte juste !";
        }else if(changeMoney<0){ 
            return "Vous n'avez pas donné assez !"
        }else{

            
            for (let i = 0; i < money.length; i++) {
                if(noMoney.includes(money[i]) !== true){ 
                    let moneyCheck = Math.floor(changeMoney / money[i]); 
                    if(moneyCheck !==0 ){
                        let numberMoney = moneyCheck * money[i];                  
                        changeMoney -=(numberMoney);

                        if(money[i] < 1 )
                            change.push(moneyCheck + "x" + money[i].toFixed(2)); 
                        else
                            change.push(moneyCheck + "x" + money[i]);
                        
                        changeMoney = changeMoney.toFixed(2); 
                    }  
                }          
            } 
            return  changeRecap +" = " + change;
        }
    }
    console.log(change1);
})(); 