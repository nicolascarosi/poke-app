import { StoryObj, Meta } from '@storybook/react';

import { EmptyData } from '@/components';

const meta = {
  title: 'Feedback/EmptyData',
  component: EmptyData,
} satisfies Meta<typeof EmptyData>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '¡Selecciona un Pokémon!',
  },
};
