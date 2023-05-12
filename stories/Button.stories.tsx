import { StoryObj, Meta } from '@storybook/react';

import { Button } from '@/components';

const meta = {
  title: 'Inputs/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary',
    disabled: false,
  },
};
