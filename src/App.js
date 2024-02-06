import Header from "components/Header";
import HeroSection from "components/HeroSection";
import Categories from "components/Categories";
import Mobileapp from "components/Mobileapp";
import Cards from "components/Cards";
import Footer from "components/Footer";

function App() {
  return (
    <div className="bg-zinc-50 box-border m-0 p-0 w-full overflow-hidden">
      <Header />
      <HeroSection />
      <Categories />
      <Mobileapp />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;

