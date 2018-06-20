$(document).ready(function() {
//função para validar campos no form
	function validate(){
		var email = $("#form-email").val();
		var senha = $("#form-password").val();

		if(email == "" && senha == ""){
			$("#email-warning").show();
			$("#password-warning").show();
		  	return false;
		}
		if(email == ""){
			$("#email-warning").show();
		  	return false;
		}
		if(senha == ""){
			$("#password-warning").show();
		  	return false;
		}
		return true;
	}
//funções para esconder warnings warning
	$("#login-exit").click(function(){
		$("#email-warning").hide();
		$("#password-warning").hide();
	});
	$(".close").click(function(){
		$("#email-warning").hide();
		$("#password-warning").hide();
	})
//função para criar um JSON a partir do form validado
	$("#login-btn").click(function(){
		if(validate()){
		var array = $(".form-horizontal").serializeArray();
		var jsonData = {};

		jQuery.each(array,function(){
			jsonData[this.name] = this.value || '';//popula o json com o valor do form ou vazio
		});
		console.log(jsonData);//para debug
//Ajax para enviar dados para servidor		
		$.post("http://dellianapptest.ddns.net:2525/imobiliaria/Imobiliaria_Backend/back-end/api/sistemaLogin.php", {"email":"email5","senha":"12345678"},		
	 function (data){
	 	alert(data);
	 } );

		return false;
	}
	});
//Handler global de erros do Ajax
	$( document ).ajaxError(function(event, jqxhr, settings,thrownError ) {
		console.log("Cagou no ajax, se liga no erro:\n");
		console.log(jqxhr.status);

		switch(jqxhr.status){
			case 403:
				console.log("Erro no DB");
			break;

			case 202:
				console.log("Sucesso no DB");
			break;
		}
		
	});
});