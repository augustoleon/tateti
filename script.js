var player1 = true;
var gameOver = false;
var nombre1 = prompt('Nombre del jugador 1:');
var nombre2 = prompt('Nombre del jugador 2:');
                    
let matrizGrid =
   //j j j
[   [0,0,0], //i 0
    [0,0,0], //i 1
    [0,0,0]  //i 2
   //0 1 2
];

let boxes = document.getElementsByClassName('box')

for(let box of boxes){
    
    box.addEventListener('click', agregarCruz)
    function agregarCruz(e){
        let divClickeado = e.target;
        let col =  e.target.getAttribute('col')
        let row =  e.target.getAttribute('row')
        if(!gameOver){
            if (divClickeado.innerText === "") {
                if(player1){
                    box.innerHTML = 'O'
                    matrizGrid[row][col] = 1;
                }else{
                    box.innerHTML = 'X'
                    matrizGrid[row][col] = 2;
                }
                player1 = !player1;
                validarGanador();
                
            }
        }
    }
}

function tablero(){
    let jugador1 = '1';
    let tablero = document.getElementById('hall');
    tablero.innerText ='Jugador O';
    
    if(jugador1 == player1){
        tablero.innerText = nombre1 || 'Jugador O';
    }
    else {
        tablero.innerText = nombre2 || "Jugador X";
    }
    
}

function validarGanador(){
    validarHorizontal();
    validarVertical();
    validarDiagonalPrimera();
    validarDiagonalSegunda();
    tablero();
}

 
function validarHorizontal(){
    // Comparación de array no existe, la pasamos a stringify para poder comparar
    let arrayGanador1 = JSON.stringify([1,1,1]);
    let arrayGanador2 = JSON.stringify([2,2,2]); 
    for(let i = 0; i < matrizGrid.length; i++){
        let jugada = [];
        for(let j = 0; j < matrizGrid[i].length; j++){
            // En posición i, recorreme j
            jugada.push(matrizGrid[i][j]);
        }
        // el array jugada lo pasamos a stringify para compararlo con los arrayGanador(1,2).stringify
        let jugadaString = JSON.stringify(jugada);

        nombre1 = nombre1 || 'Jugador O'
        nombre2 = nombre2 || 'Jugador X'
        if (jugadaString === arrayGanador1 || jugadaString === arrayGanador2){
            if(arrayGanador1 == jugadaString) {
                setTimeout(() => alert('Ganó '+ nombre1 + '!!'), 100)
            } else {
                setTimeout(() => alert('Ganó '+ nombre2 + '!!'), 100)
            }
            gameOver = true;
            reiniciarJuego();
        }
    }
}

function validarVertical(){
    let arrayGanador1 = JSON.stringify([1,1,1]);
    let arrayGanador2 = JSON.stringify([2,2,2]); 
        for(let i = 0; i < matrizGrid.length; i++){
            let jugada = [];
            for(let j = 0; j < matrizGrid[i].length; j++){
                jugada.push(matrizGrid[j][i]);
            }
            let jugadaString = JSON.stringify(jugada);

            nombre1 = nombre1 || 'Jugador O'
            nombre2 = nombre2 || 'Jugador X'
            if (jugadaString == arrayGanador1 || jugadaString == arrayGanador2){
                if(arrayGanador1 == jugadaString) {
                    setTimeout(() => alert('Ganó '+ nombre1 + '!!'), 100)
                } else {
                    setTimeout(() => alert('Ganó '+ nombre2 + '!!'), 100)
                }
                gameOver = true;
                reiniciarJuego();
            }
        }
}
   
function validarDiagonalPrimera(){
    let arrayGanador1 = JSON.stringify([1,1,1]);
    let arrayGanador2 = JSON.stringify([2,2,2]);
    let n = 0;
    for(let i = 0; i < matrizGrid.length; i++){
        let jugada = [];
        
        for(let j = 0; j < matrizGrid[i].length; j++){
            if(i == 0){
            jugada.push(matrizGrid[n][j]);
            n++;
            }
        }
        let jugadaString = JSON.stringify(jugada);

        nombre1 = nombre1 || 'Jugador O'
        nombre2 = nombre2 || 'Jugador X'
        if (jugadaString == arrayGanador1 || jugadaString == arrayGanador2){
            if(arrayGanador1 == jugadaString) {
                setTimeout(() => alert('Ganó '+ nombre1 + '!!'), 100)
            } else {
                setTimeout(() => alert('Ganó '+ nombre2 + '!!'), 100)
            }
            gameOver = true;
            reiniciarJuego();
        }
    }
}

function validarDiagonalSegunda(){
    let arrayGanador1 = JSON.stringify([1,1,1]);
    let arrayGanador2 = JSON.stringify([2,2,2]);
    let n = 0;
    for(let i = 0; i < matrizGrid.length; i++){
        let jugada = [];  
        for(let j = (matrizGrid[i].length - 1); j >= 0; j--){
            if(i == 0){
            jugada.push(matrizGrid[n][j]);
            n++;
            }
        }
        let jugadaString = JSON.stringify(jugada);
        
        nombre1 = nombre1 || 'Jugador O'
        nombre2 = nombre2 || 'Jugador X'
        if (jugadaString == arrayGanador1 || jugadaString == arrayGanador2){
            if(arrayGanador1 == jugadaString) {
                setTimeout(() => alert('Ganó '+ nombre1 + '!!'), 100)
            } else {
                setTimeout(() => alert('Ganó '+ nombre2 + '!!'), 100)
            }
            gameOver = true;
            reiniciarJuego();
        }
    }
}

function reiniciarJuego(){
    setTimeout(() => {for(let box of boxes) {
        box.innerText = "";
    }}, 100);
    gameOver = false;
    player1 = true;
    matrizGrid =[   
        [0,0,0], //i
        [0,0,0], //i
        [0,0,0]  //i
    ]
    

}


