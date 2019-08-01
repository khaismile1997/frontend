document.querySelector('.wrapper').onmousemove = movingMymouse;
function movingMymouse(e) {
    const x = e.pageX;
    const y = e.pageY;
    
    console.log(x + ":" + y);
}


