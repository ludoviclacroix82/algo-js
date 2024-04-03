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


      /**
       * fonction qui demandera à l'utilisateur les données suivantes sur sa série télévisée préférée :
       * @param {*} myObject - L'objet dans lequel stocker les informations sur la série.
       * @param {*} serie - Stock le nom de la serie que l'utilisateur a encodé.
       * @param {*} production - Stock l'année de production que l'utilisateur a encodé.
       * @param {*} actor - Tableau qui va stock les nom des acteurs encodés par l'utilisateur.
       */
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
       
      }
      
      
      askTvSerie(serieTv);
      let JsonFormat = JSON.stringify(serieTv);
      document.write(JsonFormat);

})(); 