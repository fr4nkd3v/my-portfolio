import { Meta, StoryObj } from '@storybook/react';
import { IconProps } from './types';
import { IconGallery } from './IconGallery';

const meta: Meta<IconProps> = {
  title: 'UI/Icon',
  component: IconGallery,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Gallery: Story = {
  args: {
    color: 'black',
    pixelSize: 24,
    strokeWidth: 2,
  },
};