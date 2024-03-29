(() => {

var array =  [1,2,3,4,5,6,7,8,9];
var arrayPush = [];


for (let i = 0; i < array.length; i++) {
    arrayPush.push(array[i]);
    
}
console.log(arrayPush);

var array2 = array;

console.log(array2);

})(); 