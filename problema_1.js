function recibirPadawan(nombre,planeta,edad,estatura,callback){
    setTimeout(function(){
        let padawan={
            nombre:nombre,
            planeta:planeta,
            edad:edad,
            estatura:estatura,
        }
        callback(padawan)

    },1000)
}
recibirPadawan("Naime","mercurio",-4,"1.60cm",function(padawan){
    if (padawan.edad>=15){
        console.log(`Bienvenido ${padawan.nombre} del planeta ${padawan.planeta} su actividad es: Manejo del sable de luz`)
    }
    else{
        if(padawan.edad<15 && padawan.edad>=0){
            console.log(`Bienvenido ${padawan.nombre} del planeta ${padawan.planeta} su actividad es: Manejo de la fuerza:`)

        }
        else{
            console.log('Ingrese una edad Valida')

        }
    }
})
