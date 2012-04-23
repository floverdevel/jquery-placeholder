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

            var s = $('<span />');
            s.insertBefore($this);
            s.addClass('floverdevel-jquery-placeholder');

            s.css('width', $this.css('width'));
            s.css('height', $this.css('height'));
            //s.css('top', $this.parent().top - $this.offsetParent().offset().top);
            //s.css('left', $this.parent().left - $this.offsetParent().offset().left);

            //console.log($this.offset().top);
            //console.log($this.offsetParent().offset().top);

            s.css('line-height', $this.css('line-height'));

            s.css('font-familly', $this.css('font-familly'));
            s.css('font-size',    $this.css('font-size'));
            s.css('font-style', 'italic');
            s.css('font-weigth',  $this.css('font-weigth'));

            s.css('margin-top',    $this.css('border-top-width'));
            s.css('margin-left',   $this.css('border-left-width'));
            s.css('margin-right',  $this.css('border-right-width'));
            s.css('margin-bottom', $this.css('border-bottom-width'));

            s.css('padding-top',    $this.css('padding-top'));
            s.css('padding-left',   $this.css('padding-left'));
            s.css('padding-right',  $this.css('padding-right'));
            s.css('padding-bottom', $this.css('padding-bottom'));

//            s.css('border-color', '#ff0000');
//            s.css('border-width', '1');

            //s.css('overflow', 'hidden');
            //s.css('text-overflow', 'clip');
            //s.css('display', 'inline-block');
            s.css('color', settings.color);

            var text = '';
            if ('object' == typeof settings.text) {
                text = settings.text[$this.attr('id')];
            } else if ('string' == typeof settings.text) {
                text = settings.text;
            }

            s.html(text);
            $this.css('position', 'relative');
            var left = Number(s.width()) + Number(s.css('margin-left').split('px')[0]) + Number(s.css('margin-right').split('px')[0]) + Number(s.css('border-left-width').split('px')[0]) + Number(s.css('border-right-width').split('px')[0]);
            console.log(left);
            $this.css('left', '-' + (left) + 'px');
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

