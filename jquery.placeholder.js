/**
 * simule un placeholder html5 en utilisant des techniques de xhtml
 * s'applique sur un selecteur css3 (par exemple : $('input[type=text],input[type=password]').placeholder();
 *
 * @exemple: tous les éléments de classe placeholded auront le même texte, soit : «Remplissez ce champ»
 *  $('.placeholded').placeholder({
 *     'background': '#000',
 *     'text': 'Remplissez ce champ'
 * });
 *
 * @exemple: chaque élément de classe placeholded aura son texte spécifié par l'objet text (mapping entre l'id de l'élément et la clé de l'objet)
 *  $('.placeholded').placeholder({
 *     'background': '#000',
 *     'text' : {
 *         'firstname': 'Entrez votre prénom',
 *         'lastname': 'Entrez votre nom de famille',
 *         'username': 'Choisissez un nom d\'usager'
 *     }
 * });
 * @todo: générer un span en position en position absolute pour qu'il soit en arrière du input
 * @todo: copier le style du input pour que le span en arrière ait la même grandeur
 */
(function( $ ) {
    $.fn.placeholder = function(options) {

        // valeurs par défaut, on les étend par les options reçus en paramètre
        var settings = $.extend({
            'background' : '#fff',
            'text' : ''
        }, options);

        return this.each(function() {
            $this = $(this);

            var s = $('<span />');
            s.removeAttr('id');
            s.css('width', $this.css('width'));
            s.css('height', $this.css('height'));
            s.css('top', $this.css('top'));
            s.css('left', $this.css('left'));
            s.html(settings.text['object' == typeof settings.text ? $this.attr('id')] : settings.text);

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
        }

    };
})( jQuery );

