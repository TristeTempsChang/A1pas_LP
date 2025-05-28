import Button from "../components/Button";
import Partner from "../assets/partner.jpg"

const PartnerSection = () => {
  return (
    <>
      <div className="pt-16 font-fira">
        <div>
          <img className="w-full h-56" src={Partner} alt="partner image" />
        </div>
        <div className="pt-10 pb-8 px-8">
          <p className="text-2xl md:text-4xl font-semibold mb-6 text-[#406958]">Boostez vos ventes !</p>
          <p className="font-bricolage mb-6">Avec la digitalisation de notre société et l’arrivée des nouvelles générations, boostez vos ventes grâce à une application qui simplifie votre logistique et augmente votre chiffre d’affaires.</p>
          <Button className="font-fira px-6 py-2">Devenir partenaire</Button>
        </div>
      </div>
    </>
  );
};

export default PartnerSection;