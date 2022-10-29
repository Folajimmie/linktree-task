const buttonBaseClassName = 'w-full h-[51px] text-button rounded-[8px] hover:opacity-90';

export const DefaultButton = ({ children, className, onClick, ...rest }) => {
    return (
      <button
        className={`${buttonBaseClassName} text-colorText bg-gray-200 text-button ${className}`}
        onClick={onClick}
        {...rest}>
        {children}
      </button>
    );
  };