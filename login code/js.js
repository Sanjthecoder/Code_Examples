$(function(){


    $.ajax({

        url:"users.json",
        data:{},
        type:"GET",
        success: function(data){
            var userInfo = data.users;
            console.log(userInfo);
            
                // save in local storage
            $('#getDataButton').on("click", function(){

                localStorage.setItem('userInfo',JSON.stringify(userInfo));
            });
                // clear local storage 
            $('#clearDataButton').on("click", function(){
                localStorage.clear();
            });
            // submit button takes username and password compares to json file
            // if user exists then compare password otherwise append feedback invalid user 
            // dont even look at password 
            // is user correct and password wrong append invalid passward 
            /// for security you shouldnt tell user which one is wrong
            $('#submit').on("click", function(){

                var userName = $("#userName").val();
                var password = $("#password").val();
                //alert(password);

                for(var i =0; i<userInfo.length; i++)
                {
                    if(userName === userInfo[i].userName)
                    {
                         if(password === userInfo[i].password)
                            {   
                                fillFeedback("Succesful Login");
                                break;
                            }
                        else{
                            fillFeedback("Invalid login ");
                            break;
                        }
                        
                    }

                    else if(i === userInfo.length -1 ){
                        fillFeedback("Invalid user");
                    }
                    
                }
                        

            });

            function fillFeedback(text){

                $("#feedback").html('');
                $("#feedback").append("<p>" + text +"</p>");

            }

        }

    });


});