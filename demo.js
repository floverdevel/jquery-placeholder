/**
 * when the DOM is ready to be manipulated
 */
$(document).ready(function() {

    $('#left input[type=text], #left input[type=password]').placeholder({
        'background' : '#f0f0f0',
        'text' : {
            'username' : 'nom d\'utilisateur',
            'password' : 'mot de passe',
            'lastname' : 'nom de famille',
            'firstname' : 'prénom'
        }
    });
});
