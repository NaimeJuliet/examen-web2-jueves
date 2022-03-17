import {generarDatos} from './generarDatos.js'

//funcion principal
function clasificarAlimentos(alimentos,callback){

    setTimeout(function(){

        let alimentosFiltardos=alimentos.filter(function(alimento){
            return(alimento.tipo=="vegetal" && alimento.nivel>200)
        })


        callback(alimentosFiltardos)

    },5000)

}

//llamando la funcion principal
let alimentos=generarDatos()
clasificarAlimentos(alimentos,function(alimentosFiltardos){


    console.log(alimentosFiltardos)
    let suma=0
    alimentosFiltardos.forEach(function(alimentoFiltrado){
        suma=suma+alimentoFiltrado.nivel
    })
    console.log(suma)

})