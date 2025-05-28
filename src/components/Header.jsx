import background from '../assets/Background.svg';
import logo from '../assets/Logo.png'

const Header = () => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full z-50 h-[6.5rem]"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className='flex items-end justify-between mx-7 pt-4'>
          <img src={logo} alt='logo' />
          <i className="fa-solid fa-bars text-lg text-[#305347]"></i>
        </div>
      </div>
    </>
  );
};

export default Header;