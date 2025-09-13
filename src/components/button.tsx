type ButtonProp = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
};

const Button = ({ children, onClick, className }: ButtonProp) => {
  return (
    <button
      onClick={onClick}
      className={`${className} cursor-pointer bg-neutral-700 text-xl px-4 py-2 hover:bg-neutral-500 border border-neutral-700 active:border-neutral-400 `}
    >
      {children}
    </button>
  );
};

export default Button;
