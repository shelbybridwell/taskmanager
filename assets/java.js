var todayDate = moment().format('dddd, MMM Do YYYY');
$("#todaysDate").html(todayDate);

function timeKeeper() {
    currentTime = moment().hour();

$(document).ready(function () {
        $(".saveBtn").on("click", function () {
            
            var text = $(this).siblings(".description").val();
            var time = $(this).parent().attr("id");
    
            localStorage.setItem(time, text);
        })

    $(".hour-block").each(function(){
        blockHour = parseInt($(this).attr("id").split("hour")[1]);
        if (blockHour < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("current");
            $(this).addClass("past");
        }
        else if (blockHour === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("current");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("current");

        }
    
    })
}
$("#hour8am .description").val(localStorage.getItem("hour8"));
$("#hour9am .description").val(localStorage.getItem("hour9"));
$("#hour10am .description").val(localStorage.getItem("hour10"));
$("#hour11am .description").val(localStorage.getItem("hour11"));
$("#hour12pm .description").val(localStorage.getItem("hour12"));
$("#hour13pm .description").val(localStorage.getItem("hour13"));
$("#hour14pm .description").val(localStorage.getItem("hour14"));
$("#hour15pm .description").val(localStorage.getItem("hour15"));
$("#hour16pm .description").val(localStorage.getItem("hour16"));
$("#hour17pm .description").val(localStorage.getItem("hour17"));

timeKeeper();
})