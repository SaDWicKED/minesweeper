import { FC } from "react";
import styled from "styled-components";

export interface CounterProps {
  children: string;
}

export const Counter: FC<CounterProps> = ({children}) => (
  <Frame>{children}</Frame>
);

const Frame = styled.div`
  display: inline-block;
  padding: 0 0.3vw;
  color: #ec433c;
  border: 0.15vw inset;
  line-height: 1.5vw;
  letter-spacing: 0.08em;
  background: #333;
  text-shadow: 0 0 0.1vw #ec433c;
`;