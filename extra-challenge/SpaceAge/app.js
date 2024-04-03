(() => {

    /**
     * La fonction renvoi l' ère spatiale sur cette planète.
     * @param {*} num - nombre de secondes
     * @param {*} planet - une planète qui peut être : Mercury, Venus, Earth, Marsou Jupiter. 
     * @returns retourne l' ère spatiale
     */
    function spaceAge(num,planet){

        let orbitalPeriod = 0 ;
        let calcul = 0;

          switch(planet){

            case "Mercury":
                orbitalPeriod = 0.2408467;
            break;

            case "Venus":
                orbitalPeriod = 0.61519726;
            break;

            case "Mars":
                orbitalPeriod = 1.8808158;
            break;

            case "Jupiter":
                orbitalPeriod = 11.862615;
            break;

            default:
                orbitalPeriod = 1 ;
          }
          
          calcul = (num/60/60/24/365.25) * orbitalPeriod;
          //return calcule +" Year(s)" ;    
          return (Number.isInteger(calcul)) ?calcul +" Year(s)":calcul.toFixed(2) +" Year(s)" ;
    }

    console.log(spaceAge(31557600, 'Earth'));
    console.log(spaceAge(157788000, 'Mercury'));
    console.log(spaceAge(5689258, 'Venus'));
    console.log(spaceAge(6895325, 'Mars'));
    console.log(spaceAge(2589458, 'Jupiter'));
         
})(); 