import React, { type FC } from "react";

type Props = {
  size?: number;
  color?: string;
};

const SquareIcon: FC<Props> = ({ size = 44, color = "#DDD" }) => {
  const style: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: 8,
    background: color,
    flex: "0 0 auto",
  };
  return <div style={style} />;
};

export default SquareIcon;
