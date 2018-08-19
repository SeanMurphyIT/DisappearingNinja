$(document).ready(function(){

    $('#ninja img').click(function(){
      $(this).hide();
    });

    $('#call-to-action button').click(function(){
        $('#ninja img').show();
      });

});