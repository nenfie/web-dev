
// create new  array
var arr = ['Alisson','Van Dijk','Henderson','Firmino'];

console.log(arr);

// add array
var myArr = [];
myArr[0] = 'Laptop';
myArr[1] = 15;
myArr[3] = true;
myArr[5] = 'IPad';

console.log (myArr);

// remove array
var newArr = ['book','pen','bag'];
newArr[1] = undefined;

console.log(newArr);

// iterate through array
var nextArr = ['Paris','London','Milan'];
for (var i = 0; i < nextArr.length; i++){
    console.log('In index ' + i + ' value is ' + nextArr[i]);
}