import Stickers from './Stickers.jsx';

const Card = ({ imageSrc, title, description, step }) => {
  return (
    <div className="bg-[#F5EAE7] rounded-lg overflow-hidden mb-8 lgExtra:w-4/5">
      <div className="relative">
        <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />

        {/* ✅ Sticker positionné en haut à gauche de l’image */}
        <div className='relative'>
          <div className="absolute bottom-[-1.5rem] left-5">
            <Stickers variant="step">{step}</Stickers>
          </div>
        </div>
      </div>

      <div className="px-5 pt-6 pb-8">
        <h2 className="text-lg font-semibold text-[#305347] mb-3 font-fira xl1:text-xl">{title}</h2>
        <p className="text-sm text-gray-700 font-bricolage">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
