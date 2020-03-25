



$(document).ready(function(){

    $("form#info").submit(function(event){
        event.preventDefault();

        var name =($("#name").val());
        var descrip =($("#descrip").val());
        var date =($("#date").val());
        var start=($("#start").val());
        
        var appointment = (" Name:  " + name + "  Description  " + descrip + "  Date  " + date + "  Start time  " + start );


        $("#output1").text( "Here is your appointment info: " + appointment);
        // $("#output").text("Here is your appointment info: " + appointment );
        
        
    

    })








})