/**
 * when the DOM is ready to be manipulated
 */
$(document).ready(function() {

    $('#xhtml input[type=text], #xhtml input[type=password]').placeholder({
        'background' : '#ff0000',
        'color' : '#00ff00',
        'text' : {
            'username1' : 'Doit &ecirc;tre unique',
            'password1' : 'mot de passe',
            'lastname1' : 'nom de famille',
            'firstname1' : 'pr&eacute;nom'
        }
    });
});
