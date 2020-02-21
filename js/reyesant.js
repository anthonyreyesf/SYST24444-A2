//Create arrays
var categoriesList = new Array();
var flowerInfoList = new Array();
var rowID;

//Create classes
class Catagories {
    constructor (category, pic){
        this.category = category;
        this.pic = pic;
    }
}

let college = 'Sheridan';
for(let letter of college){
    console.log(letter);
}

class Flowers {
    constructor (category, price, instructions, photo, name, productId){
        this.category = category;
        this.price = price;
        this.instructions = instructions;
        this.photo = photo;
        this.name = name;
        this.productId = productId;
    }
}

$(document).ready(function(){
    $.getJSON("data/A2-Flowers.json", function(data){
        console.log("In doc ready.");
        console.log(data);

        //Assign personal information to variables
        const fullName = data.personal.myFullName;
        const studentNum = data.personal.myStudentNumber;
        const loginName = data.personal.myLoginName;
        const myCampus = data.personal.myStudentNumber;

        //Set local storages
        localStorage.setItem("fullName", fullName);
        localStorage.setItem("studentNumber", studentNum);
        localStorage.setItem("loginName", loginName);
        localStorage.setItem("campus", myCampus);

        //Initialize arrays
        for(let x of data.categories){
            categoriesList.push(new Catagories(x.category, x.pic));
        }

        for(let x of data.flowerlist){
            flowerInfoList.push(new Flowers(x.category, x.price, x.instructions, x.photo, x.name, x.productId));
        }

        console.log(categoriesList);
        console.log(flowerInfoList);

        //Set local storage for flower list
        localStorage.setItem("flowerList", JSON.stringify(flowerInfoList));        

        //Set index.html header and footer
        $("#title").html("Assignment #3 / " + data.personal.myFullName + " / " + data.personal.myStudentNumber);
        $("#footer").html(data.personal.myLoginName + " - " + data.personal.myCampus);

        //set index.html body
        for(let x=0; x<categoriesList.length; x++){
            $("#categoriesList").append(`<li id="catName${x}"><a href="pages/page.html">${JSON.stringify(categoriesList[x].category).slice(1,-1)}</a></li>`);
        };

        for(let x=0; x<categoriesList.length; x++){
            $("#categoriesImg").append(`<img id="catImg${x}" src="images/${categoriesList[x].pic}">`);
        };

        //Save selected category to local storage
        $("a").click( function saveCategory(){
            var ArrayIndex = $(this).closest("li").attr("id").slice(7);
            localStorage.setItem("category", JSON.stringify(categoriesList[ArrayIndex].category).slice(1,-1));
            localStorage.setItem("categoryImg", categoriesList[ArrayIndex].pic);
        });
    });
});