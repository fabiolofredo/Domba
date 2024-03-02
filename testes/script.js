
/*
<header >
<nav class="top-menu">
<ul>
    <li><a href="javascript:openPage('/pages/home.html');">Home</a></li>
    <li class="dropdown">
        <a href="#">Catrias</a>
        <div class="dropdown-content">
            <ul>
                <li><a href=>C 14444411184544yh~çlu2341251wwww11111111 11123232111111111 11111111</a></li>
                <li><a href=>C 222 </a></li>
                <li><a href="javascript:openPage(12);">aaa</li>
            </ul>
            

            
        </div>
    </li>
    <li><a href="javascript:openPage('/pages/contato.html');">Contato</li>
</ul>
</nav>
</header>
*/

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




function createMenu(){
    var menu = "<header><nav class='top-menu'><ul>" // início
    menu += "<li><a href='index.html'>Home</a></li>" // home
    menu += "<li class='dropdown'><a href='#'>Cursos</a><div class='dropdown-content'><ul>" // início do dropdown
    menu += "<li><a href=pages/Html.html>Html</a></li>"
    menu += "<li><a href=pages/CSS.html>CSS</a></li>"
    menu += "<li><a href=pages/JavaScript.html>JavaScript</a></li>"
    menu += "</ul></div></li>" // fim do dropdown
    menu += "<li><a href='pages/contato.html'>Contato</a></li>" // contato
    menu += "</ul></nav></header>" // fim
    document.getElementById("menu").innerHTML = menu;
}
*/

$(document).ready(function(){ 
    $.get("menu.html", function(data) {
      $("#menu").html(data);
    });
}); 


function openPage(page) {
    //window.open("https://www.w3schools.com");
    window.alert(page + 10);
    document.getElementById('pagina').src=page
  
  }

/*
$(function() {
    // jQuery goes here...
  
    // Uncomment this line to fade out the red box on page load
    // $(".red-box").fadeOut(2000);
    $(".teste1").delay(3000).slideUp(1000).slideDown(200);
    $(".teste1").slideUp(1000).slideDown(1000);
    $(".teste2").slideUp(1000);
    $(".teste2").slideDown(1000,function(){alert("aaa");});
});

*/

