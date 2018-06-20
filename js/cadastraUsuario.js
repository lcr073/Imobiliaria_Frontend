$(document).ready(function(){
	var cpf = $("#form-cpf");
	cpf.mask('000.000.000-00');

	var rg = $("#form-rg");
	rg.mask('00.000.000-0');

	var tel = $("#form-tel");
	tel.mask('(00) 00000-0000');
});

function validateEmail(email) {
  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

function validate() {// Função para validar campos do form
  var nome = $("#form-name").val();
  var email = $("#form-email").val();
  var senha = $("#form-password").val();
  var cpf = $("#form-cpf").val();
  var rg = $("#form-rg").val();
  var tel = $("#form-tel").val();
  var notRobot = $("#check-not-robot").checked;
  
  if(nome == ""){
  	return false;
  }
  if (!validateEmail(email)){
  	alert("Email inválido");
  	return false;
  }
  if(senha == ""){
  	return false;
  }
  if(cpf == ""){
  	return false;
  }
  if(cpf.length != 14 && cpf.length > 0){
  	alert("Campo CPF incompleto");
  	return false;
  }
  if(rg == ""){
  	return false;
  }
  if(rg.length != 12 && rg.length > 0){
  	alert("Campo RG incompleto");
  	return false;
  }
  if(tel == ""){
  	return false;
  }
  if(tel.length <= 13 && tel.length > 0){
  	alert("Campo Telefone incompleto");
  	return false;
  }

  return true;
}

$("#submit-btn").click(function(){
		if(validate()){
			var array = $("form").serializeArray();
			var jsonData = {};

			jQuery.each(array,function(){
			jsonData[this.name] = this.value;//popula o json com o valor do form
			});
			console.log(jsonData);//para debug
			return jsonData;
		}
});