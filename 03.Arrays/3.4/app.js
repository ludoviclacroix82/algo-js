(() => {

var array =  [2,3,1,9,4,6,7,5,8];
let min = null;
let max = null;

for (let i = 0; i < array.length; i++) {
    if(min === null || max === null){
        min = array[i];
        max = array[i];
    }else{

        if((min> array[i])){
            min = array[i];
        }
        if(max < array[i]){
            max = array[i];
        }
    }
}
console.log(array);
console.log("min:" + min);
console.log("min:" + max);

})(); 