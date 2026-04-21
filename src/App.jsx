import { Home } from './pages/pages';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return(
    <Home />
  );
};

export default App;