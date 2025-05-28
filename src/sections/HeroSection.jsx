import backgroundHero from '../assets/Hero.png';
import Button from '../components/Button';

const HeroSection = () => {
  return (
    <div
      className="h-full w-full bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundHero})` }}
    >
      <div className="bg-white p-4 rounded-lg shadow-md max-w-2xl w-full mx-4 mt-60 mb-10">
        <p className="text-2xl md:text-4xl font-semibold mb-4 text-[#406958] font-fira">
          Trouvez les meilleurs produits locaux près de chez vous !
        </p>
        <p className="mb-6 font-bricolage">
          <a href="#" className="font-medium underline hover:text-green-900">Connectez-vous</a> ou indiquez votre adresse pour découvrir les marchés locaux
        </p>
        <div className="flex w-full overflow-hidden rounded-lg bg-[#F5EAE7] items-center p-1 pb-2 shadow-sm">
          <div className="pl-2 flex items-center text-gray-500">
            <i className="fa-solid fa-location-dot text-lg text-[#305347]"></i>
          </div>
          <input
            type="text"
            placeholder="Saisissez votre adresse"
            className="flex-grow px-4 py-2 text-gray-700 text-sm focus:outline-none bg-[#F5EAE7]"
          />
          <Button className='font-fira'>Chercher</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
