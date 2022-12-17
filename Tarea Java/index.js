let contador=1;
const platillos=3;
const sillasTotales=100;
const bienvenida=("Sean bienvenidos a la cena de navidad sigue las instruciones");
invitados=parseInt(prompt("introduzca el numero de invitados"));


for(contador;contador<=invitados;contador++){
    let boleto=Math.round(Math.random()*100);
    alert(bienvenida);
    nombre=prompt("Introduce tu nombre:");
    apellido=prompt("Introduce tu apellido:");
    alert("Te esperamos: "+nombre+" "+apellido+" tu numero de invitado es: "+boleto);
    alert("No olvide su numero de boleto o no podra entrar");
    alert("Ahora imagine que ya llego a la fiesta...");
    do{
        validar=prompt("Introduzca su numero de invitado:")
        if(validar==boleto){
            let mesa=Math.round(Math.random()*100);
            alert("Puede entrar disfrute la fiesta su mesa es "+ mesa);
    }
            else{
            alert("Upsss lo siento vuelva a intentarlo")
    }
}while(validar!=boleto);
}

alert("el numero de platillos que serviran son: "+(invitados*platillos));
console.log("Las sillas totales son: "+ sillasTotales);
console.log("lugares restantes: "+(sillasTotales-invitados));
console.log("numero de invitados: "+ invitados);
console.log("Numero de platillos a servir: "+ (invitados*platillos));
console.log("nombre de invitados: "+(nombre+" "+apellido));




