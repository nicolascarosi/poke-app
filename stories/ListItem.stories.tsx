import { StoryObj, Meta } from '@storybook/react';

import { ListItem } from '@/components';

const meta = {
  title: 'DataDisplay/ListItem',
  component: ListItem,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    id: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof ListItem>;

export default meta;

type Story = StoryObj<typeof ListItem>;

export const Item: Story = {
  render: ({ children, ...args }) => <ListItem {...args}>{children}</ListItem>,
};
