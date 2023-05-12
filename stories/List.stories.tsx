import { StoryObj, Meta } from '@storybook/react';

import { Item } from './ListItem.stories';

import { IListItem, List, ListItem } from '@/components';

const meta = {
  title: 'DataDisplay/List',
  component: List,
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof List>;

export const SingleItem: Story = {
  render: (args) => (
    <List {...args}>
      <ListItem>Charmander</ListItem>
    </List>
  ),
};

const multipleItems: IListItem[] = [
  { children: 'Bulbasaur' },
  { children: 'Charmander' },
  { children: 'Squirtle' },
];

export const MultipleItems: Story = {
  render: (args) => (
    <List {...args}>
      {multipleItems.map((item, i) => (
        <ListItem key={`entry-${i}`}>{item.children}</ListItem>
      ))}
    </List>
  ),
};
