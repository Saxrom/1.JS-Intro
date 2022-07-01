var date=new Date().getHours();

//Task-1

if(date>6 && date<12){
    alert('Good morning')
    document.body.style.backgroundColor = 'Bisque'
}

else if(date>12 && date<18){
    alert('Good afternoon')
    document.body.style.backgroundColor = 'Yellow'
}

else{
    alert('Good evening')
    document.body.style.backgroundColor = 'Black'
}

//Task-2

//Area of Cirlce
var radius=3
console.log('Aread of Circle: ' + Math.round(Math.PI*Math.pow(radius,2)))

//Area of Square
var side=10
console.log('Area of Square: ' +Math.pow(side,2))