

$( document ).ready(function() {
    $('#submit').click(function validation()
    {
        let userId =$("#username").val();
        let pswd =$("#pwd").val();
                function validate()
                {
                    if(userId=="admin"&pswd=="12345")
                    {window.location.href = 'welcome.html';
                    alert("Validation success")
                        return true;
                }
                else if(userId==""||pswd=="")
                {
                    alert("Fields can't be empty");
                    return false;
                }
                else
                {
                    alert("Validation failed");
                    return false;
                }
    }
    validate();
      
});





    let todolist = document.getElementById("getlist");
    $("#getlist").click(function () {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(this.responseText);
                var output = "";
                for (var i = 0; i < response.length; i++) {
                    output +="<tr>";
                    output +="<td>" + response[i].userId + "</td>";
                    output +="<td>" + response[i].id + "</td>";
                    output +="<td>" + response[i].title+ "</td>";
                    output +="<td>" + '<input type="checkbox" >'  + "</td>" +"</tr>";
                    
                }
                document.getElementById("data").innerHTML = output;
                console.log(output);
            }
        }
        xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
        xhttp.send();
    }
    )
    let todoPromise = new Promise(function(todoResolve, todoReject) {
        $(document).change(function(){
                var check =  $('input:checkbox:checked').length;
            if(check>=5)
                    { todoResolve("You have completed 5 tasks");}

            });
            
                
            

    });
    
    todoPromise.then(
        function(value) 
        {
            setTimeout(function(){ alert(value); }, 1000);
        },
    );

 

})
