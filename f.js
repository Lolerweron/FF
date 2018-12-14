const ff = document.querySelector('main');

let fffffff;
let ffffffff;

function fff(){
    for(let ffff = 1; ffff < 4; ffff+=1){
        for(let fffff = 1; fffff < 5; fffff +=1){
            let ffffff = document.createElement('img');
            ffffff.src = `./FF/F_0${ffff}_0${fffff}.png`
            ffffff.draggable = true
            ff.appendChild(ffffff)
        }
    }
}

fff();
ff.addEventListener('dragstart',function(event){
    fffffff = event.target.src;
    ffffffff = event.target;
});
ff.addEventListener('dragover',function(event){
    event.preventDefault();
});
ff.addEventListener('drop',function(event){
    if (!event.target.src) return
    ffffffff.src = event.target.src
    event.target.src = fffffff
});