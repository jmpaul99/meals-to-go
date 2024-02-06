import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';
import {RestaurantsScreen} from './src/features/restaurants/screens/restaurants.screen';
import {
  useFonts as useOswald,
  Oswald400Regular,
} from '@expo-google-fonts/oswald';
import {useFonts as useLato, Lato400Regular} from '@expo-google-fonts/lato';

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald400Regular,
  });

  const [latoLoaded] = useLato({
    Lato400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
        <StatusBar style='auto' />
      </ThemeProvider>
    </>
  );
}
