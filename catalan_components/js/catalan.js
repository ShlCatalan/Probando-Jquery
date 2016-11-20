/* Autor Rodrigo Catalan

Todos los derechos reservados



*/
$(document).ready(function(){
	$("#3").click(function(){
		$.get("procesar.php",function(data){
			alert(data);
		});
	});
});

$(document).ready(function(){
	$("#1").click(function(){
		$("p").append("<b> Rodrigo </b>.");
		$("#2").click(function(){
			$("p").css("background-color", "red")
		})
	});

});