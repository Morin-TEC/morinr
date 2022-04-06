$(document).ready(function(){
    $('#idcontent').click(function (e){
        console.log(e.target.id)
        $(e.target).toggleClass('caja');
    })
});