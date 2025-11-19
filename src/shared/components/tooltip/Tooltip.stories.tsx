import type { Meta, StoryObj } from '@storybook/react-vite';
import Tooltip from '@components/tooltip/Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/UI/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a1a' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: '툴팁 상단 라벨 텍스트',
    },
    message: {
      control: { type: 'text' },
      description: '툴팁 본문 텍스트',
    },
    closeButtonLabel: {
      control: { type: 'text' },
      description: '스크린 리더용 닫기 버튼 라벨',
    },
    onClose: {
      action: 'close',
      description: '닫기 버튼 클릭 핸들러',
    },
  },
  args: {
    label: 'tooltip',
    message: '설명하고 싶은 내용을 적어주세요',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutCloseButton: Story = {
  args: {
    onClose: undefined,
    label: 'auto info',
    message: '닫기 버튼 없이도 사용할 수 있어요.',
  },
};
