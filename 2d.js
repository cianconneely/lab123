//declare Variables

const ages = [25, 31, 42, 77];

//Use a Map Function
let d = ages.map((item)=>{

    //multiplys by 2 if item less than 70
    if(item < 70){
return item * 2;}

//returns if over 70
else {
return item;
}

})

//output 
console.log(d)
