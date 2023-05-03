var  turn = "X";
let  gamemusic = new Audio('perfect-crime-18433.mp3');



//FUNCTION TO CHANGE TURN
const changeturn = ()=>{

    return  turn === 'X'?"0":"X"
}

// FUNCTION TO CHECK WIN

const checkwin = ()=>{
    let boxtext = document.getElementsByClassName('tic-toc');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
       
    ]
   wins.forEach(e=>{
    if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=='')){
            //  document.getElementById('win-info').innerText = boxtext[e[0]].innerText + ' won'
             document.getElementById('win-decleration').style.display = "inline"
             document.getElementById('win-text').innerText = boxtext[e[0]].innerText + ` won
              Game-end
              Reset to start`;
             document.getElementById('display').style.display = 'none';
            
    }
   })
   

               gamemusic.play();
}





//game logic

let  btns = document.querySelectorAll(".tic-toc");
btns.forEach(btn => {

    btn.addEventListener('click', myFunction)
}
    )

function myFunction(event) {
      if(event.target.innerText == ''){
        event.target.innerText = turn;
        turn =  changeturn();
        document.getElementById('turn').innerText = turn
        checkwin();
      }
  
   
}


let reset = document.getElementById('reset')

reset.addEventListener('click', allreset)


function allreset(){
    let  btns = document.querySelectorAll(".tic-toc");
    btns.forEach(btn=>{
        btn.innerText = '';

    })

    document.getElementById('win-info').innerText = ''
    document.getElementById('turn').innerText = 'X';
    document.getElementById('win-decleration').style.display = "none"
    document.getElementById('display').style.display = 'grid';

    

}