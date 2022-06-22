import { FC } from "react";
import styled from "styled-components";
import { Level } from './Level';
import { Counter } from './Counter';
import { Reset } from './Reset';

export interface ScoreboardProps {
  time: string;
  levels: string[];
  onReset: ()=>void;
  mines: string;
}

export const Scoreboard: FC<ScoreboardProps> = ({
  time,
  levels,
  mines,
  onReset,
}) => {
  return (
    <Wrapper>
      <Counter>{time}</Counter>
      <Level>{levels}</Level>
      <Reset onReset={onReset}/>
      <Counter>{mines}</Counter>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: max-content;
  /* padding-bottom: 2vw; */
  align-items: center;
  justify-content: space-between;
`;

