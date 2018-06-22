$(document).ready(function(){
	var cep = $("#form-cep");
	cep.mask('00000-000');

	var tel = $("#form-tel");
	tel.mask('(00) 00000-0000');
});

$("#imovel-endereco-form .btn-primary").click(function(){
	var estado = $("#form-estado").val();
	var cep = $("#form-cep").val();
	var cidade = $("#form-cidade").val();
	var bairro = $("#form-bairro").val();
	var rua = $("#form-rua").val();

	var cep_w = $("#cep-warning");
	var cidade_w = $("#cidade-warning");
	var bairro_w = $("#bairro-warning")
	var rua_w = $("#rua-warning");
	
	var array = [cep,cidade,bairro,rua];
	var warningArray = [cep_w,cidade_w,bairro_w,rua_w];
	var warnings = 0;

	array.forEach(function(entry,i){
		warningArray[i].hide();
		if(entry.trim().length == 0 ){
			warningArray[i].show();
			warnings+=1
		}
	});
	console.log("Warnings: "+warnings);
	if(warnings == 0){
		$("#imovel-endereco-form ").hide();
		$("#label-endereco").hide();
		$("#imovel-caracteristicas-form").show();
		$("#label-caracteristicas").show();
	}

});

$("#imovel-caracteristicas-form .btn-primary").click(function(){
	var area = $("#form-area").val();
	var aluguel = $("#form-aluguel").val();
	var quartos = $("#form-quartos").val();
	var banheiros = $("#form-banheiros").val();

	var area_w = $("#area-warning");
	var aluguel_w = $("#aluguel-warning");
	var quartos_w = $("#quartos-warning")
	var banheiros_w = $("#banheiros-warning");
	
	var array = [area,aluguel,quartos,banheiros];
	var warningArray = [area_w,aluguel_w,quartos_w,banheiros_w];
	var warnings = 0;

	console.log("Warnings: "+warnings);
	if(warnings == 0){
		$("#imovel-caracteristicas-form").hide();
		$("#label-caracteristicas").hide();
		$("#imovel-contato-form").show();
		$("#label-contato").show();
	}
});

$("#imovel-caracteristicas-form .btn-secondary").click(function(){
	$("#imovel-caracteristicas-form").hide();
	$("#label-caracteristicas").hide();
	$("#imovel-endereco-form ").show();
	$("#label-endereco").show();
});

$("#imovel-contato-form .btn-secondary").click(function(){
	$("#imovel-contato-form").hide();
	$("#label-contato").hide();
	$("#imovel-caracteristicas-form").show();
	$("#label-caracteristicas").show();
});

$("#imovel-contato-form .btn-primary").click(function(){
	var estado = $("#form-estado").val();
	var cep = $("#form-cep").val();
	var cidade = $("#form-cidade").val();
	var bairro = $("#form-bairro").val();
	var rua = $("#form-rua").val();
	var area = $("#form-area").val();
	var aluguel = $("#form-aluguel").val();
	var quartos = $("#form-quartos").val();
	var banheiros = $("#form-banheiros").val();
	var tel = $("#form-tel").val();
	var email = $("#form-email").val();
	var files = document.getElementById('form-foto').files;
  	var base64_img;

	
	/*console.log("cep: "+cep+" estado: "+estado+" cidade: "+cidade+" rua: "+rua+" bairro: "+bairro+" area: "+area+ 
	" aluguel: "+aluguel+ " quartos: "+quartos+" banheiros: "+banheiros+" tel: "+tel+" email: "+email);*/

	var tel_w = $("#tel-warning");
	var email_w = $("#email-warning");

	var array = [tel,email];
	var warningArray = [tel_w,email_w];
	var warnings = 0;

	array.forEach(function(entry,i){
		warningArray[i].hide();
		if(entry.trim().length == 0 ){
			warningArray[i].show();
			warnings+=1
		}
		if(i == 0 && entry.trim().length < 14){
			warnings+=1;
				warningArray[i].show();
		}
		if(i == 1){
			if(!validateEmail(email)) {
				warnings+=1;
				warningArray[i].show();
			}
		}
	});
	if (files.length > 0) {//mexendo (desvio)
    	base64_img = getBase64(files[0]);
  	}
	console.log("Warnings: "+warnings);
	if(warnings == 0){//Posso montar o JSON
		var array = $("form").serializeArray();
		var jsonData = {};

		jQuery.each(array,function(){
		jsonData[this.name] = this.value;//popula o json com o valor do form
		});

		console.log(jsonData);//para debug
		
		//Ajax para enviar dados para servidor
		var json = JSON.stringify(jsonData);   
      	$.post("",json,    
      	function (data){
        	alert(data);
      	});
	}

});

//Handler global de erros do Ajax
$( document ).ajaxError(function(event, jqxhr, settings,thrownError ) {
	console.log("Call do Ajax falhou, se liga no erro:\n");
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

function validateEmail(email) {
  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

function getBase64(file) {
   var reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
     var split = reader.result.split(",");
     return split[1];
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
}

//Permitir apenas numeros nos inputs dos forms COM MAX LENGTH
$("#form-area").keydown(function() {
	if((event.keyCode<48 || event.keyCode>57) && event.keyCode!=8) return false;
		
});
$("#form-aluguel").keydown(function() {
	if((event.keyCode<48 || event.keyCode>57) && event.keyCode!=8) return false;
		
});
$("#form-banheiros").keydown(function() {
	if((event.keyCode<48 || event.keyCode>57) && event.keyCode!=8) return false;
		
});
$("#form-quartos").keydown(function() {
	if((event.keyCode<48 || event.keyCode>57) && event.keyCode!=8) return false;
		
});