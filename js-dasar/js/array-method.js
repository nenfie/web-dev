// create array
var arr = ['Jakarta','Singapore','Bangkok','Manila','Kuala Lumpur','Hanoi'];

// length
console.log (arr.length);

// join
console.log(arr.join('-'));

// push
arr.push('Tokyo','Seoul');
console.log(arr);

// pop
arr.pop();
console.log(arr);

// shift
arr.shift();
console.log(arr);

// unshift
arr.unshift('London','Rome','Paris');
console.log(arr);

// splice
arr.splice(2,3,'New York');
console.log(arr);

// slice
var newArr = arr.slice(1,3);
console.log(newArr);

// forEach
var cetak = function(e,i){
    console.log ('Kota no' + (i+1) + ' adalah ' + e);    
}
arr.forEach(cetak);

// forEach shorthand 
arr.forEach(function(e,i){
    console.log ('City no' + (i+1) + ' is ' + e);
});

// map
var newArr = arr.map(function(e){
    return e;
});
console.log(newArr);

// sort
arr.sort();
console.log(arr);

// filter
var newArr = arr.filter(function(e){
    return e >= 'Manila';
})
console.log(newArr);

// find
var newArr = arr.find(function(e){
    return e >= 'Manila';
})
console.log(newArr);