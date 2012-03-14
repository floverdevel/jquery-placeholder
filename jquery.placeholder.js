/**
 * simule un placeholder html5 en utilisant des techniques de xhtml
 * s'applique sur un selecteur css3 (par exemple : $('input[type=text],input[type=password]').placeholder();
 * 
 * @todo: les options recoivent un array d'objet
 *  $('.placeholded').placeholder({
 *     'firstname': 'Entrez votre prénom',
 *     'lastname': 'Entrez votre nom de famille',
 *     'username': 'Choisissez un nom d\'usager'
 * });
 * @todo: trouver les labels associés au input et les cacher si spécifié dans les options
 * @todo: générer un span en position en position absolute pour qu'il soit en arrière du input
 * @todo: changer le background du input en none
 * @todo: recevoir dans les options la couleur de fond du input pour lorsqu'on veut cacher le placeholder
 * @todo: copier le style du input pour que le span en arrière ait la même grandeur
 */
(function( $ ) {
    $.fn.placeholder = function(options) {
        
        console.log('jQuery.fn.placeholder invoked');
        console.log($);

        var s = $('<span />');
        console.log(s);
        
        // valeurs par défaut, on les étend par les options reçus en paramètre
        var settings = $.extend({
            'background' : '#fff',
            'objects' : 'input[type=text], input[type=password]',
            'debug' : 'none'
        }, options);
        
        return this.each(function() {
            $this = $(this);
            console.log(this);
            console.log($this);
            
            span = $this.clone();
            span.attr('id', $this.attr('id') + '_spanned'); 
            console.log(span);

            _render($this);

            // lorsqu'on appui sur une touche au clavier
            $this.keyup(function() {
                _render($(this));
            });
        
            // lorsqu'on sort d'un champ
            $this.focusout(function() {
                _render($(this));
            });
        });

        /**
         * update visual part of the input and its placeholder
         */
        function _render(obj) {
            if (obj.attr('value') == '') {
                obj.css('background', 'none');
            }
            else {
                obj.css('background', settings.background);
            }
            console.log(obj);
        }

    };
})( jQuery );

