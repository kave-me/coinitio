import { createContext } from 'react';
import { Language, Location, ThemeVariant } from '../types/Types';

type ContextProps = {
  authenticated: boolean;
  language: Language;
  location: Location;
  themeVariant: ThemeVariant;
};

const AppContext = createContext<Partial<ContextProps>>({
  authenticated: false,
  language: Language.fa,
  location: { lat: 0, long: 0 },
  themeVariant: ThemeVariant.dark,
});

export default AppContext;
