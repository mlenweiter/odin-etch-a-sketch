console.log("hello");

const grid = document.querySelector('.grid');

for(i = 0;  i < 16; i ++){
    const div = document.createElement('div');
    grid.appendChild(div)
    div.style.border ="thin solid black"
    div.addEventListener('mouseover', function(e){
        div.style.background = 'black'
    })


}

