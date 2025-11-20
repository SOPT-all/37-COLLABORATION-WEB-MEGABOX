import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from '@components/button/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'sub'],
      description: '버튼 스타일 종류',
    },
    children: {
      control: { type: 'text' },
      description: '버튼 텍스트',
    },
    onClick: { action: 'clicked' },
  },
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: '바로예매',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: '실관람평 작성하고 포인트 받기',
  },
};

export const Sub: Story = {
  args: {
    variant: 'sub',
    children: '소진현황',
  },
};