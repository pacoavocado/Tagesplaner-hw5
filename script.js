let currentDay = document.querySelector('#currentDay');


clock();

function clock() {
    
    setInterval(function () {
        let currentTime = moment().format("MMM Do, YYYY hh:mm:ss");
        $(currentDay).text(currentTime)
        
    }, 1000);
  }

    $("#9am").val(localStorage.getItem("#9am"));
    $("#10am").val(localStorage.getItem("#10am"));
    $("#11am").val(localStorage.getItem("#11am"));
    $("#12pm").val(localStorage.getItem("#12pm"));
    $("#1pm").val(localStorage.getItem("#1pm"));
    $("#2pm").val(localStorage.getItem("#2pm"));
    $("#3pm").val(localStorage.getItem("#3pm"));
    $("#4pm").val(localStorage.getItem("#4pm"));
    $("#5pm").val(localStorage.getItem("#5pm"));


$('.saveBtn').on('click', function (e) {
    localStorage.setItem("#9am", $("#9am").val())
    localStorage.setItem("#10am", $("#10am").val())
    localStorage.setItem("#11am", $("#11am").val())
    localStorage.setItem("#12pm", $("#12pm").val())
    localStorage.setItem("#1pm", $("#1pm").val())
    localStorage.setItem("#2pm", $("#2pm").val())
    localStorage.setItem("#3pm", $("#3pm").val())
    localStorage.setItem("#4pm", $("#4pm").val())
    localStorage.setItem("#5pm", $("#5pm").val())
})