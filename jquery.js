$(function() {
    $('body').fadeIn(1500);


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

                        $("section").fadeIn(1250);
                        
                    });
                    
                }
                
            });

    });
    
});
