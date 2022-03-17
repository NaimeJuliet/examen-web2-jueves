function almacenarPlanos(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10,callback){
    let numeros=Array(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10)
    callback(numeros)
}
almacenarPlanos(200,80,15,11,15,100,55,40,-5,60,function(numeros){
   
        let filtrados=numeros.filter(function(filtrado){
            return (filtrado>=1 && filtrado <=10)
        })

        console.log("la cantidad de planos verdaderos robados fue:" + filtrados.length)
        if (filtrados.length>=1 ){
            console.log("Felicitaciones puedes abordar")
        }
        else
        {
            console.log("LO SIENTO, no has robado planos utiles, NO PUEDES ABORDAR")
        }
})

