$(document).ready(function(){
$('.homeclick').click(function(){
    $('html,body').animate({scrollTop:$('#home').offset().top},800);
});

$('#containerTop').click(function(){
    $('html,body').animate({scrollTop:$('#home').offset().top},800);
});

$('.skillclick').click(function(){
    $('html,body').animate({scrollTop:$('#skill').offset().top},800);
});

$('.worksclick').click(function(){
    $('html,body').animate({scrollTop:$('#works').offset().top},800);
});

$('.contactclick').click(function(){
    $('html,body').animate({scrollTop:$('#contact').offset().top},800);
});

/*$('.upclick').click(function(){
    $('html,body').animate({scrollTop:$(0).offset().top},800);
});*/

// scroll時的smoove動畫

$('.page').smoove({opacity:'0', transition: "all 2s ease"});

});