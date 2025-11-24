import { useState } from 'react';

export function useTooltip() {
  const [isTooltipOpen, setIsTooltipOpen] = useState(true);

  const handleCloseTooltip = () => {
    setIsTooltipOpen(false);
  };

  return {
    isTooltipOpen,
    handleCloseTooltip,
  };
}
