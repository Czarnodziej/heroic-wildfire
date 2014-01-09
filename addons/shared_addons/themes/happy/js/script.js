//  A baseline for javascript usage across all pages (main layout + separate views: autor, kontakt+article, javascript)
// Plain JS:
// main layout - mobilBGAttachFix, fixes backgroundAttachment=fixed in mobile web browsers (esp. android, not tested in other devices due to lack of hardware)
// autor - button behavior
// jQuery:
// kontakt+article - placeholder plugin for IE
// javascript - JqueryUI

// Using conditional statements to detect DOM features and load them if they are present.


//regular JavaScript
var mobilBGAttachFix; //fixes backgroundAttachment=fixed in mobile web browsers (esp. android)
mobilBGAttachFix = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i.test(navigator.userAgent)) {
        document.body.style.backgroundAttachment = "scroll"; //user agent sniffing is bad, todo: better solution
    }
};
mobilBGAttachFix();

if (document.getElementById('skills') !== null) {
    var przycisk;
    przycisk = function() { //fixes backgroundAttachment=fixed in mobile web browsers (esp. android)
        var button = document.getElementById('button');
        button.onclick = function() {
            var skillVis = document.getElementById('skills') || document.getElementById('skillsv'); //finds both states of the button
            if (skillVis.id === 'skills') {
                skillVis.id = 'skillsv';
                button.textContent = 'Wróć do samych gwiazdek';
            } else {
                skillVis.id = 'skills';
                button.textContent = 'Pokaż sensowniejszy opis';
            }
        };
    };
    przycisk();
}

if (typeof jQuery != 'undefined') {

    //jQuery functions

    //datepicker and tabs
    if (typeof datepicker != 'undefined') {
        $(function() {
             //   Polish initialisation for the jQuery UI date picker plugin.
             //   Written by Jacek Wysocki (jacek.wysocki@gmail.com).
             //   Modified by Marcin Mongiało (pagodemc@gmail.com).

            $.datepicker.regional.pl = { //dot notation all the way
                closeText: 'Zamknij',
                prevText: '&#x3c;Poprzedni',
                nextText: 'Następny&#x3e;',
                currentText: 'Dziś',
                monthNames: ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca',
                    'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'
                ], //righteous grammar fixes
                monthNamesShort: ['Sty', 'Lu', 'Mar', 'Kw', 'Maj', 'Cze',
                    'Lip', 'Sie', 'Wrz', 'Pa', 'Lis', 'Gru'
                ],
                dayNames: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
                dayNamesShort: ['Nie', 'Pn', 'Wt', 'Śr', 'Czw', 'Pt', 'So'],
                dayNamesMin: ['N', 'Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So'],
                weekHeader: 'Tydz',
                dateFormat: 'DD, d MM yy',
                firstDay: 1,
                isRTL: false,
                showMonthAfterYear: false,
                yearSuffix: ''
            };
            $.datepicker.setDefaults($.datepicker.regional.pl);

            $("#datepicker")
                .datepicker({
                    autoSize: true,
                    regional: "pl",
                    showWeek: true,
                    showOtherMonths: true,
                    selectOtherMonths: true,
                    showButtonPanel: true,
                    changeMonth: true,
                    changeYear: true,
                    yearRange: "1982:2032"
                });
            $(document)
                .tooltip({
                    track: true
                });
            var tabs = $("#tabs")
                .tabs();
            tabs.find(".ui-tabs-nav")
                .sortable({
                    axis: "x",
                    stop: function() {
                        tabs.tabs("refresh");
                    }
                });
            $('#tabs').css('visibility', 'visible'); //makes jQueryUI tabs visible after script executes to avoid FOUC. FOUC is bad!
        });
    }

    //"Form Placeholder element" jQuery plugin
    if(typeof jQuery.fn.placeholder != 'undefined'){
        jQuery('input, textarea').placeholder();
    }
}