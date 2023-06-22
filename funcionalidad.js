
const MARGEN_TABLERO = 10 ; 
let regulador_velocidad_teclas = 0 ;

function setup (){
    createCanvas(900,600) ;    
    tablero = new Tablero ();
   
    tetrimino = new Tetrimino();
  
    resizeCanvas(
        tablero.ancho + 2*MARGEN_TABLERO,
        tablero.alto + 2*MARGEN_TABLERO)
}

function keyEventsTetris(){
    if( millis() - regulador_velocidad_teclas < 200){
        return
    }
    regulador_velocidad_teclas = millis()

    if(keyIsDown(RIGHT_ARROW)){
        tetrimino.moverDerecha()
    }
    if(keyIsDown(LEFT_ARROW)){
        tetrimino.moverIzquierda()
    }
    if(keyIsDown(DOWN_ARROW)){
        tetrimino.moverAbajo()
    }
    if(keyIsDown(UP_ARROW)){
        tetrimino.moverArriba()
    }
}


function draw (){
    background("lightgray") ;
    tablero.dibujar()
    tetrimino.dibujar()
    keyEventsTetris()
}


function crearMapeoBaseTetriminos(){

    tetriminoBase = {
        "Z" :{
            color: "red",
            mapa: [
                createVector(),

            ]
        }
    }
    

}

class Tetrimino{

    constructor(nombre = "Z"){
        this.nombre = nombre
        let tetriminoBase = tetriminoBase[ nombre ]
        this.color = tetriminoBase.color ;
        this.mapa = []
        for (const prmino of tetriminoBase.mapa) {            
            this.mapa.push(pmino.copy());            
        }
        this.position = createVector( 0 , 0)
    }

    moverDerecha(){
        this.position.x++
    }

    moverIzquierda(){
        this.position.x--
    }
    moverArriba(){
        this.position.y--
    }
    moverAbajo(){
        this.position.y++
    }


   get mapaTablero(){
    
    let retorno = [] ;
    for (const pmino of this.mapa){
        retorno.push(tablero.coordenada( pmino.x , pmino.y) )
    }
    return retorno

    }




    dibujar(){
        push()
        fill("red")
        for(const pmino of this.mapaTablero){
            let coord = tablero.coordenada( pmino.x , pmino.y);  
            rect( pmino.x , pmino.y , tablero.lado_celda);
        }
      
      
        pop()
    }

}






class Tablero {
    constructor(){
        this.columnas=10;
        this.filas=20;
        this.lado_celda=25
        this.ancho=  this.columnas * this.lado_celda
        this.alto = this.filas * this.lado_celda
        this.position = createVector( MARGEN_TABLERO , MARGEN_TABLERO ) //Para centrar el Canvas (width - this.ancho) / 2 ,  (height- this.alto) / 2
    }

    coordenada( x , y ){
        return createVector( x , y ).mult(this.lado_celda).add(this.position)
    }

    dibujar(){
       push()
       noStroke()
        for(let columna = 0 ; columna < this.columnas ; columna++){
            for(let fila = 0 ; fila < this.filas ; fila++){
                if( (columna+fila)%2 ===0 ){
                    fill("black")
                }else{
                    fill("#003")
                }
                let c = this.coordenada( columna, fila)  // C = Columna
                rect( c.x , c.y , this.lado_celda)
         }}
       pop()
    }
  }