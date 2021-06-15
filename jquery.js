//Functions to slide panel when clicks in burguer name
$(document).ready(function(){
  $("#flip").click(function(){
  $("#panel").slideToggle("slow");
  });

  $("#flip2").click(function(){
    $("#panel2").slideToggle("slow");
    });

  $("#flip3").click(function(){
    $("#panel3").slideToggle("slow");
    });

  $('#submit-button').click(function(){
    alert('Thank you for your order. It will be ready soon :)');  
    })

  $('select#burguer-size').on('change', function() {
    if ($(this).val() == '16oz Supersize') {
      alert('Warning! Super Size Burguer can harm your health!');
    }
  });

});




