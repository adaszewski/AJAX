$(document).ready(function () { })

let programista = $("<div id='dane-programisty'></div>")
$("#przycisk").after(programista);

let przyciskPobierz = $("#przycisk").click(function () {
    $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php").done(function (data) {
        $("#dane-programisty").append("<br>Imię:", data.imie,"<br><br>Nazwisko:", data.nazwisko,"<br><br>Zawód: ", data.zawod, "<br><br>Firma: ", data.firma) 
})
})
