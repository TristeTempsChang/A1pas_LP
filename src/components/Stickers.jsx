import vector from "../assets/sticker1.svg";

const Stickers = ({ children, className = '' }) => {

  return (
    <div className={`relative inline-block ${className}`}>
      <img
        src={vector}
        alt=""
      />

      <span className="absolute inset-0 flex items-center justify-center font-semibold text-white">
        {children}
      </span>
    </div>
  );
};

export default Stickers;
