/*

*/

$().ready(function() {
  $('#form').submit(function(){
    $('#main').children('a').fadeOut(function(){
      $('#main').html('');
    });
  var query = $(this).children('input=["name"]').val();
  if (!$query) return false;
  $('#main').text('loading...');

  console.log('document is ready');
});
