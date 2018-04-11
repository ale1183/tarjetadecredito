
var numberCard = prompt('ingresa los 16 digitos de tu tarjeta');// pide al usuario los numeros de su tarjeta
var array = [];

  for (var i  = numberCard.length -1; i >= 0 ; i--){//va a iterar en el array empezara de atras

       array.push(parseInt(numberCard[i]));//se agregan los numeros al array
  }

 function isValidCard(){
   var sumaPares = 0;
   for (var j= 1; j <= array.length -1; j+=2){// recorre el array buscando pares
       var mult =array[j] * 2 ;// guarda la multiplicación de elementos del array + 2
       if (mult > 9){ // si la multiplicación es mayor que nueve el numero es de 2 cifras
          sumaPares += (Number(mult.toString().charAt(0)) + Number(mult.toString().charAt(1)));// convierte el array a string ynsuma los pares
      } else {
           sumaPares += mult;//guarda la multiplicación
  }
  }
  var sumaImpares = 0;
  for (var m = 0; m <= array.length -1; m += 2){// recorre el array en busca de los impares de atras para adelante

      sumaImpares += array[m];// guarda la suma de los impares
  }

   var sumaTotal = sumaPares + sumaImpares;// guarda la suma de pares e impares

      if (sumaTotal % 10 === 0){//si la suma total es modulo de 10 regresa un alert con el mensaje de tarjeta valida de los contrario tu tarjeta es invalida
             alert('tu tarjeta es valida');
     } else {
             alert ('tu tarjeta es invalida');
   }
   }



 isValidCard(numberCard);// llamado a la funcion
