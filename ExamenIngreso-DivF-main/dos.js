function mostrar()
{
 let nombre
 let situacion
 let cantidadmaterias
 let sexo
 let notapromedio
 let edad
 let mejorpromedio= Number.MIN_VALUE
 let nombremejorpromedio
 let cantmejorpromedio =0
 let nombremasviejo
 let masviejosoloestudia= Number.MIN_VALUE
 let acumviejosoloestudia=0
 let acumnotabuscando=0
 let acumnotaestudiante =0
 let acumnotatrabajando =0
 let promediobuscando
 let promedioestudiante
 let promediotrabajando
 let edadmenosmaterias
 let nombremenosmaterias
 let menosmateriascursadas= Number.MAX_VALUE


 do{
  nombre=prompt("Indiquenos su nombre")
    
  edad= parseInt(prompt("edad"))
  while(isNaN(edad)){
  edad=parseInt(prompt("la edad ingresada no es un numero"))
  }
  sexo =prompt("sexo: femenino , masculino , nobinario")
  while (!(sexo == "femenino" || sexo == "masculino" || sexo == "nobinario")){
      sexo =prompt("ERROR.sexo: femenino , masculino , nobinario") 
  }
  situacion =prompt ("Situacion laboral buscando; trabajando ; soloestudiante")
  while(!( situacion== "buscando"|| situacion==  "trabajando"||situacion == "soloestudiante" )){
    situacion=prompt ("ERROR. Situacion laboral buscando; trabajando ; soloestudiante")
  }
 cantidadmaterias= parseInt(prompt("cantidad de materias entre 0 y 8"))
  while (!(cantidadmaterias >=0 && cantidadmaterias <= 8)){
      cantidadmaterias =parseInt( prompt ("ERROR.cantidad de materias entre 0 y 8"))
      }
  notapromedio= parseFloat(prompt("Nota promedio entre: 0 y 10"))
  while(!(notapromedio >=0 && notapromedio <=10)){
  notapromedio= parseFloat(prompt("Nota promedio entre: 0 y 10"))
}
//b el nombre del mejor promedio y estan estudiando
if( mejorpromedio < notapromedio && situacion == "soloestudiante"){
  nombremejorpromedio= nombre
  mejorpromedio =notapromedio
  cantmejorpromedio++
  }

 if(masviejosoloestudia > edad && situacion == "soloestudiante") {
 nombremasviejo= nombre
 acumviejosoloestudia++
}


switch(situacion){
  case ("buscando"):
  acumnotabuscando+=nota
  cantbuscando++
  break
  
  case("trabajando"):
  acumnotatrabajando+= nota
  canttrabajando++
  break
  
  case("soloestudiante"):
  acumnotaestudiante+= nota
  cantestudiante++
  break
}


if (menosmateriascursadas < cantidadmaterias && situacion == "buscando"){
nombremenosmaterias=nombre
edadmenosmaterias = edad
}


seguir= prompt("indique si, si quiere ingresar mas datos")
}while(seguir== "si")



if(cantmejorpromedio > 0){
  alert ("el nombre del mejor promedio que solo estudia es "+nombremejorpromedio)
  }

if(acumviejosoloestudia > 0){
 alert ("el nombre del mas viejo que solo estudia es"+nombremasviejo)
}

if(cantbuscando >0){
  promediobuscando= acumnotabuscando /cantbuscando   
  alert ("El promedio de nota buscando es"+promediobuscando)
 }
 if(cantestudiante >0){
     promedioestudiante= acumnotaestudiante/ cantestudiante   
  alert ("El promedio de nota de estudiantes es" + promedioestudiante)    
 }
 if (canttrabajando>0){
    promediotrabajando= acumnotatrabajando/ canttrabajando
    
    alert ("El promedio de nota de trabajando es "+ promediotrabajando)
  }

if(cantbuscando > 0){
alert( "El nombre que del que cursa menos materias y no trabaja es"+ nombremenosmaterias+ "y la edad es"+edadmenosmaterias)
}
}//final

