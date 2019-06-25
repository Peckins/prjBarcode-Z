// Arquivo de funções do aplicativo

// Configuração de plugins

// plugin de vibração
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.vibrate);
}

// plugin de notificação
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.notification);
}

// plugin de camera
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.camera);
}



// Função para configurar a animação da página de cadastro
function ConfigurarPagina(){
  // Configurando tamanho
  var altura = $(window).height();
  var largura = $(window).width();

  $('.form').css('height', altura);
  $('.form').css('width', largura);
}

// função de cadastrar produtos no banco
function cadastrar(){

}

// Função para listar produtos
function listar(){
  // conectando-se ao banco
  $.ajax({
    type: "get",
    url: "#",
    data: "#",
  });
}
