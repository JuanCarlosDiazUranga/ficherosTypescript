import { alumnos } from './datos/alumnos'

import { 
    muestraAlumnos, 
    buscaAlumno 
} from './funciones/alumnos'

//Muestra listado
muestraAlumnos(alumnos)

//búsqueda de alumnos
const alumnoABuscar : string = "Manolo"

let encontradoManolo = buscaAlumno(alumnos,alumnoABuscar)
if(encontradoManolo){
    console.log(alumnoABuscar + " está en la lista")
}
else{
    console.log(alumnoABuscar + " no está en la lista")
}

export{}