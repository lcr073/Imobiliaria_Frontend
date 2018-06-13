$("#submit-btn").click(function(){
	var array = $("form").serializeArray();
	var json = {};

	jQuery.each(array,function(){
		json[this.name] = this.value || '';//popula o json com o valor do form ou vazio
	});
	//console.log(json);//para debug
	return json;
});

$(document).ready(function(){
	var cpf = $("#form-cpf");
	cpf.mask('000.000.000-00');

	var rg = $("#form-rg");
	rg.mask('00.000.000-0');

	var tel = $("#form-tel");
	tel.mask('(00) 00000-0000');
});