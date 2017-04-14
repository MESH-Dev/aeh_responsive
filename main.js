$(function(){
   $('#loginButton').click(function(event){
      event.preventDefault();
      if ($('#searchPanel').css('display') == 'block'){
         $('#searchPanel').slideToggle();
      };
      $('#loginBoxPanel').slideToggle();
   });

   $('#searchButton').click(function(){
      if ($('#loginBoxPanel').css('display') == 'block'){
         $('#loginBoxPanel').slideToggle();
      };
      $('#searchPanel').slideToggle();
   });

   $('#mobile-menu-trigger').sidr({
      side: 'right'
   });
});
