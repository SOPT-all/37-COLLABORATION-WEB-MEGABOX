import { useState, useCallback } from 'react';

export function useTooltip() {
  const [isTooltipOpen, setIsTooltipOpen] = useState(true);

  const handleCloseTooltip = useCallback(() => {
    setIsTooltipOpen(false);
  }, []);

  return {
    isTooltipOpen,
    handleCloseTooltip,
  };
}