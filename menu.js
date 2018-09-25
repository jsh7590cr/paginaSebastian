$(document).ready(main);
 
var contador = 1;
 
function main(){
	$('.menu_bar').click(function(){ //si la clase .menu_bar se le da clic, ejecuta la sgt función
		// $('nav').toggle(); de esta forma es muy brusca la aparicion del menu responsive
 
		if(contador == 1){ //si el contador es = a 1
			$('nav').animate({ //desplaza el contenido de la etiqueta nav a la posicion cero de la izquierda de la pantalla
				left: '0%'
			});
			contador = 0; //y le da el nuevo valor de cero al contador
		} else { //sino 
			contador = 1; //le asigna el valor de 1 a el contador
			$('nav').animate({// y posiciona nav fuera de la pantalla
				left: '-100%'
			});
		}
 
	});
 
};
	