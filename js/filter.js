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
	//var max_a = $("#area-max").val();
	//console.log(max_a);
	// preco min
	var min_p = $("#price-min").val();
	console.log(min_p);
	// preco max
	//var max_p = $("#price-max").val();
	//console.log(max_p);
	var estado = $("#system-search").val();

	var url = "http://dellianapptest.ddns.net:2525/imobiliaria/Imobiliaria_Backend/back-end/imovel/-1/-1/-1/-1/"+quartos+"/"+estado+"/"+banheiros+"/-1/-1/-1/-1";
	var url_null = "http://dellianapptest.ddns.net:2525/imobiliaria/Imobiliaria_Backend/back-end/imovel/-1/-1/-1/-1/-1/-1/-1/-1/-1/-1/-1";
																				  																 
	console.log(url);

	var search = $("#system-search").val();
	if(search == ""){
		$.get(url_null, function(data, status){

    	console.log(JSON.parse(data));
    	var array = JSON.parse(data);
    	var len = JSON.parse(data).length;
    	console.log(len);
    	var results = $("#imv-search-result");//é um div
    	results.empty();
    	

    	for (var key in array) {
    		if (array.hasOwnProperty(key)) {

    			var n_quartos = array[key]["n_quartos"];
    			var valor_aluguel = array[key]["valor_aluguel"];
    			var n_banheiros = array[key]["n_banheiros"];
    			var area = array[key]["area"];

    			var cidade = array[key]["cidade"];
    			var bairro = array[key]["bairro"];
    			var rua = array[key]["rua"];
    			var estado = array[key]["estado"];

    			createCard(estado,cidade,bairro,rua,n_quartos,n_banheiros,area,valor_aluguel);

    		}
		}
    });

		
	}else{
		$.get(url, function(data, status){

    		console.log(JSON.parse(data));
    		var array = JSON.parse(data);
    		var len = JSON.parse(data).length;
    		console.log(len);
    		var results = $("#imv-search-result");//é um div
    		results.empty();
    	

    		for (var key in array) {
    			if (array.hasOwnProperty(key)) {
    				var n_quartos = array[key]["n_quartos"];
    				var valor_aluguel = array[key]["valor_aluguel"];
    				var n_banheiros = array[key]["n_banheiros"];
    				var area = array[key]["area"];

    				var cidade = array[key]["cidade"];
    				var bairro = array[key]["bairro"];
    				var rua = array[key]["rua"];
    				var estado = array[key]["estado"];

    				createCard(estado,cidade,bairro,rua,n_quartos,n_banheiros,area,valor_aluguel);

    			}
			}
    	});
	}

	return false

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

function createCard(estado,cidade,bairro,rua,quartos,banheiros,area,preco){
		//seletor da seção de resultados
    	var results = $("#imv-search-result");//é um div
    	
    //criar row class="col-12 col-sm-12  col-md-6 col-lg-4"
     	var row = document.createElement("div"); 
     	row.classList.add("col-12");
     	row.classList.add("col-sm-12");
     	row.classList.add("col-md-6");
     	row.classList.add("col-lg-4");

    	var card = document.createElement("div");
		card.classList.add("card");
		card.setAttribute("style","width: 18rem; margin-top: 3rem;");
		//devo criar uma <img> filha desse div
		var img = document.createElement("img");
		img.setAttribute("src","img/violet_best_waifu.gif");
		card.append(img);
		//append no card de card-body <div>
		var card_body = document.createElement("div");
		card_body.classList.add("card-body");
		card.append(card_body);
		//criando conteudo de card-body e atribuindo seu estado
		var card_title = document.createElement("h5");
		card_title.classList.add("card-title");
		card_title.append(estado);
		card_body.append(card_title);
		//append concatenado cidate+bairro+rua
		var card_text = document.createElement("p");
		card_text.classList.add("card-text");
		card_text.append(cidade);
		card_text.append(bairro);
		card_text.append(rua);
		
		card_body.append(card_text);

		//criar <ul> class="list-group list-group-flush"
		var ul = document.createElement("ul");
		ul.classList.add("list-group");
		ul.classList.add("list-group-flush");
		card.append(ul);
		//criar <li> list-group-item x4
		var li_quartos = document.createElement("li");
		var li_banheiros = document.createElement("li");
		var li_area = document.createElement("li");
		var li_preco = document.createElement("li");
		li_quartos.classList.add("list-group-item");
		li_banheiros.classList.add("list-group-item");
		li_area.classList.add("list-group-item");
		li_preco.classList.add("list-group-item");
		//append no <ul> pai
		ul.append(li_quartos);
		ul.append(li_banheiros);
		ul.append(li_area);
		ul.append(li_preco);
		//criar <b> , seus textos e spans x4
		var b_1 = document.createElement("b");
		var b_2 = document.createElement("b");
		var b_3 = document.createElement("b");
		var b_4 = document.createElement("b");

		var t_1 = document.createTextNode("Quartos: ");
		var t_2 = document.createTextNode("Banheiros: ");
		var t_3 = document.createTextNode("Área: ");
		var t_4 = document.createTextNode("Preço: ");

		var s_1 = document.createElement("span");
		var s_2 = document.createElement("span");
		var s_3 = document.createElement("span");
		var s_4 = document.createElement("span");

		//append texto dos spans aos spans
		s_1.append(quartos);
		s_2.append(banheiros);
		s_3.append(area);
		s_4.append(preco);

		b_1.append(t_1);
		b_2.append(t_2);
		b_3.append(t_3);
		b_4.append(t_4);

		b_1.append(s_1);
		b_2.append(s_2);
		b_3.append(s_3);
		b_4.append(s_4);
		//append nos <li> correspondentes
		li_quartos.append(b_1);
		li_banheiros.append(b_2);
		li_area.append(b_3);
		li_preco.append(b_4);
		//talvez add class aos spans
		//criar mais um card_body
		var card_body_2 = document.createElement("div");
		card_body_2.classList.add("card-body");
		
		var rent_btn = document.createElement("button");
		rent_btn.classList.add("btn");
		rent_btn.classList.add("btn-primary");
		var t_btn = document.createTextNode("Alugar");
		rent_btn.append(t_btn);
		card_body_2.append(rent_btn);
		card.append(card_body_2);

		row.append(card);
    	results.append(row);
}