import Button from "../components/Button";
import Map from "../assets/map.png"

const CTASection = () => {
  return (
    <>
      <div className="bg-[#406958]">
        <div className="pt-20 pb-8 px-8 font-fira text-white">
          <div>
            <p className="text-2xl md:text-4xl font-semibold mb-10">Commandez et retirez votre panier</p>
            <p className="font-semibold font-bricolage mb-4">Sélectionnez vos produits locaux à l’avance et récupérez-les directement au marché.</p>
            <p className="font-bricolage mb-10">Fini les ruptures de stock, les files d’attente et les allers-retours inutiles : votre panier vous attend, prêt à être savouré.</p>
            <Button variant="secondary" className="font-fira px-6 py-2">Commandez dès maintenant</Button>
          </div>
        </div>
        <div className="w-full h-full">
          <img
            src={Map}
            alt="map image"
            className="w-full h-[32rem] object-cover object-center"
          />
        </div>
      </div>
    </>
  );
};

export default CTASection;