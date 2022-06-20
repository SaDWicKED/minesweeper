import styled from 'styled-components';

export interface GameNameProps {
  /*  
   * text inside the header 
   */
  children: string;
}

export const GameName = styled.h1<GameNameProps>`
  font-size: 2em;
`;