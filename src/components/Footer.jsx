import whiteLogo from "../assets/whiteLogo.png"

const Footer = () => {
  return (
    <>
      <div className="bg-[#406958] pt-16 pb-20 px-9 text-white font-fira lgExtra:flex lgExtra:justify-between lgExtra:items-center lgExtra:px-16">
        <div className="mb-20 lgExtra:mb-0">
          <img src={whiteLogo} alt="white logo" />
        </div>
        <div>
          <p className="text-lg font-medium mb-4 lgExtra:text-center">©À1Pas Tous droits réservés</p>
          <div className="text-sm font-bricolage font-light mb-20 lgExtra:flex lgExtra:mb-0 gap-5">
            <p className="mb-4 lgExtra:mb-0">Politique de confidentialité</p>
            <p className="mb-4 lgExtra:mb-0">Mentions légales</p>
            <p>CGU</p>
          </div>
        </div>
        <div className="text-2xl md:text-3xl flex gap-5">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-tiktok"></i>
        </div>
      </div>
    </>
  );
};

export default Footer;