// Arquivo de funções da página index.html

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

// Abrindo menu ao clickar em "Começar"
$(document).on('click', '.btnEntrar', function(){
  $('#form1').slideToggle(function() {
    $('body').animate({scrollTop: altura}, '500');
  });
});