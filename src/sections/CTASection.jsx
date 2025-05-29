import Button from "../components/Button";
import Map from "../assets/map.png"

const CTASection = () => {
  return (
    <>
      <div className="bg-[#406958] lgExtra:flex lgExtra:p-16 lgExtra:items-center xl1:p-24 2xl:p-32">
        <div className="pt-24 pb-16 px-8 lgExtra:pt-0 lgExtra:pb-0 lgExtra:px-0 font-fira text-white lgExtra:pr-20 xl1:pr-40">
          <div>
            <p className="text-2xl md:text-4xl xl:text-5xl font-bold mb-10">Commandez et retirez votre panier</p>
            <p className="font-semibold font-bricolage mb-4 lgExtra:text-lg">Sélectionnez vos produits locaux à l’avance et récupérez-les directement au marché.</p>
            <p className="font-bricolage mb-10">Fini les ruptures de stock, les files d’attente et les allers-retours inutiles : votre panier vous attend, prêt à être savouré.</p>
            <Button variant="secondary" className="font-fira px-6 py-2 md:px-7 md:py-3">Commandez dès maintenant</Button>
          </div>
        </div>
        <div className="w-full h-full 2xl:w-3/5 2xl:h-3/5">
          <img
            src={Map}
            alt="map image"
            className="w-full h-[32rem] lgExtra:h-full object-cover object-center"
          />
        </div>
      </div>
    </>
  );
};

export default CTASection;