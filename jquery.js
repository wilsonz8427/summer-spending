$(function() {
    $('body').fadeIn(1500);
    
    
    $('#cook').click(function(){
        $('#cookp').toggleClass('hidden');
    });
    
    $('#game').click(function(){
        $('#gamep').toggleClass('hidden');
    });
    
    $('#party').click(function(){
        $('#partyp').toggleClass('hidden');
    });
    
    
    $('#hikebut').click(function(){
        $('#hikeinfo').toggleClass('hidden');
    });
    
    $('#amusebut').click(function(){
        $('#amuseinfo').toggleClass('hidden');
    });

});
    