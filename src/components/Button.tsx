import { Icon } from "@iconify/react";

type Props = {
  title?: string;
  icon?: string;
  onClick?: ()=> void
  className?:string
};

const Button = ({ title, icon, onClick, className }: Props) => {
  return (
    <button
    onClick={onClick}
      className={`bg-white/30 p-2 sm:py-2.5 sm:px-3.5 cursor-pointer outline-0 textColor flex items-center gap-2 rounded-xl
        hover:scale-102 duration-100 transition-all active:scale-95 ${className}`}
    >
      {icon && <Icon icon={icon} width={24} height={24}/>}
      {title && <span className="hidden sm:block">{title}</span>}
    </button>
  );
};

export default Button;
