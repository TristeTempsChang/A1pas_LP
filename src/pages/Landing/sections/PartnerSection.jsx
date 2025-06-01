import Button from "../../../components/Button";
import Partner from "../../../assets/partner.jpg"
import Badge from "../../../components/Badge";
import { useNavigate } from "react-router-dom";

const PartnerSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register');
  };

  return (
    <>
      <div className="pt-20 pb-24 font-fira lgExtra:text-center xl1:pt-24">
        <div className="lgExtra:w-3/4 lgExtra:mx-auto">
          <img className="w-full h-56 md:h-96 xl1:h-[33rem] 2xl:h-[36rem] object-cover object-center lgExtra:rounded-lg" src={Partner} alt="partner image" />
          <div className='relative hidden lgExtra:flex'>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <Badge
                topText="Numériser"
                bottomText="votre activité"
                iconClass="fa-solid fa-globe"
                className="xl1:w-[7.5rem] xl1:h-[7.5rem]"
              />
            </div>
          </div>
        </div>
        <div className="pt-11 pb-8 px-8 lgExtra:pt-16">
          <p className="text-2xl md:text-4xl xl:text-5xl font-bold mb-6 text-[#406958]">Boostez vos ventes !</p>
          <p className="font-bricolage mb-6 lgExtra:w-1/2 lgExtra:mx-auto xl1:w-2/5">Avec la digitalisation de notre société et l’arrivée des nouvelles générations, boostez vos ventes grâce à une application qui simplifie votre logistique et augmente votre chiffre d’affaires.</p>
          <Button className="font-fira px-6 py-2 md:px-7 md:py-3" onClick={handleClick}>Devenir partenaire</Button>
        </div>
      </div>
    </>
  );
};

export default PartnerSection;