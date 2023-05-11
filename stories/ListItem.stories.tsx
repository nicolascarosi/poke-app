import { StoryObj, Meta } from '@storybook/react';

import { ListItem } from '@/components';

const meta = {
  title: 'ListItem',
  component: ListItem,
} satisfies Meta<typeof ListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Item: Story = {
  render: (args) => <ListItem {...args} />,
  args: {
    entry_number: 4,
    name: 'Charmander',
  },
};
