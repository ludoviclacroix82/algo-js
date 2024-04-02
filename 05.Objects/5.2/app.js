(() => {

   /* let serieTv = {
        
        "serieName": "",
        "productionYear":"",
        "actor": [
            {
                name:""
            },
            {
                name:""
            }
        ]

      };*/

      let serieTv = new Object();

      function askTvSerie(myObject){


        let serie = window.prompt("Nom de la serie : ");
        myObject["serieName"] = serie;

        let production = window.prompt("Année de production : ");
        myObject["productionYear"] = production;

        myObject["actor"] = [];

       do {
            let actorName = window.prompt("Acteur/Actrice ");
            myObject["actor"].push(actorName);
            var addActor = confirm("Voullez-vous ajouter d'autre acteur/actrice");
        } while (addActor === true);
        
        //myObject["actor"].reverse();
        
      }


      function randomizeCast(tvSerie){
        tvSerie["actor"].reverse();
        let JsonFormat = JSON.stringify(tvSerie);
        document.write(JsonFormat);

      }

      askTvSerie(serieTv);
      randomizeCast(serieTv);
      

})(); 