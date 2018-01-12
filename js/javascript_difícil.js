// =======================================
// ==< Javascript >==
// =======================================

/* ================================= */
/* Declaración de variables          */ 
/* ================================= */
var g         = 1.622;
var dt        = 0.016683;
var timer     = null;
var timerFuel = null;

/* ================================= */
/* Declaración de variables nave.    */ 
/* ================================= */
// 25 movil
var y = 10;  // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var c = 50;
var a = g;   //la aceleración cambia cuando se enciende el motor de a=g a a=-g (simplificado)

// Marcadores.

var velocidad   = null;
var altura      = null;
var combustible = null;

/* ================================= */
/* Acciones tras cargar la página.   */
/* ================================= */
window.onload = function(){
	
	velocidad   = document.getElementById("velocidad");
	altura      = document.getElementById("altura");
	combustible = document.getElementById("fuel");

	/* ====================================================== */
	/* Encender/apagar el motor al hacer click en la pantalla */
	/* ====================================================== */
	document.onclick = function () {
 	  if (a==g){
  		motorOff();
		start();
 	  } 
	  else {
  		stop();
 	  }
	}
	
	/* ===================================================== */
	/* Encender/apagar el motor al apretar/soltar una tecla  */
	/* ===================================================== */
	document.onkeydown = motorOn;
	document.onkeyup   = motorOff;
}

/* ============================= */
/* Definición de funciones       */
/* ============================= */
function start(){
	//cada intervalo de tiempo mueve la nave
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

function stop(){
	clearInterval(timer);
}


function moverNave(){
	//cambiar velocidad y posicion
	v +=a*dt;
	y +=v*dt;
	
	//actualizar marcadores
	velocidad.innerHTML = v;
	altura.innerHTML    = y;
	
	//mover hasta que top sea un 70% de la pantalla
	// movil 77
	if (y<77){ 
			document.getElementById("nave").style.top = y+"%"; 
		} else { 
			stop();
		}
    }


function motorOn(){
	//el motor da aceleración a la nave
	a=-g;
	//mientras el motor esté activado gasta combustible
	if (timerFuel==null)
	timerFuel=setInterval(function(){ actualizarFuel(); }, 10);	
}


function motorOff(){
	a=g;
	clearInterval(timerFuel);
	timerFuel=null;
}


function actualizarFuel(){
	//Restamos combustible hasta que se agota
	c-=0.1;
	if (c < 0 ) c = 0;
	combustible.innerHTML=c;	
}