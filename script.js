var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width= canvas.scrollWidth;
canvas.height= canvas.scrollHeight;
ctx.height= ctx.scrollWidth;
ctx.height= ctx.scrollHeight;

//kotak1
ctx.beginPath();
ctx.moveTo(170,80);
ctx.rect(188,150,130,200);
ctx.fillStyle = 'yellow';
ctx.fill();
// ctx.strokeStyle = 'black';
// ctx.stroke();


//tutup
ctx.beginPath();
ctx.moveTo(170,80);
ctx.rect(188,140,130,20);
ctx.fillStyle = 'blue';
ctx.fill();
// ctx.strokeStyle = 'black';
// ctx.stroke();

//tutup2
ctx.beginPath();
ctx.moveTo(170,80);
ctx.rect(245,120,20,20);
ctx.fillStyle = 'blue';
ctx.fill();
// ctx.strokeStyle = 'black';
// ctx.stroke();



//kotak2
ctx.beginPath();
ctx.moveTo(170,80);
ctx.rect(500,150,130,200);
ctx.fillStyle = 'yellow';
ctx.fill();
// ctx.strokeStyle = 'black';
// ctx.stroke();

//tutup
ctx.beginPath();
ctx.moveTo(170,80);
ctx.rotate(75 * Math.PI/360);
ctx.rect(462,-285,130,20);
ctx.fillStyle = 'blue';
ctx.fill();
// ctx.strokeStyle = 'black';
// ctx.stroke();

//tutup2
ctx.beginPath();
ctx.moveTo(170,80);
ctx.rect(520,-305,20,20);
ctx.fillStyle = 'blue';
ctx.fill();
// ctx.strokeStyle = 'black';
// ctx.stroke();




//kotak3
ctx.fillStyle='yellow';
ctx.strokeStyle='black';
ctx.rotate(-75 * Math.PI/360);
ctx.fillRect(800,150,130,200);
// ctx.strokeStyle = 'black';


//tutup
ctx.fillStyle = 'blue';
ctx.translate(170,80);
ctx.rotate(Math.PI/2);
ctx.rect(700,-450,130,20);
ctx.fillRect(-60,-760,130,20);
ctx.strokeStyle = 'blue';
ctx.strokeRect(-60,-760,130,20);

//tutup2
ctx.fillStyle = 'blue';
ctx.fillRect(-3,-780,20,20);
ctx.strokeStyle = 'blue';
ctx.strokeRect(-3,-780,20,20);

