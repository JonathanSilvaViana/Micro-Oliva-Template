(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
});

$(document).ready(function(){
    //enable all M framework functions
    M.AutoInit();
    $('.sidenav').sidenav().on('click tap', 'li a', () => {
        $('.sidenav').sidenav('close');
});

});

$('#download-button').click(function(){
    M.toast({html: 'Got ya!', classes: 'rounded white-text green lighten-3 flow-text software-template-name'});
});

//converte table para ul li
/*
$(document).ready(function() {
    var ul = $("<ul class='highlight centered responsive-table striped green accent-2 list'>");
    $("table tr").each(function(){
        var li = $("<li>")
        $("th, td", this).each(function(){
            var p = $("<p class='white-text'>").html(this.innerHTML);
            li.append(p);
        });
        ul.append(li);
    })    
    $("table").replaceWith(ul);    
});
*/