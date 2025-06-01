import React, { useEffect, useState } from 'react';
import Logo from '../assets/Logo.png';

const LoaderProgressBar = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [animateExit, setAnimateExit] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setAnimateExit(true);
          setTimeout(onFinish, 700);
          return 100;
        }
        return prev + 1.5;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 bg-[#FAF7F1] flex flex-col items-center justify-center transition-opacity duration-500">
      <img
        src={Logo}
        alt="Logo"
        className={`mb-6 ml-1 transition-all duration-700 ease-in-out
          ${animateExit ? 'opacity-0 -translate-y-10' : 'opacity-100 translate-y-0'}
        `}
      />

      <div
        className={`w-40 h-2 bg-gray-200 rounded-full overflow-hidden transition-all duration-700 ease-in-out
          ${animateExit ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}
        `}
      >
        <div
          className="h-full bg-orange-500 transition-all duration-200 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LoaderProgressBar;
