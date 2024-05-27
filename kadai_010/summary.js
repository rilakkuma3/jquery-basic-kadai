$(function(){
  $('#change-color').on('click',function(){
    $('#target').css("color","red");
  });

  $('#change-text').on('click',function(){
    if($('#target').text() === 'Hello!'){
      $('#target').text('こんにちは！');
    } else {
      $('#target').text('Hello!');
    }
  });

  $('#fade-out').on('click', function() {
    $('#target').fadeOut();
  });

  $('#fade-in').on('click', function() {
    $('#target').fadeIn();
  });

});
