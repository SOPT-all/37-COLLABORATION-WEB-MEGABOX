import { useState } from 'react';
import type { MovieDetailTab } from './MovieDetailTabs';
import { MOVIE_DETAIL_DESCRIPTION } from './mock';

export function useMovieDetail() {
  const [activeTab, setActiveTab] = useState<MovieDetailTab>('info');
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const handleClickTab = (tab: MovieDetailTab) => {
    setActiveTab(tab);
  };

  const handleToggleDescription = () => {
    setIsDescriptionExpanded((prev) => !prev);
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