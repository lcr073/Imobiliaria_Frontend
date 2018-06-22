$('#radioBtn-1 a').on('click', function(){
    var sel = $(this).data('title');
    var tog = $(this).data('toggle');
    $('#'+tog).prop('value', sel);
    
    $('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
    $('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
//valor do filtro
	var fun = $("#fun-1").val();
    console.log("Selecionado "+fun+" quartos");
})
$('#radioBtn-2 a').on('click', function(){
    var sel = $(this).data('title');
    var tog = $(this).data('toggle');
    $('#'+tog).prop('value', sel);
    
    $('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
    $('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
//valor do filtro
	var fun = $("#fun-2").val();
    console.log("Selecionado "+fun+" banheiros");
})
//Montar string de filtro para busca
$("#search-btn").click(function(){
	// n quartos
	var quartos = $("#fun-1").val();
	console.log(quartos);
	// n banheiros
	var banheiros = $("#fun-2").val();
	console.log(banheiros);
	// area min
	var min_a = $("#area-min").val();
	console.log(min_a);
	// area max
	var min_m = $("#area-max").val();
	console.log(min_m);
	// preco min
	var min_p = $("#price-min").val();
	console.log(min_p);
	// preco max
	var min_p = $("#price-max").val();
	console.log(min_p);

});

$("#price-min").keydown(function() {
	if((event.keyCode<48 || event.keyCode>57) && event.keyCode!=8) return false;	
});
$("#price-max").keydown(function() {
	if((event.keyCode<48 || event.keyCode>57) && event.keyCode!=8) return false;	
});
$("#area-min").keydown(function() {
	if((event.keyCode<48 || event.keyCode>57) && event.keyCode!=8) return false;	
});
$("#area-max").keydown(function() {
	if((event.keyCode<48 || event.keyCode>57) && event.keyCode!=8) return false;	
});