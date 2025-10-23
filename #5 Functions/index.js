var x = 1;
a();
b();
console.log(x); //Gives 1 

function a() {
    var x = 10;
    console.log(x); //Gives 10
}

function b() {
    var x = 100;
    console.log(x); // Gives 100
}
