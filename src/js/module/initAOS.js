import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * aos.js初期化
 */
const initAOS = () => {
    const breakpoint = 768;

    AOS.init({
        offset: window.innerWidth < breakpoint ? 100 : 350, //SP : PC
        once: true,
        duration: 1000,
    });
}

export default initAOS