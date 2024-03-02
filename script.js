/* NOTAS

github
simulador html,css,js
obs
exemplos w3schools
manter notas dos exercícios feitos 
chatgpt
procurar google
mndn
stackoverflow

*/
/* TO DO

jquery pro menu, e ver o root dos arquivos

*/

/*
$(document).ready(function(){ 
    $.get("menu.html", function(data) {
      $("#menu").html(data);
    });
}); 
*/
function createMenu(){
  $.get("menu.html", function(data){$("#menu").html(data);});
}
function createMenuInsideFolder(){
  $.get("../menu_inside_folder.html", function(data){$("#menu").html(data);});
}
$(function() {
    // jQuery goes here...
  
    // Uncomment this line to fade out the red box on page load
    // $(".red-box").fadeOut(2000);
    $(".teste1").delay(3000).slideUp(1000).slideDown(200);
    $(".teste1").slideUp(1000).slideDown(1000);
    $(".teste2").slideUp(1000);
    //$(".teste2").slideDown(1000,function(){alert("aaa");});
});



