// Arquivo de funções da página cadastrar.html

var codigo; // variável para armazenar o código de barras
var modelo, fabricante, descricao, processador, sistema, memoria, tamanhoTela, wifi;
var foto = null;

$(document).on('click', '#sair', function(){
  location.replace("index.html");
});

// Abrindo o scanner da página cadastrar.html
$(document).on('click', '#btnScan', function(){
  // ativando o scaner
  window.plugins.barcodeScanner.scan( function(result) {
    if (result.cancelled == true){
      navigator.vibrate(500);
      navigator.notification.alert('Operação cancelada', null, 'Atenção');
    }
    else{
       codigo = result.text;

       console.log(codigo);

       setTimeout(function(){
         $('#form1').slideToggle(function() {
           $('body').animate({scrollTop: altura}, '500');
          });
       }, 1000, null);

      }

    }, function(error) {
      alert("Falha ao escanear: " + error);
    }
  );
});

// mudando para a etapa 3
$(document).on('click', '#page3', function(){

  if (( $('#modelo').val() == "" ) || ( $('#fabricante').val() == "")){
    navigator.notification.alert('Preencha os campos!', null, 'Atenção');
    $('input').val("");
  }
  else{

    $('#form2').slideToggle(function() {
      $('body').animate({scrollTop: altura}, '500');
    });
  }
});

// Ativando a câmera
$(document).on('click', '#camera', function(){
  navigator.camera.getPicture(onSuccess, onFail, {
    quality: 50,
    destinationType: Camera.DestinationType.DATA_URL
  });

  function onSuccess(imageData){
    foto = "data:image/jpeg;base64" + imageData;
  }
  function onFail(message){
    navigator.notification.alert('Falhou porque: ' + message);
  }
  $('#foto').modal('hide');
});

// Pegando imagem da galeria
$(document).on('click', '#album', function(){
  navigator.camera.getPicture(onSuccess, onFail, {
    quality: 50,
    destinationType: Camera.DestinationType.DATA_URL,
    sourceType: Camera.PictureSourceType.PHOTOLIBRARY
  });

  function onSuccess(imageData){
    foto = "data:image/jpeg;base64" + imageData;
  }
  function onFail(message){
    navigator.notification.alert('Falhou porque: ' + message);
  }
  $('#foto').modal('hide');
});

// mudando para a etapa 4
$(document).on('click', '#page4', function(){
  if ( $('#descricao').val() == ""){
    navigator.notification.alert('Descrição obrigatória!', null, 'Atenção');
  }
  else if (foto == null){
    navigator.notification.alert('Imagem obrigatória!', null, 'Atenção');
  }
  else{
    $('#form3').slideToggle(function(){
      $('body').animate({scrollTop: altura}, '500');
    })
  }
});
