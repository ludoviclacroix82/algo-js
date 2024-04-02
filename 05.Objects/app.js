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

      askTvSerie(serieTv);
      randomizeCast(serie);

      let serieTv = new Object();

      function askTvSerie(myObject){


        let serie = window.prompt("Nom de la serie : ");
        myObject["serieName"] = serie;

        let production = window.prompt("Année de production : ");
        myObject["productionYear"] = production;

        myObject["actor.name"] = [];

       do {

            let actorName = window.prompt("Acteur/Actrice ");
            myObject["actor.name"].push(actorName);
            var addActor = confirm("Voullez-vous ajouter d'autre acteur/actrice");
        } while (addActor === true);        
        
      }
 

      function randomizeCast(serie){

        document.write("Nom de la Série : " + serie["serieName"] + "<br>");
        document.write("Année de production: " + serie["productionYear"] +"<br>");
        document.write("Acteurs/Actrices : "<br>") ;

        for (let i = serie["actor.name"].length ; i <0; i--) {
            
            
        }


        document.write("Acteurs/Actrices : " + serie["actor.name"]+"<br>") ;

      }            
      

})(); 