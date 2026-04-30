import { Home } from './pages/pages';
import { ScrollTrigger, ScrollSmoother, SplitText } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const App = () => {
  return (
    <Home />
  );
};

export default App;