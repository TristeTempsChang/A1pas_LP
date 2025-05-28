import vector from "../assets/sticker1.svg";

const Stickers = ({ children, variant = 'step', className = '' }) => {

  const variants = {
    step: 'bg-[#A75069]',
    stand: 'bg-[#5DB8D5]',
    market: 'bg-[#F78C49]'
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <img
        src={vector}
        alt=""
      />
    </div>
  );
};

export default Stickers;
