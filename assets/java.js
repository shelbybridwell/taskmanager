function timeKeeper() {
// tracks current time
    todayDate = moment().format('dddd, MMM Do YYYY');
    $("#todaysDate").html(todayDate);

    currentTime = moment().hour();

    $(".hour-block").each(function(){
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
//changes background based on time
        if (blockHour < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockHour === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    
    })
}
//gets local storage info
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

timeKeeper();
//save button
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        
        text = $(this).siblings(".description").val();
        time = $(this).parent().attr("id");
//saves entered text
        localStorage.setItem(time, text);
    })
})