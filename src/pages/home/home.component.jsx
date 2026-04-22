import {
  Navbar,
  HeroSection,
  MessageSection,
  FlavorSection,
} from '../../components/layout/layout';

const Home = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MessageSection />
      <FlavorSection />
      <div className="h-dvh border border-red-500"></div>
    </main>
  );
};
export default Home;
