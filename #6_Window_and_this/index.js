var a = 10;

function b() {
    var x = 20;
    console.log(x); // can access local variable 'x'
}

//All these return the same output 10.

console.log(window.a);
console.log(a);
console.log(this.a);


// this === window -> true