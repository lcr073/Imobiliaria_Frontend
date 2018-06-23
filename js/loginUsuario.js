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
	var json = JSON.stringify(jsonData);
	$.post("http://dellianapptest.ddns.net:2525/imobiliaria/Imobiliaria_Backend/back-end/login/",json,		
	function (data){
		alert("Logado com sucesso");
		var split = data.split("");
		console.log(split[0]);
		//guardar id user em cookie
		setCookie('idCookie',split[0],7);
		//não estou conseguindo gerar um cookie
	 });
	
		return false;
	}

	});


function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}

//Handler global de erros do Ajax
	var name = $(".user-name");
	$( document ).ajaxError(function(event, jqxhr, settings,thrownError ) {
		console.log("Call do Ajax falhou, se liga no erro:\n");
		console.log(jqxhr.status);

		switch(jqxhr.status){
			case 403://email e/ou senha invalidos
				alert("Email ou senha errados");
			break;

			case 204://email e senha invalidos
				alert("Email e senha errados");
			break;

			case 404:
				alert("Busca em branco");
			break;
		}
		
	});
});