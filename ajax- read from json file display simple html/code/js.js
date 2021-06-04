//function that reads use the json file, store in variable 
// loop through to display 
// create for buttons 
// on click method 
 //console.log(company[0].name);
//console.log(company[0].image);


$(function(){

    $.ajax({
            url:"companyinfo.json",
            data:{},
            type:"GET",
            success: function(res){
            // read all the data once and store into variable 
            var company = res.companies;


        $("#btn1").on("click", function(){
    
            $("#displayCompany").html("<p>" + company[0].name + "</p>");
            $("#displayCompany").append("<p>" + company[0].city + "</p>");
            $("#displayCompany").append("<p>" + company[0].province + "</p>");
            $("#displayCompany").append("<img src='"+company[0].image +"' >");
    
        });

        $("#btn2").on("click", function(){

            $("#displayCompany").html("<p>" + company[1].name + "</p>");
            $("#displayCompany").append("<p>" + company[1].city + "</p>");
            $("#displayCompany").append("<p>" + company[1].province + "</p>");
            $("#displayCompany").append("<img src='"+company[1].image +"' >");

        });

        $("#btn3").on("click", function(){

            $("#displayCompany").html("<p>" + company[2].name + "</p>");
            $("#displayCompany").append("<p>" + company[2].city + "</p>");
            $("#displayCompany").append("<p>" + company[2].province + "</p>");
            $("#displayCompany").append("<img src='"+company[2].image +"' >");
        });


              
        }

    });


});