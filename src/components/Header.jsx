import { Link, useNavigate } from 'react-router-dom';
import background from '../assets/Background.svg';
import logo from '../assets/Logo.png'
import Button from './Button.jsx';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register');
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full z-50 h-[6.5rem]"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className='flex items-end justify-between mx-7 pt-5 lgExtra:mx-14 xl1:mx-24'>
          <img src={logo} alt='logo' />
          <i className="fa-solid fa-bars text-xl text-[#305347] lgExtra:hidden"></i>
          <div className='hidden lgExtra:flex lgExtra:items-center lgExtra:gap-7 text-[#305347] font-semibold'>
            <Link to="/register"><p>Devenir partenaire</p></Link>
            <Link to="/register"><p>Connexion</p></Link>
            <Button iconClass='fa-solid fa-user' className='font-fira md:px-6 md:py-2' onClick={handleClick}>S'inscrire</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;