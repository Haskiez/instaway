$(document).ready(function() {
    // set authed if there is an access token on the url
    console.log(window.location.hash);
    // when the document loads, see if the user is already authed
    if (window.localStorage.getItem('authed')) {
        $('#auth').hide();
        $('#deauth').show();
    } else {
        $('#auth').show();
        $('#deauth').hide();
    }
    // when user clicks authorize, take them to authorization page
    $('#auth').click(function() {
        // if already authorized, hide the button : else take them to auth page
        let authed = window.localStorage.getItem('authed');
        if (authed) {
            $('#auth').hide();
            $('#deauth').show();
        } else {
            window.location.href = 'https://api.instagram.com/oauth/authorize/?client_id=b2e3b173ea514f0083acd9d9af08fa69&redirect_uri=https://haskiez.github.io/instaway/&response_type=token'
        }
    });

    $('#deauth').click(function() {
        let authed = window.localStorage.getItem('authed');
        if (authed) {
            window.localStorage.removeItem('authed');
            $('#deauth').hide();
            $('auth').show();
        } else {
            // hide this button and show the auth button
            $('#deauth').hide();
            $('#auth').show();
        }
    })
});