// Arquivo de funções da página index.html

// Funções para redirecionar página
$(document).on('click', '#cadastrar', function(){
  location.replace("cadastrar.html");
});

$(document).on('click', '#lista', function(){
  location.replace("lista.html");
});

$(document).on('click', '#peckins', function(){
  location.replace("peckins.html");
});

// Abrindo menu ao clickar em "Começar"
$(document).on('click', '.btnEntrar', function(){
  $('#form1').slideToggle(function() {
    $('body').animate({scrollTop: altura}, '500');
  });
});
