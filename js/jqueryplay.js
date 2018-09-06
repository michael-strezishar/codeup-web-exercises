$(function(){

    $('#btn1').click(function(){

        $('#panel1').slideUp(1000).delay(1000).slideDown(1000);


    });

    $('#btn2').dblclick(function() {
        $('#panel2').slideUp('2000');

    });
    $('#btn3').mouseover(function(){
        $('#panel3').fadeOut(2000).delay(2000).fadeIn(1000);


    });

    $('#btn4').mouseover(function(){
        $('#panel4').fadeToggle(1000);

        $('#panel1').css('background-color', 'gray');
        $('#panel2').css('background-color', 'pink');
        $('#panel3').css('background-color', 'gray');
        $('#panel4').css('background-color', 'pink');



    });


});