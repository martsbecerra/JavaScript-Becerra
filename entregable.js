//algoritmo para identificar cuantos pisos debe subir una persona para llegar a la terraza

let piso = parseInt(prompt("ingrese piso en el que vive"))
let totalPisos = parseInt(prompt("ingrese cantidad de pisos de su edificio"))
let subirPisos = 0

while(piso >= 0 && piso <= totalPisos){
    subirPisos = subirPisos + 1
    piso = piso + 1
    console.log(subirPisos)
}

alert(`debe subir ${subirPisos} pisos hasta llegar a la terraza`)

