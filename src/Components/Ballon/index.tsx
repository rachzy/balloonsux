import React from "react";

import { IBallon } from "../../App";

interface IProps {
  ballon: IBallon;
  onClick: (ballonId: number) => void
}

const Ballon: React.FC<IProps> = ({ ballon, onClick }) => {
  return (
    <div style={{position: "absolute", marginTop: `${ballon.position.x}vh`, marginLeft: `${ballon.position.y}vh`}} onClick={onClick.bind(this, ballon.id)}>
      <img src={require(`../../images/balloon-${ballon.color}.png`)} alt="balloon" width={80} draggable={false} />
    </div>
  );
};

export default Ballon;
