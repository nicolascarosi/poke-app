import { StoryObj, Meta } from '@storybook/react';

import { ListItem } from '@/components';

const meta = {
  title: 'DataDisplay/ListItem',
  component: ListItem,
} satisfies Meta<typeof ListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Item: Story = {
  render: (args) => <ListItem {...args} />,
  args: {
    name: 'Charmander',
  },
};
