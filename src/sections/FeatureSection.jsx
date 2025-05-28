import Card from "../components/Card.jsx";
import step1 from "../assets/step1.jpg"
import step2 from "../assets/step2.jpg"
import step3 from "../assets/step3.jpg"

const FeatureSection = () => {
  return (
    <>
      <div className="pt-20 pb-8 px-8 font-fira">
        <p className="text-2xl md:text-4xl font-semibold mb-4 text-[#406958]">Comment ça marche ?</p>
        <div className="max-w-md mx-auto">
          <Card
            imageSrc={step1}
            step="Étape 1"
            title="Repérez les marchés près de chez vous"
            description={
              <>Grâce à la <strong>géolocalisation</strong> et la <strong>carte interactive</strong>, je découvre les producteurs et marchés autour de moi.</>
            }
          />
          <Card
            imageSrc={step2}
            step="Étape 1"
            title="Je sélectionne mes produits"
            description={
              <>Je commence par <strong>sélectionner mes produits</strong> parmi les <strong>différents stands</strong> présents sur le marché que j’ai choisi.</>
            }
          />
          <Card
            imageSrc={step3}
            step="Étape 1"
            title="Je récupère mon panier"
            description={
              <>Je récupère mon panier <strong>directement sur le marché</strong>, au lieu de <strong>retrait indiqué</strong> dans l’application, et dans le créneau horaire que j’ai choisi.</>
            }
          />
        </div>
      </div>
    </>
  );
};

export default FeatureSection;