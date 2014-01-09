$(document).ready(function() {
    'use strict';
    var submit = $('#submit');
    var form = $('#form');
    $(form).validate({
        submitHandler: function() {

            $.ajax({
                type: 'POST',
                url: 'comment',
                cache: false,
                data: form.serialize(), //form serialize data
                beforeSend: function() {
                    // change submit button value text and disabled it
                    submit.val('Wysyłanie...').attr('disabled', 'disabled');
                },
                success: function(data) {
                    // Append with fadeIn see http://stackoverflow.com/a/978731
                    var item = $(data).hide().fadeIn(800);
                    $('#comments').prepend(item);
                    // reset form and button
                    form.trigger('reset');
                    submit.val('Zapisz').removeAttr('disabled');
                },
                error: function(e) {
                    alert(e);
                }
            });

        },
        rules: {
            author: {
                required: true
            },
            body: {
                required: true
            }
        },
        messages: {
            author: "Wpisz swoje imię",
            body: "Wpisz treść komentarza"
        },
        errorElement: "div",
        errorPlacement: function(error, element) {
            element.after(error);
        }

    });
});