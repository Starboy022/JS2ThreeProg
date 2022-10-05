//Area of triangle
console.log("Area of the triangle: ");
let side1=5,side2=6,side3=7;
var s=(side1+side2+side3)/2;
console.log(Math.sqrt(s*((s-side1)*(s-side2)*(s-side3))));

//File name Extension
console.log("file name extension");
file_name="photo.jpeg";
console.log(file_name.split('.').pop());

//if else
function sumortriple(x,z){
    if(x==z){
        return 3*(x+z);
    }
    else{
        return (x+z);
    }
    }
    console.log(sumortriple(10, 30));
    console.log(sumortriple(5,5));
    console.log(sumortriple(10,10))

