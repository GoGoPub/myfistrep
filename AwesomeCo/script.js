$('#bearsButton').click(function(){
    $('#Treebears').toggle('slow'); 
});
$('#mopsButton').click(function(){
   $('.mopstwo').toggle('slow'); 
});
$('#rabitButton').click(function(){
   $('#rabitone').toggle('slow'); 
});
$('#toggleButton').click(function(){
   $('#Treebears, .mopstwo, #rabitone')
    .toggle('fast');
});
$('nav li').hover(function(){
   $(this).animate({paddingLeft: '+=15px'}, 200);
}, function(){
    $(this).animate({paddingLeft: '-=15px'}, 200);   
});
$('#catButton').click(function(){
$('#cat').animate({
   opacity: 'toggle',
    height: 'toggle'
}, 'fast');
}); 