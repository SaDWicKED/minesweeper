import {FC} from 'react';
import styled from 'styled-components';
import { useMouseDown } from '../../hooks/useMouseDown';
export interface ResetProps {
  onReset: () => void;
}

export const Reset: FC<ResetProps> = ({onReset}) => {
  const [mouseDown, handleMouseDown, handleMouseUp ] = useMouseDown();

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

