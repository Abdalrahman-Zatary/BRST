import { Routes, Route } from 'react-router-dom';

import { MainLayout } from './layout/layout';
import {
  Home,
  Shop,
  Stores,
  About,
  Academy,
  Programs,
  Contact,
  ProductDetails,
} from './pages/pages';

import { ScrollTrigger, ScrollSmoother, SplitText } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="stores" element={<Stores />} />
        <Route path="about" element={<About />} />
        <Route path="academy" element={<Academy />} />
        <Route path="programs" element={<Programs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product/:flavor" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

export default App;