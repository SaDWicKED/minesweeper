import { FC } from 'react';
import styled from 'styled-components';
import { GameName, GameNameProps } from './GameName/GameName';
import { Legend, LegendProps } from './Legend/Legend';

export type HeaderProps = LegendProps & GameNameProps;

export const Header: FC<HeaderProps> = ({children, ...legendProps}) => (
  <Container>
    <GameName>{children}</GameName>
    <Legend {...legendProps}/>
  </Container>
);

const Container = styled.header`
  text-align: center;
  position: relative;
  display: inline-block;
`;