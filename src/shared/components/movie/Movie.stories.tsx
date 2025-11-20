import type { Meta, StoryObj } from '@storybook/react-vite';
import Movie from '@components/movie/Movie';

const meta: Meta<typeof Movie> = {
  title: 'Components/UI/Movie',
  component: Movie,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6, 7],
      description: '영화 ID',
    },
    title: {
      control: { type: 'text' },
      description: '영화 제목',
    },
    tag: {
      control: { type: 'text' },
      description: '영화 태그',
    },
    ageRating: {
      control: { type: 'number', min: 0, max: 19, step: 1 },
      description: '연령 제한',
    },
    releaseDate: {
      control: { type: 'text' },
      description: '개봉일',
    },
    runningTimeMinutes: {
      control: { type: 'number', min: 0, step: 1 },
      description: '상영 시간 (분)',
    },
    handleClickCard: {
      action: 'clicked',
      description: '카드 클릭 핸들러',
    },
  },
  args: {
    id: 1,
    title: '나우 유 씨 미 3',
    tag: '액션',
    ageRating: 15,
    releaseDate: '2024.01.15',
    runningTimeMinutes: 120,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 1,
    title: '나우 유 씨 미 3',
    tag: '액션',
    ageRating: 15,
    releaseDate: '2024.01.15',
    runningTimeMinutes: 120,
  },
};

export const WithClickHandler: Story = {
  args: {
    id: 1,
    title: '나우 유 씨 미 3',
    tag: '액션',
    ageRating: 15,
    releaseDate: '2024.01.15',
    runningTimeMinutes: 120,
    handleClickCard: () => {
      console.info('Movie card clicked!');
    },
    className: 'cursor-pointer',
  },
};
