/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto 
el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
Categoria ("desinfectante", "bactericida", "detergente" ) 
y el fabricante.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) La categoria con mas cantidad de unidades en total de la compra
c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
d) el fabricante y Categoria del más caro de los productos */
function mostrar()
{  
   let nombre
   let 	tipoproducto
   let precio
   let cantidad
   let categoria 
   let fabricante
   let promalcohol
   let promiac
   let promquat
   let acumcantalcohol=0
   let acumcantiac=0
   let acumcantquat=0
   let contalcohol=0
   let contiac=0
   let contquat=0
   let cantdesinfectante=0
   let cantbactericida =0
   let cantdetergente =0
   let categoriamayor
   let detergente200 =0


	for (let i=0 ; i<5; i++){

		nombre= prompt("Indique el nombre")

		tipoproducto = prompt("indique el producto alcohol ; iac o quat")	
	while (!( tipoproducto =="alcohol" ||tipoproducto =="iac" || tipoproducto == "quat" )){
	tipoproducto= prompt("Incorrecto. indique el producto alcohol ; iac o quat")	
	}
	precio =parseInt( prompt ("indique el precio entre 100 y 300"))
	while (!(precio >= 100 && precio <= 300 )){
	precio =parseInt( prompt ("ERROR.indique el precio entre 100 y 300"))
	}
	cantidad =parseInt( prompt ("indique la cantidad no mayor a 1000"))
	while (!(cantidad >0 && cantidad <= 1000)){
	cantidad =parseInt( prompt ("cantidad incorrecta,indique la cantidad no mayor a 1000"))
	}
	categoria= prompt("desinfectante", "bactericida", "detergente ")	
	while (!( categoria =="desinfectante" ||categoria =="bactericida" || categoria == "detergente" )){
	categoria= prompt("Incorrecto.indique si es ignífugo, combustible, explosivo")	
	}

	fabricante=promp("Indique el fabricante")



	switch(tipoproducto){
		case "alcohol":
		acumcantalcohol+=cantidad
		contalcohol++
		break
		case "iac":
		acumcantiac+= cantidad
		contiac++

		
		break 
		case"quat":
		acumcantquat+=cantidad
		contquat++
		break
		}


		switch(categoria){
			case "desinfectante":
			cantdesinfectante+=cantidad
			
			break
			case "bactericida":
		    cantbactericida+= cantidad
			
			break 
			case "detergente":
		    cantdetergente+= cantidad   
			if(precio <= 200){
				detergente200+=cantidad
			break
		}
    }


}// final for

if(contalcohol >0){
	promalcohol = acumcantalcohol /contalcohol
	alert (" cantidad promedio de alcohol" +promalcohol )
	}
	
	if (contiac > 0){
	promiac= acumcantiac/contiac
	alert (" cantidad promedio de iac" +promiac )
	}
	
	if(contquat > 0){
	promquat = acumcantquat/ contquat
	alert ("cantidad promedio de quat"+promquat)
	}

if (cantdesinfectante > cantdetergente || cantdesinfectante > cantbactericida){
categoriamayor= "desinfectante"
}else if( cantdetergente >= cantdesinfectante || cantdetergente >cantbactericida){
categoriamayor= "detergente"
}
else {
categoriamayor = "bactericida"

}

alert("El producto que tiene mayor cantidad es"+categoriamayor)
alert ( "cantidad de detergent menos de $200 pesos "+ detergente200 )
}