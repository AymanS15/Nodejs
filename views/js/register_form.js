$(document).ready(function(){
    
    $( "#form1" ).submit(function(event) {
        event.preventDefault();

        $.ajax({
            type: 'POST',
            url: '/register',
            data: $('#form1').serialize(),
            dataType: "json",
            success: function(response){
                //alert("a");
                //console.log(response.Success);
                $('#form1')[0].reset();

                document.getElementById("text1").innerHTML=response.Success;
                document.getElementById("check1").style.display = 'none';

                document.getElementById("text1").style.display = 'inline';

                     //ADD THIS CODE
                     setTimeout(function(){
                         document.getElementById("text1").innerHTML="";
                         document.getElementById("text1").style.display = 'none';
                         document.getElementById("check1").style.display = 'inline';
                     },3000);
                     if (response.Success=="You are regestered,You can login now.") {
                        document.getElementById("text1").style.display = 'none';
                         document.getElementById("bb").click();

                     };
                 },
                 error: function() {
                 }
             })
    });
});