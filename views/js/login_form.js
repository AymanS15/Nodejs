$(document).ready(function(){

    $( "#form" ).submit(function(event) {
        event.preventDefault();

        $.ajax({
            type: 'POST',
            url: '/login',
            data: $('#form').serialize(),
            dataType: "json",
            success: function(response){
                //alert("a");
                //console.log(response.Success);
                $('#form')[0].reset();

                document.getElementById("text").innerHTML=response.Success;
                document.getElementById("check").style.display = 'none';

                document.getElementById("text").style.display = 'inline';

                     //ADD THIS CODE
                     setTimeout(function(){
                        document.getElementById("text").innerHTML="";
                        document.getElementById("text").style.display = 'none';
                        document.getElementById("check").style.display = 'inline';

                     },2000);

                     if (response.Success=="Success!") {
                        document.getElementById("text").style.display = 'none';
                        document.getElementById("aa").click();
                     };
                 },
                 error: function() {
                 }
             })
    });

});