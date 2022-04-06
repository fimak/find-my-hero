import { Dispatch, SetStateAction } from 'react';

export type Preference = 'comics' | 'series' | 'stories' | '';

export interface Hero {
  id: number;
  name: string;
}

export interface AppState {
  name: string;
  preference: Preference;
  heroList?: Hero[];
}

export interface ContextValue extends AppState {
  setName: Dispatch<SetStateAction<string>>;
  setPreference: Dispatch<SetStateAction<Preference>>;
  setHeroList: Dispatch<SetStateAction<Hero[] | undefined>>;
}
