function clock() {
    //Save the times in variables
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var month = today.getMonth();
    var day = today.getDate();
    var year = today.getFullYear();
    var monthNames = ["JAN.", "FEB.", "MAR.", "APR.", "MAY.", "JUN.", "JUL.", "AUG.", "SEP.", "OCT.", "NOV.", "DEC."];
    //Set the AM or PM time
    if (hours >= 12) {
        meridiem = "PM";
    }
    else {
        meridiem = "AM";
    }
    //convert hours to 12 hour format and put 0 in front
    if (hours > 12) {
        hours = hours - 12;
    }
    else if (hours === 0) {
        hours = 12;
    }
    //Put 0 in front of single digit minutes and seconds
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    else {
        minutes = minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    else {
        seconds = seconds;
    }
    document.getElementById("clock").innerHTML = (meridiem  + " " + hours + ":" + minutes);
    document.getElementById("date").innerHTML = (monthNames[month] + " " + day + " " + year);
}
setInterval('clock()', 0);





function background() {
    // document.body.style.backgroundImage = "url('https://media.giphy.com/media/8YzhcFn8kmsYU/giphy.gif')";
    var body=document.body;
    var a=document.querySelector('a');
    body.classList.toggle("background");
}


