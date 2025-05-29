import background from '../assets/Background.svg';
import logo from '../assets/Logo.png'
import Button from './Button.jsx';

const Header = () => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full z-50 h-[6.5rem]"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className='flex items-end justify-between mx-7 pt-5 lgExtra:mx-14'>
          <img src={logo} alt='logo' />
          <i className="fa-solid fa-bars text-xl text-[#305347] lgExtra:hidden"></i>
          <div className='hidden lgExtra:flex lgExtra:items-center lgExtra:gap-7 text-[#305347] font-semibold'>
            <p>Devenir partenaire</p>
            <p>Connexion</p>
            <Button iconClass='fa-solid fa-user' className='font-fira md:px-6 md:py-2'>S'inscrire</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;