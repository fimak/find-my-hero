import { createContext, FC, ReactNode, useMemo, useState } from 'react';
import { ContextValue, Hero, Preference } from './types';

export const AppContext = createContext<ContextValue>({
  name: '',
  setName: () => {},
  preference: '',
  setPreference: () => {},
  heroList: undefined,
  setHeroList: () => {},
});

interface Props {
  children: ReactNode;
}

const AppContextProvider: FC<Props> = ({ children }) => {
  const [name, setName] = useState<string>('');
  const [preference, setPreference] = useState<Preference>('');
  const [heroList, setHeroList] = useState<Hero[]>();

  const value = useMemo(
    () => ({ name, setName, preference, setPreference, heroList, setHeroList }),
    [name, preference, heroList]
  );

  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  )
}

export default AppContextProvider;
