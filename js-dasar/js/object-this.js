// global scope
// this return window object
var a = 10;
console.log(this.a);

// using function declaration
// this return global object / window
function halo(){
    console.log(this);
    console.log('halo');
}
this.halo();

// using object literal
// this return the said created object
var obj ={};
obj.halo = function(){
    console.log (this);
    console.log('halo');
}
obj.halo();

// using constructor
// this return the newly created object
function Halo(){
    console.log(this);
    console.log('halo');
}
var obj1 = new Halo();
var obj2 = new Halo();