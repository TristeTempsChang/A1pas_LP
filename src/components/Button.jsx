const Button = ({ children, iconClass, variant = 'primary', className = '', ...props }) => {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold px-2 py-1 rounded text-white transition';

  const variants = {
    primary: 'bg-[#406958] hover:bg-[#55806E] shadow-[0_4px_0_#2D4F40]',
    secondary: 'bg-[#A75069] hover:bg-[#BF5A77] shadow-[0_4px_0_#82394F]',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {iconClass && <i className={`${iconClass}`}></i>}
      {children}
    </button>
  );
};

export default Button;
