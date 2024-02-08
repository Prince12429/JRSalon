document.getElementById("appointment-form").addEventListener("submit", function (event) {

    event.preventDefault();


    var selectedDate = document.getElementById("date").value;
    var selectedTime = document.getElementById("time").value;
    var selectedService = document.getElementById("service").value;
    var selectedStylist = document.getElementById("stylist").options[document.getElementById("stylist").selectedIndex].text;


    var summaryUrl = "appointment-summary.html" +
        "?date=" + encodeURIComponent(selectedDate) +
        "&time=" + encodeURIComponent(selectedTime) +
        "&service=" + encodeURIComponent(selectedService) +
        "&stylist=" + encodeURIComponent(selectedStylist);


    window.location.href = summaryUrl;
});
