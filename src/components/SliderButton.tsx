import React from "react";

interface Props {
  Icon: React.ReactNode;
  handleClick: () => void;
}

const SliderButton: React.FC<Props> = ({ Icon, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="bg-accent text-primary text-[22px] w-[48px] h-[48px] flex justify-center items-center transition-all cursor-pointer"
    >
      {Icon}
    </button>
  );
};

export default SliderButton;
