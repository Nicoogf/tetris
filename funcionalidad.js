function setup (){
    createCanvas(900,600) ;
    tablero = new Tablero ()
}

function draw (){
    background("lightgray") ;
    tablero.dibujar()
}

class Tablero {
    constructor(){
        this.columnas=10;
        this.filas=20;
        this.lado_celda=25
        this.ancho=  this.columnas * this.lado_celda
        this.alto = this.filas * this.lado_celda
        this.position = createVector(0 , 0)
    }

    coordenada( x , y ){
        return createVector( x , y ).mult(this.lado_celda).add(this.position)
    }

    dibujar(){
        for(let columna = 0 ; columna < this.columnas ; columna++){
            for(let fila = 0 ; fila < this.filas ; fila++){
                let c = this.coordenada( columna, fila)  // C = Columna
                rect( c.x , c.y , this.lado_celda)
      }
    }
  }
}