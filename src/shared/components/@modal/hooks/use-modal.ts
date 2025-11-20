import { useState } from 'react';

export const useModal = (maxQuantity: number) => {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };
  return { isOpen, handleOpenChange, quantity, handleDecrease, handleIncrease };
};
