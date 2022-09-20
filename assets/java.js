todayDate = moment().format('dddd, MMM Do YYYY');
$("#todaysDate").html(todayDate);

function timeKeeper() {
    currentTime = moment().hour();

$(document).ready(function () {
        $(".saveBtn").on("click", function () {
            
            text = $(this).siblings(".description").val();
            time = $(this).parent().attr("id");
    
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
$("#8am .description").val(localStorage.getItem("hour8"));
$("#9am .description").val(localStorage.getItem("hour9"));
$("#10am .description").val(localStorage.getItem("hour10"));
$("#11am .description").val(localStorage.getItem("hour11"));
$("#12pm .description").val(localStorage.getItem("hour12"));
$("#13pm .description").val(localStorage.getItem("hour13"));
$("#14pm .description").val(localStorage.getItem("hour14"));
$("#15pm .description").val(localStorage.getItem("hour15"));
$("#16pm .description").val(localStorage.getItem("hour16"));
$("#17pm .description").val(localStorage.getItem("hour17"));

timeTracker();
})