import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './Header';

export default {
  title: 'Header/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const HeaderPanel = Template.bind({});
HeaderPanel.args = {
  children: 'Minesweeper',
  feature: 'Flag',
  firstAction: 'ctrl',
  secondAction: 'click', 
}
