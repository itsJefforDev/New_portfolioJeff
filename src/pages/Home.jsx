
import CardsAbilities from "../components/CardsAbilities";
import ProyectGallery from "../components/ProyectGallery";
import FeaturesSection from "../components/FeaturesSection";
import Button from "../components/ui/Button";
import HeroSection from "../components/ui/HeroSection";
import ImageGallery from "../components/ui/ImageGallery";
import Reveal from "../components/ui/Reveal";

function Home() {

  const handleClick = () => {
    alert("Hola desde el botón 🚀");
  };

  return (
    <div>
      <HeroSection />
      <ImageGallery />
      <Reveal>
        <CardsAbilities />
      </Reveal>
      <Reveal>
        <ProyectGallery />
      </Reveal>
      <Reveal>
        <FeaturesSection />
      </Reveal>

    </div>
  );
}
export default Home;