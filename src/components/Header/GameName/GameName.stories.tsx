import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GameName } from './GameName';

export default {
  title: 'Header/GameName',
  component: GameName,
} as ComponentMeta<typeof GameName>;

const Template: ComponentStory<typeof GameName> = (args) => <GameName {...args} />;

export const MinesweeperGameName = Template.bind({});
MinesweeperGameName.args = {
  children: 'Minesweeper'
}