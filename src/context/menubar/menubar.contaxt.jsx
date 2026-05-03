import { createContext } from 'react';

export const MenubarContext = createContext({
  isOpenMenubar: false,
  setIsOpenMenubar: () => {},
});
