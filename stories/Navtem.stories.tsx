import { Meta, StoryObj } from '@storybook/react';

import { NavItem } from '@/components';

const meta = {
  title: 'DataDisplay/NavItem',
  component: NavItem,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    id: {
      control: { type: 'text' },
    },
  },
  args: {
    children: 'Charmander',
    id: 'Charmander',
  },
} satisfies Meta<typeof NavItem>;

export default meta;

type Story = StoryObj<typeof NavItem>;

export const Item: Story = {
  render: ({ children, ...args }) => <NavItem {...args}>{children}</NavItem>,
};
