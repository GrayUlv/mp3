/* global FontAwesomeConfig */

/**
 * 1) First you have to import the @fortawesome/fontawesome library
*/
import fontawesome from '@fortawesome/fontawesome';


/**
 * 2) Then you have to import every icon that you will use
*/
import faPlay from '@fortawesome/fontawesome-free-solid/faPlay';
import faBackward from '@fortawesome/fontawesome-free-solid/faBackward';
import faForward from '@fortawesome/fontawesome-free-solid/faForward';
import faPause from '@fortawesome/fontawesome-free-solid/faPause';

/**
 * 3) Tell font-awesome that you want to replace your icons with SVGs (recomended for performance)
*/
fontawesome.config = {
  autoReplaceSvg: 'nest'
};

/**
 * 4) Add the icons into the font-awesome library
*/
fontawesome.library.add(
    faPlay, faBackward,  faForward, faPause
);


/**
 * 5) Now, you can place the icon tag anywhere you want to icon to show, for example:
 *    <i class="fas fa-check"></i>
*/
