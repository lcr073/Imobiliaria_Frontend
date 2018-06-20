$("#imovel-endereco-form .btn-primary").click(function(){
	$("#imovel-endereco-form ").hide();
	$("#imovel-caracteristicas-form").show();

});

$("#imovel-caracteristicas-form .btn-primary").click(function(){
	$("#imovel-caracteristicas-form").hide();
	$("#imovel-contato-form").show();
});

$("#imovel-caracteristicas-form .btn-secondary").click(function(){
	$("#imovel-caracteristicas-form").hide();
	$("#imovel-endereco-form ").show();
});

$("#imovel-contato-form .btn-primary").click(function(){
	alert("ENVIANDO DADOS PARA DB");
});

$("#imovel-contato-form .btn-secondary").click(function(){
	$("#imovel-contato-form").hide();
	$("#imovel-caracteristicas-form").show();
});