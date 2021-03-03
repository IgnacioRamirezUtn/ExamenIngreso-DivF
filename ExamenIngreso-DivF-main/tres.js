function mostrar()


{
	let nombre
	let obrasocial
	let edad
	let temperatura
	let sexo
	let precio =600
	let seguir 
    let cantmayorosde=0
	let tempmasbaja
	let nombretempmasbaja
	let edadtempmasbaja =Number.MAX_VALUE
	let contmujertemp=0
	let preciobruto
	let acumpasajero=0
	let masde50porciento
	let acumpasajeroosde=0

	do{
        nombre=prompt("Indiquenos su nombre")
      
        edad= parseInt(prompt("edad"))
        while(!(edad > 17)){
        edad=parseInt(prompt("la edad ingresada es menor a 17"))
       }
        sexo =prompt("sexo f o m")
       while (!(sexo == "f" || sexo == "m")){
           sexo =prompt("Sexo incorrecto debe ingresar f o m")  
       }
        obrasocial= prompt("Indique su obra social:pami ; osde o otras") 
       while (!(obrasocial== "pami" || obrasocial== "osde"|| obrasocial == "otras"  )){
         obrasocial= prompt ("ERROR.Indique su obra social:pami ; osde o otras") 
        }
        temperatura= parseInt(prompt("temperatura corporal"))
        while(isNaN(temperatura)){
           temperatura= parseInt(prompt("El numero de ingresado es incorrecto"))  
       }
        

	   if (edad >=60 && obrasocial == "osde"){
		cantmayorosde++
	}

     //el nombre y la mujer con pami mas joven
	if (sexo == "f" && obrasocial =="osde" && tempmasbaja > temperatura){
		nombretempmasbaja =nombre
		edadtempmasbaja=edad
		contmujertemp++
		
		}
    //d
       acumpasajero++


	if(obrasocial== "pami"){
		acumpasajeropami++
	}

	   seguir= prompt("indique si, si quiere ingresar mas datos")  
	}while(seguir=="si")


	if (cantmayorosde >0 ){
      alert("la cantidad de mayores de 60 con osde son "+cantmayorosde)

	}

	if (contmujertemp > 0){
      
     alert ("La mujer con temperatura es "+nombretempmasbaja+" con una edad de" +edadtempmasbaja)
	}

	preciobruto=acumpasajero*precio 

	masde50porciento =acumpasajero /2

if(acumpasajeroosde> masde50porciento){
    preciocondescuento=Preciobruto -(Preciobruto *25/100)
    
    alert(" el precio con descuento  es"+ preciocondescuento)
}else{
    alert ("precio total sin descuento es"+Preciobruto)


}
