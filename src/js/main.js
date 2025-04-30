import adjustViewport from '@module/adjustViewport';
import initAOS from '@module/initAOS';
import smoothScroll from '@module/smoothScroll';
import initScrollHint from '@module/initScrollHint';
import accordion from '@module/accordion';
import anchorLink from '@module/anchorLink';

import '@/scss/style.scss';

adjustViewport();
initAOS();
smoothScroll();
initScrollHint();
accordion();
anchorLink();