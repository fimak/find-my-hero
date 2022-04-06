import { Dispatch, SetStateAction } from 'react';

export type Preference = 'comics' | 'series' | 'stories' | '';

export interface Hero {}

export interface AppState {
  name: string;
  preference: Preference;
  heroList?: any;
}

export interface ContextValue extends AppState {
  setName: Dispatch<SetStateAction<string>>;
  setPreference: Dispatch<SetStateAction<Preference>>;
  setHeroList: Dispatch<SetStateAction<Hero[] | undefined>>;
}
