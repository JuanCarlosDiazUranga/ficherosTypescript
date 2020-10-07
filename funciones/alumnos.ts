const muestraAlumnos = (alumnos : Array<string>) => {
    let posicion = 1
    for(let alumno of alumnos){
        console.log(posicion+".- "+alumno)
        posicion++
    }
}

const buscaAlumno = (
    alumnos : Array<string>,
    nombre : string) : boolean => {
    for(let alumno of alumnos){
        if(alumno == nombre){
            return true
        }
    }
    return false
}

export {
    muestraAlumnos,
    buscaAlumno
}