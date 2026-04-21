import {
  Navbar,
  HeroSection,
  MessageSection,
} from '../../components/layout/layout';

const Home = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MessageSection />
      <div className="h-dvh border border-red-500"></div>
    </main>
  );
};
export default Home;
