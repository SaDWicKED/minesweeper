import { FC } from 'react';
import styled from 'styled-components';

export interface LegendProps {
  feature: string;
  firstAction: string;
  secondAction: string;
}

export const Legend: FC<LegendProps> = ({feature, firstAction, secondAction}) => (
  <Parent>
    <strong>{feature}: </strong>
    <Code>
      <FirstAction>{firstAction}</FirstAction> + {' '}
      <SecondAction>{secondAction}</SecondAction>
    </Code>
  </Parent>
);

const Code = styled.code`
  background: #e3e3e3;
`;

const Parent = styled.legend`
  font-size: 1em;
  margin: 0 auto 2vw;
  line-height: 1.25em;
`;

const FirstAction = styled.span`
  color: red;
`;

const SecondAction = styled.span`
  color: blue;
`;