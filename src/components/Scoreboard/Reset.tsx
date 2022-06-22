import {FC, useState} from 'react';
import styled from 'styled-components';

export interface ResetProps {
  onReset: () => void;
}

export const Reset: FC<ResetProps> = ({onReset}) => {
  const [mouseDown, setMouseDown] = useState(false);

  const handleMouseDown = () => {
    setMouseDown(true);
  }
  
  const handleMouseUp = () => {
    setMouseDown(false);
  }

  return (
    <Button 
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onClick={onReset}
    > 
      {!mouseDown? '🙂' : '😮'}
    </Button>
  )
}

const Button = styled.button`
  font-size: 1vw;
  cursor: pointer;
  font-weight: 700;
  border: 0.15vw solid;
  border-color: white #9e9e9e #9e9e9e white;
  background-color: #d1d1d1;
`;

