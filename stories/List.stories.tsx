import { Meta, StoryObj } from '@storybook/react';

import { IListItem, List, ListItem, NavItem } from '@/components';

const meta = {
  title: 'DataDisplay/List',
  component: List,
  argTypes: {
    title: {
      control: { type: 'text' },
    },
  },
  args: {
    title: 'List title',
  },
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

export const MultipleNavItems: Story = {
  render: (args) => (
    <List {...args}>
      {multipleItems.map((item, i) => (
        <NavItem key={`entry-${i}`} onClick={() => console.log('click')}>
          {item.children}
        </NavItem>
      ))}
    </List>
  ),
};
