//Handler global de erros do Ajax
	var name = $(".user-name");
	$( document ).ajaxError(function(event, jqxhr, settings,thrownError ) {
		console.log("Call do Ajax falhou, se liga no erro:\n");
		console.log(jqxhr.status);

		switch(jqxhr.status){
			case 200://saida
				alert("Email ou senha errados");
			break;

			case 204://sem imoveis
				alert("Email e senha errados");
			break;

			case 403:
				alert("usuario não logado");
			break;
		}
		
	});