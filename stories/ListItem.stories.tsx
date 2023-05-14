import { Meta, StoryObj } from '@storybook/react';

import { ListItem } from '@/components';

const meta = {
  title: 'DataDisplay/ListItem',
  component: ListItem,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    children: 'Charmander',
  },
} satisfies Meta<typeof ListItem>;

export default meta;

type Story = StoryObj<typeof ListItem>;

export const Item: Story = {
  render: ({ children, ...args }) => <ListItem {...args}>{children}</ListItem>,
};
