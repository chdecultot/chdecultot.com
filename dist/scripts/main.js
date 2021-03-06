$(document).ready(function(){


        // Script for the main page sentence with malarkey
        var elem = document.querySelector('#headWords');
        var opts = {
         typeSpeed: 100,
         deleteSpeed: 100,
         pauseDelay: 5000,
         loop: true,
         postfix: ''
        };
    if (elem !== null){
        if (document.documentElement.lang == 'fr') {
        malarkey(elem, opts).type('d\'améliorer vos outils internes ?').pause().delete()
            .type('d\'un meilleur site web ?').pause().delete()
            .type('de visualiser vos données ?').pause().delete()
                .type('de plus d\'automatisation ?').pause().delete();
        } else {
            malarkey(elem, opts).type('to improve your internal tools ?').pause().delete()
                .type('a better website ?').pause().delete()
                .type('to visualize your data ?').pause().delete()
                .type('more automation ?').pause().delete();

        };
    };


        // Script to show-up the contact form
        $("#messageButton").click( function() {
            $("#phoneNumber").hide('slow');
            $("#aboutMe").hide('slow');
            $("#contactForm").toggle('slow');
        });

        // Script to show-up the about-me section
        $("#aboutButton").click( function() {
            $("#contactForm").hide('slow');
            $("#phoneNumber").hide('slow');
            $("#aboutMe").toggle('slow');
        });

        // Script to show-up the phone Number
        $("#phoneButton").click( function() {
            $("#contactForm").hide('slow');
            $("#aboutMe").hide('slow');
            $("#phoneNumber").toggle('slow');
        });

        // Script for the form submission
    $("#contactForm").submit(function() {
        if ($('input#website').val().length != 0) {
            return false;
        }
            });


});
