import { StoryObj, Meta } from '@storybook/react';

import { Spinner } from '@/components';

const meta = {
  title: 'Feedback/Spinner',
  component: Spinner,
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Spinner />,
};
