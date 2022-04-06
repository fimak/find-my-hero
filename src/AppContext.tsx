import { createContext, FC, ReactNode, useMemo, useState } from 'react';
import { ContextValue, Hero, Preferences } from './types';

export const AppContext = createContext<ContextValue>({
  name: '',
  setName: () => {},
  preferences: '',
  setPreferences: () => {},
  heroList: undefined,
  setHeroList: () => {},
});

interface Props {
  children: ReactNode;
}

const AppContextProvider: FC<Props> = ({ children }) => {
  const [name, setName] = useState<string>('');
  const [preferences, setPreferences] = useState<Preferences>('');
  const [heroList, setHeroList] = useState<Hero[]>();

  const value = useMemo(
    () => ({ name, setName, preferences, setPreferences, heroList, setHeroList }),
    [name, preferences, heroList]
  );

  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  )
}

export default AppContextProvider;
