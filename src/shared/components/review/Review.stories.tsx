import type { Meta, StoryObj } from '@storybook/react-vite';
import Review from '@components/review/Review';

const meta: Meta<typeof Review> = {
  title: 'Components/UI/Review',
  component: Review,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: { type: 'text' },
      description: '리뷰 내용',
    },
    rating: {
      control: { type: 'number', min: 0, max: 5, step: 0.5 },
      description: '평점 (0-5)',
    },
    createdAt: {
      control: { type: 'date' },
      description: '리뷰 작성일',
    },
    nickname: {
      control: { type: 'text' },
      description: '작성자 닉네임',
    },
  },
  args: {
    content: '정말 재미있는 영화였어요! 강력 추천합니다.',
    rating: 4.5,
    createdAt: new Date(),
    nickname: '영화마니아',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FullRating: Story = {
  args: {
    content: '완벽한 영화였습니다! 모든 면에서 훌륭했어요.',
    rating: 5,
    nickname: '영화평론가',
    createdAt: new Date('2024-01-15'),
  },
};

export const HalfRating: Story = {
  args: {
    content: '괜찮은 영화였지만 아쉬운 부분도 있었어요.',
    rating: 2.5,
    nickname: '솔직한리뷰어',
    createdAt: new Date('2024-01-10'),
  },
};
