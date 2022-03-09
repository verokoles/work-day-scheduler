$(document).ready(function () {
    //using moment.js to generate time and write on html
    $("#currentDay").text(moment().format("MMMM Do YYYY, HH:mm:ss")); 
//when user clicks save
    $(".savBtn").on("click", function () {
        //get nearby values.
        console.log(this);
        var text = $(this).siblings(".userInput").val(); // taken the change from the sibling html description attribute
        var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute
         console.log(time);
        //set items in local storage.
        localStorage.setItem(time, text);
        //pull from localStorage
       
    })
    $("#9 .userInput").val(localStorage.getItem("9"));
    $("#10 .userInput").val(localStorage.getItem("10"));
    $("#11 .userInput").val(localStorage.getItem("11"));
    $("#12 .userInput").val(localStorage.getItem("12"));
    $("#13 .userInput").val(localStorage.getItem("13"));
    $("#14 .userInput").val(localStorage.getItem("14"));
    $("#15 .userInput").val(localStorage.getItem("15"));
    $("#16 .userInput").val(localStorage.getItem("16"));
    $("#17 .userInput").val(localStorage.getItem("17"));


    function hour() {
        var currentHour = moment().hour()
        // loop over time blocks
        $(".row").each(function () {
            var blockHour = parseInt($(this).attr("id"));
            console.log(blockHour, currentHour)
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }

        })
    }
    //call function
    hour();

});



