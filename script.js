console.log("hello");

const grid = document.querySelector('.grid');



const button = document.querySelector('.chooseDimension');
button.addEventListener('click', function(e){
    let dimension = prompt('choose your dimension (2-100)')
    grid.innerHTML = '';
    for(i = 0;  i < dimension*dimension; i ++){
        const div = document.createElement('div');
        grid.appendChild(div)
        div.style.border ="thin solid black"
        div.addEventListener('mouseover', function(e){
            div.style.background = 'black'
        })
        grid.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
    }
})

const clear = document.querySelector('.clear');
clear.addEventListener('click', function(e){
    let children = grid.children;
    for(i = 0; i<children.length; i++){
        const child = children[i]
        child.style.background = 'white';
    }
})
