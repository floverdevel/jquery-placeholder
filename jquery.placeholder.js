/**
 * simule un placeholder html5 en utilisant des techniques de xhtml
 * s'applique sur un selecteur css3 (par exemple : $('input[type=text],input[type=password]').placeholder();
 *
 * @exemple: tous les éléments de classe placeholded auront le même texte, soit : «Remplissez ce champ»
 *  $('.placeholded').placeholder({
 *     'background': '#000',
 *     'color' : '#00ff00',
 *     'text': 'Remplissez ce champ'
 * });
 *
 * @exemple: chaque élément de classe placeholded aura son texte spécifié par l'objet text (mapping entre l'id de l'élément et la clé de l'objet)
 *  $('.placeholded').placeholder({
 *     'background': '#000',
 *     'color' : '#00ff00',
 *     'text' : {
 *         'firstname': 'Entrez votre prénom',
 *         'lastname': 'Entrez votre nom de famille',
 *         'username': 'Choisissez un nom d\'usager'
 *     }
 * });
 * @todo: générer un span en position absolute pour qu'il soit en arrière du input
 * @todo: copier le style du input pour que le span en arrière ait la même grandeur
 */
(function( $ ) {
    $.fn.placeholder = function(options) {

        // valeurs par défaut, on les étend par les options reçus en paramètre
        var settings = $.extend({
            'background' : '#fff',
            'color' : '#a0a0a0',
            'text' : ''
        }, options);

        return this.each(function() {
            $this = $(this);

            var s = $('<label />');
            s.css('width', $this.css('width'));
            s.css('height', $this.css('height'));
            s.css('top', $this.offset().top);
            s.css('left', $this.offset().left);

            s.css('font-familly', $this.css('font-familly'));
            s.css('font-size', $this.css('font-size'));
            s.css('font-weigth', $this.css('font-weigth'));
            s.css('font-style', $this.css('font-style'));
            s.css('line-height', $this.css('line-height'));

            s.css('margin-top',    $this.css('margin-top'));
            s.css('margin-left',   $this.css('margin-left'));
            s.css('margin-right',  $this.css('margin-right'));
            s.css('margin-bottom', $this.css('margin-bottom'));

            s.css('padding-top',    $this.css('padding-top'));
            s.css('padding-left',   $this.css('padding-left'));
            s.css('padding-right',  $this.css('padding-right'));
            s.css('padding-bottom', $this.css('padding-bottom'));

            s.css('border-top-width',    $this.css('border-top-width'));
            s.css('border-left-width',   $this.css('border-left-width'));
            s.css('border-right-width',  $this.css('border-right-width'));
            s.css('border-bottom-width', $this.css('border-bottom-width'));

            //s.css('overflow', 'hidden');
            //s.css('text-overflow', 'clip');

            s.css('position', 'absolute');
            s.css('color', settings.color);
            //$this.parent().prepend(s);
            //$this.parent().append(s);

            var text = '';
            if ('object' == typeof settings.text) {
                text = settings.text[$this.attr('id')];
            } else if ('string' == typeof settings.text) {
                text = settings.text;
            }

            //s.insertAfter($this);
            s.insertBefore($this);
            s.html(text);
            //s.show();

            _render($this);

            // lorsqu'on appui sur une touche au clavier
            $this.keyup(function() {
                _render($(this));
            });

            // lorsqu'on entre dans un champ
            $this.focusin(function() {
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

