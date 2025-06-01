import backgroundHero from '../../../assets/Hero.jpg';
import Badge from '../../../components/Badge';
import Button from '../../../components/Button';

const HeroSection = () => {
  return (
    <div
      className="h-full w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundHero})` }}
    >
      <div className="bg-white p-4 md:p-8 lgExtra:px-12 xl1:py-12 rounded-xl shadow-md lgExtra:max-w-3xl xl1:max-w-[51rem] 2xl:max-w-4xl w-full mx-4 mt-60 mb-14 lgExtra:mt-80 xl1:mt-96 2xl:mt-[26rem]">
        <p className="text-2xl md:text-4xl xl:text-5xl font-bold mb-4 text-[#406958] font-fira">
          Trouvez les meilleurs produits locaux près de chez vous !
        </p>
        <p className="mb-6 font-bricolage">
          <a href="#" className="font-medium underline hover:text-green-900">Connectez-vous</a> ou indiquez votre adresse pour découvrir les marchés locaux
        </p>
        <div className="flex w-full overflow-hidden rounded-lg bg-[#F5EAE7] items-center p-1 pb-2 shadow-sm md:p-2 md:pb-3">
          <div className="pl-2 flex items-center text-gray-500">
            <i className="fa-solid fa-location-dot text-lg text-[#305347]"></i>
          </div>
          <input
            type="text"
            placeholder="Saisissez votre adresse"
            className="flex-grow px-4 py-2 text-gray-700 text-sm focus:outline-none bg-[#F5EAE7]"
          />
          <Button className='font-fira md:px-6 md:py-2'>Chercher</Button>
        </div>
      </div>
      <div className='relative hidden lgExtra:flex'>
        <div className='absolute top-[-3rem] right-[-2rem] xl1:top-[-2rem] 2xl:top-[-1rem]'>
          <Badge
            topText="Précommande"
            bottomText="ton panier"
            iconClass="fa-solid fa-basket-shopping"
            className="xl1:w-[7.5rem] xl1:h-[7.5rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
