import React, { useState } from 'react';
import Button from '../../components/Button';
import GoogleLogo from '../../assets/Google.svg'
import image from '../../assets/register.png'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  return ( <>
      <div className='flex min-h-screen items-center justify-center xl1:gap-20'>
        <div className="bg-[#FAF7F1] px-4 py-8 font-fira w-full xl1:w-2/6 px-5">
          <h2 className="text-3xl xl1:text-6xl lgExtra:text-5xl font-bold text-center text-[#406958] mb-3 lgExtra:mb-6">
            Inscrivez-vous
          </h2>

          <div className='text-center font-light font-bricolage mb-6 text-sm'>
            <p>Inscrivez-vous dès maintenant pour être informé(e) du lancement et découvrir en avant-première notre solution !</p>
            <p className='font-semibold italic'>Ensemble, construisons une nouvelle façon de consommer local.</p>
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center bg-white border border-[#EADED9] rounded py-2.5 mb-6 hover:bg-gray-100 transition"
          >
            <img src={GoogleLogo} className="mr-4" />
            <span className="font-bricolage font-light">S’inscrire avec Google</span>
          </button>

          <div className="flex items-center my-10">
            <hr className="flex-grow border-t border-[#C4A49B]" />
            <span className="mx-7">ou</span>
            <hr className="flex-grow border-t border-[#C4A49B]" />
          </div>

          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="NOM et Prénom*"
                className="w-full bg-[#F5EAE7] border border-[#C4A49B] placeholder-[#C4A49B] rounded py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#406958]"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Adresse*"
                className="w-full bg-[#F5EAE7] border border-[#C4A49B] placeholder-[#C4A49B] rounded py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#406958]"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                placeholder="Email*"
                className="w-full bg-[#F5EAE7] border border-[#C4A49B] placeholder-[#C4A49B] rounded py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#406958]"
                required
              />
            </div>

            <div className="mb-8 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Mot de passe*"
                className="w-full bg-[#F5EAE7] border border-[#C4A49B] placeholder-[#C4A49B] rounded py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#406958]"
                required
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#C4A49B]"
              >
                {showPassword ? (
                  <i class="fa-solid fa-eye-slash" />
                ) : (
                  <i class="fa-solid fa-eye" />
                )}
              </button>
            </div>

            <div className='flex items-center justify-center'>
              <Button 
                type="submit" 
                iconClass='fa-solid fa-user' 
                className='font-fira px-6 py-2.5'
              >
                S’inscrire
              </Button>
            </div>
          </form>

          <p className="text-center text-gray-600 mt-8 font-bricolage">Vous avez déjà un compte ?</p>
          <a href="#"><p className="text-center font-medium underline hover:text-green-900">Connectez-vous</p></a>
        </div>
        <div className='hidden lgExtra:flex w-full xl1:w-auto h-full min-h-screen xl1:min-h-0 2xl:h-[50rem]'>
          <img src={image} alt='image register' className='xl1:rounded-xl' />
        </div>
      </div>
    </>
  );
};

export default Register;
