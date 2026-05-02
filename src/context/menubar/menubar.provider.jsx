import { useState } from 'react';
import { MenubarContext } from './menubar.contaxt';

export const MenubarProvider = ({ children }) => {
  const [isOpenMenubar, setIsOpenMenubar] = useState(false);

  const value = { isOpenMenubar, setIsOpenMenubar };
  return (
    <MenubarContext.Provider value={value}>{children}</MenubarContext.Provider>
  );
};
