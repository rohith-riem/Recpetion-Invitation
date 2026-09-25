/**
 * Wedding Reception
 * Sruthi K & Rohith A C
 */

/* Falling flowers */
(function ($) {
    "use strict";

    $('.sakura-falling').sakura();

})(jQuery);


/* Background music */
$(document).on('click', function () {

    var audio = document.getElementById("my_audio");

    if (audio) {
        audio.play().catch(function () {
            // Browser may block autoplay until user interacts.
        });
    }

});


/* =========================================
   COUNTDOWN
   Reception: 22 November 2026, 5:00 PM
   ========================================= */

var countDownDate = new Date("November 22, 2026 17:00:00").getTime();


var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;


    /* Time calculations */

    var days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    var minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    var seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );


    /* Display countdown */

    var timeElement = document.getElementById("time");

    if (timeElement) {

        timeElement.innerHTML =
            "<div class='container'>" +

            "<div class='days block'>" +
            days +
            "<br>Days</div>" +

            "<div class='hours block'>" +
            hours +
            "<br>Hours</div>" +

            "<div class='minutes block'>" +
            minutes +
            "<br>Minutes</div>" +

            "<div class='seconds block'>" +
            seconds +
            "<br>Seconds</div>" +

            "</div>";

    }


    /* When countdown reaches zero */

    if (distance < 0) {

        clearInterval(x);

        if (timeElement) {

            timeElement.innerHTML =
                "The celebration has begun!";

        }

    }

}, 1000);
