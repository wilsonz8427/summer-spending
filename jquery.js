$(function() {
    $('body').fadeIn(1500);


    $('#cook').click(function() {
        $('#cookp').toggleClass('hidden');
    });

    $('#game').click(function() {
        $('#gamep').toggleClass('hidden');
    });

    $('#party').click(function() {
        $('#partyp').toggleClass('hidden');
    });


    $('#hikebut').click(function() {
        $('#hikeinfo').toggleClass('hidden');
    });

    $('#amusebut').click(function() {
        $('#amuseinfo').toggleClass('hidden');
    });



    $("a").on("click", function(event) {
        event.preventDefault(); //stops the a automatic change

        const href = $(this).attr("href"); //gets the href attribute from the clicked a

        window.history.pushState(null, null, href); //changes the url of page without refresh

        $.ajax({ //tbh no idea
            url: href,
            success: function(data) {
                $("section").fadeOut(500, function() {

                    const newPage = $(data).filter("section").html(); //gets data from the clicked a href 
                    $("section").html(newPage); //sets the data to the current section

                    $("section").fadeIn(500);
                });
            }
        });
    });


















});
