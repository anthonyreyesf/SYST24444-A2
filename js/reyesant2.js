var name = localStorage.getItem("fullName");
var studentNum = localStorage.getItem("studentNumber");
var loginName = localStorage.getItem("loginName");
var campus = localStorage.getItem("campus");
var categoryName =localStorage.getItem("category");
var categoryImg = localStorage.getItem("categoryImg");

$(document).ready(function(){
    $.getJSON("../data/A2-Flowers.json", function(data){
        console.log("In doc ready.");
        console.log(data);

        //Set page.html header and footer
        $("#title").html("Assignment #3 / " + name + " / " + studentNum);
        $("#category").html(categoryName);
        $("#footer").html(loginName + " - " + campus);
        //Set page.html body
        for(let x of data.flowerlist){
            if(JSON.stringify(x.category).slice(1,-1) === categoryName){
                $("#flowerList").append(`<option id="${x}" value="${x.name}">${x.name}</option>`);
            }
        }

        $("select").on("change", function displayInfo(){
            for(let x of data.flowerlist){
                if($(this).val() === JSON.stringify(x.name).slice(1,-1)){
                    //$("#flowerInfo").append(`<h3>${x.name}</h3>`);
                    //$("#flowerInfo").append(`<img src="../images/${x.photo}">`);
                    $("#fName").replaceWith(`<h3 id="fName">${x.name}</h3>`);
                    $("#fImg").replaceWith(`<img id="fImg" src="../images/${x.photo}">`);
                    $("#fPrice").replaceWith(`<p id="fPrice">$${x.price}</p>`);
                    $("#fInstr").replaceWith(`<p id="fInstr">${x.instructions}</p>`);
                }
                console.log($(this).val());
                console.log(JSON.stringify(x.name).slice(1,-1));
            }
        });


    });
});
