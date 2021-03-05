import AppContext from '../../utils/contexts/AppContext';
import { useEffect, useState } from 'react';
import { Language, Location, ThemeVariant } from '../../utils/types/Types';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../../utils/theme';

interface layoutProps {
  children: Object;
}

const Layout = ({ children }: layoutProps) => {
  const [location, setLocation] = useState<Location>(() => ({ lat: 0, long: 1 }));

  useEffect(() => {
    // TODO: get user location
    // if authenticated is true get it from user profile
    // else get it from browser
    const newLocation = {
      lat: 1,
      long: 2,
    };

    setLocation(newLocation);
  }, []);

  const [authenticated, setAuthenticated] = useState<boolean>(() => false);

  useEffect(() => {
    /*
     * check cookie if it has a valid token then set true
     * else it remains false and some functionality of the
     * app will be disable accordingly
     */
    const isAuthenticated = () => {
      //  TODO: implement isAuthenticated
      return true;
    };

    setAuthenticated(isAuthenticated());
  }, []);

  const [language, setLanguage] = useState<Language>(Language.fa);
  useEffect(() => {
    /*
     * get language preferences from user
     * profile from backend if user is not
     * authenticated else get and/or set a new language
     * to browser cookie
     */
    const getUserLanguage = () => {
      //  TODO: implement getUserLanguage
      return Language.fa;
    };

    setLanguage(getUserLanguage());
  }, [authenticated]);

  const [themeVariant, setThemeVariant] = useState<ThemeVariant>(() => ThemeVariant.dark);
  useEffect(() => {
    /*
     * if user is authenticated get themeVariant from
     * user profile from backend else get and/or set
     * from browser cookie
     * */
    const getThemeVariant = () => {
      //  TODO: implement getThemeVariant

      return ThemeVariant.dark;
    };
    setThemeVariant(getThemeVariant);
  }, []);

  return (
    <AppContext.Provider
      value={{
        location,
        language,
        authenticated,
        themeVariant,
      }}
    >
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default Layout;
