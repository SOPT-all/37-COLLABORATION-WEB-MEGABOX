import { useState } from 'react';
import type { MovieDetailMenu } from '@pages/movie-detail/types/menu';

export function useMovieDetail() {
  const [activeTab, setActiveTab] = useState<MovieDetailMenu>('info');
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const handleClickTab = (tab: MovieDetailMenu) => {
    setActiveTab(tab);
  };

  const handleToggleDescription = () => {
    setIsDescriptionExpanded(prev => !prev);
  };

  return {
    activeTab,
    isDescriptionExpanded,
    handleClickTab,
    handleToggleDescription,
  };
}
