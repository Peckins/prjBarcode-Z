// Arquivo de funções do aplicativo

// Funções para redirecionar página
$(document).on('click', '#cadastrar', function(){
  window.location = "cadastrar.html";
});

$(document).on('click', '#lista', function(){
  window.location = "lista.html";
});

$(document).on('click', '#peckins', function(){
  window.location = "peckins.html";
});

// Função para listar produtos
function listar(){
  // conectando-se ao banco
  $.ajax({
    type: "get",
    url: "#",
    data: "#",
  });
}

// Função para configurar a animação da página de cadastro
function ConfigurarPagina(){
  // Configurando tamanho
  var altura = $(window).height();
  var largura = $(window).width();

  $('.form').css('height', altura);
  $('.form').css('width', largura);
}

$(document).on('click', '#btnScan', function(){
  $('#form1').slideToggle(function() {
    $('body').animate({scrollTop: altura}, '500');
  });
});

$(document).on('click', '.btnEntrar', function(){
  $('#form1').slideToggle(function() {
    $('body').animate({scrollTop: altura}, '500');
  });
});
