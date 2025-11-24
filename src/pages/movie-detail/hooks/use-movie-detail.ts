import { useState } from 'react';
import { MOVIE_DETAIL_DESCRIPTION } from '@pages/movie-detail/mock';
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

  const descriptionText = isDescriptionExpanded
    ? MOVIE_DETAIL_DESCRIPTION.full
    : MOVIE_DETAIL_DESCRIPTION.short;

  return {
    activeTab,
    isDescriptionExpanded,
    descriptionText,
    handleClickTab,
    handleToggleDescription,
  };
}
