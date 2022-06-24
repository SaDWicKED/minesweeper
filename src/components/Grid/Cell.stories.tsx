import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Cell } from './Cell';

export default {
  title: 'Grid/Cell',
  component: Cell,
  argTypes: {
    coords:  { defaultValue: [1, 1] }
  }
} as ComponentMeta<typeof Cell>;

const Template: ComponentStory<typeof Cell> = (args) => <Cell {...args} />;

export const CellIsClosed = Template.bind({});
CellIsClosed.args = {
  children: 10,
}

export const CellIsEmpty = Template.bind({});
CellIsEmpty.args = {
  children: 0,
}

export const CellWithBomb = Template.bind({});
CellWithBomb.args = {
  children: 9,
}

export const CellWithFlag = Template.bind({});
CellWithFlag.args = {
  children: 11,
}

export const CellWithWeakFlag = Template.bind({});
CellWithWeakFlag.args = {
  children: 12,
}

export const CellWith1 = Template.bind({});
CellWith1.args = {
  children: 1,
}

export const CellWith3 = Template.bind({});
CellWith3.args = {
  children: 3,
}

export const CellWith5 = Template.bind({});
CellWith5.args = {
  children: 5,
}

export const CellWith8 = Template.bind({});
CellWith8.args = {
  children: 8,
}