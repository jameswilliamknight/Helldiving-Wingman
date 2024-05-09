import React, { ReactElement } from "react";

interface DirectionKeyProps {
  icon: ReactElement;
  isActive: boolean;
  colorActive: string;
  colorInactive: string;
}

const DirectionKey: React.FC<DirectionKeyProps> = ({
  icon,
  isActive,
  colorActive,
  colorInactive,
}) => {
  return (
    <div
      className={`w-20 h-20 rounded-lg ${
        isActive ? colorActive : colorInactive
      } flex justify-center items-center`}
    >
      {icon}
    </div>
  );
};

export default DirectionKey;
