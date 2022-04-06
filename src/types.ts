import { Dispatch, SetStateAction } from 'react';

export type Preferences = 'comics' | 'series' | 'stories' | '';

export interface Hero {
  id: number;
  name: string;
}

export interface AppState {
  name: string;
  preferences: Preferences;
  heroList?: Hero[];
}

export interface ContextValue extends AppState {
  setName: Dispatch<SetStateAction<string>>;
  setPreferences: Dispatch<SetStateAction<Preferences>>;
  setHeroList: Dispatch<SetStateAction<Hero[] | undefined>>;
}
