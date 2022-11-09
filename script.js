//----------------------------------------VARIABLES------------------------------------------------
let numberOfSquares = 6
let colors= [];
let square = document.querySelectorAll(".square")
let pickedColor;
let colorDisplay = document.querySelector("#colorDisplay")
let message = document.querySelector("#message")
let title = document.querySelector("h1")
let resetB = document.querySelector("#reset")
let easyAndHard = document.querySelectorAll(".easyAndHard")
let containerButtons = document.querySelector(".container-span")

//------------------------------------------CODE-----------------------------------------------------
init()

function init() {
    moodsSquare()
    colorDisplay.textContent = pickedColor
    buttons()
    reset()
}
//-------------Funciones de init-------------
function moodsSquare() {
for (let i = 0; i < square.length; i++) {
    
    square[i].style.backgroundColor = colors[i]

    square[i].addEventListener("click", function(){

        let clickedColor = this.style.backgroundColor
        if (clickedColor !== pickedColor) {

            this.style.backgroundColor = "#232323"
            message.textContent = "Try Again"

        }else{

            message.textContent = "¡Correct!"
            title.style.backgroundColor = pickedColor
            changeColors(pickedColor)
            containerButtons.style.backgroundColor = "rgb(224, 235, 161)"
            resetB.textContent = "Play Again?"     
        }
    })    
}
}

function buttons() {
    //Necesitamos un loop para recorrer el array de botones, en este caso posee hasta indice = 1
    for (let i = 0; i < easyAndHard.length; i++) { 
        
        //Agregamos un evento a los 2 botones, dependiendo de cual seleccionemos, i puede ser 0 o 1.
        easyAndHard[i].addEventListener("click", function(){

            //Con este for le quitamos a ambos botones la clase selected, para que no tengan estilo alguno
            for (let i = 0; i < easyAndHard.length; i++) {
                
                easyAndHard[i].classList.remove("selected")  
            }
            //inmediatamente solo le damos la clase selected al boton que fue seleccionado
            this.classList.add("selected")

            //operador ternario, el contenido del texto del boton definirá la cantidad de cuadrados en juego
            this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
            reset()
        })
    }
}

function reset(){
    colors = generateRandomColors(numberOfSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor;
    title.style.backgroundColor = "rgb(8, 151, 3)"
    resetB.textContent = "New Colors"
    message.textContent = ""
    containerButtons.style.backgroundColor = "white"

    for (let i = 0; i < square.length; i++) {
        
        if (colors[i]){
    
            square[i].style.display = "block"
            square[i].style.backgroundColor = colors[i]
            
        }else {
            square[i].style.display = "none"
        }
    }
}
//----------------------------------------------------------------------------

//Cambia de color a todos los squares del color ganador
let changeColors = color => {

    for (let i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color   
    }
}

//Funcion para darle un color random a pickedcolor(que es el color que debe adivinar el jugador)
function pickColor() {
    let i = Math.floor( Math.random() * colors.length )
    return colors[i]
}

//Funcion para generar y devolver (return) un color aleatorio
function randomColor () {

    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
 
    return `rgb(${r}, ${g}, ${b})`
}

//Generará de una forma aleatoria el arreglo de colores usando randomColor()
function generateRandomColors (longitud) {

    array = []
    for (let i = 0; i < longitud; i++) {
        
        array.push(randomColor())
    }
    return array
}

//Button reset
resetB.addEventListener("click", function() {
    reset()
})




