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

   $('div#people').smoothDivScroll({
      startAtElementId: 'starter',
      touchScrolling: true
   });

   var mainContentHeight = document.getElementById('main-content-container').offsetHeight;
   // console.log(document.documentElement.clientWidth);
   if (document.documentElement.clientWidth > 750){
      $('.content-column').each(function(){
         $(this).height(mainContentHeight);
      });
   };
});
