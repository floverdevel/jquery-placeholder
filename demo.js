/**
 * when the DOM is ready to be manipulated
 */
$(document).ready(function() {

    $('#xhtml input[type=text], #xhtml input[type=password]').placeholder({
        'text' : {
            'username1' : 'Nom d\'usager',
            'password1' : '... fonctionne aussi avec les input de type "password" ...',
            'lastname1' : '... fonctionne aussi avec du texte trop long qui est tronqué pour ne pas dépasser le input qui lui est associé',
            'firstname1' : '.. et même avec un champ qui était pré-rempli'
        }
    });
});
