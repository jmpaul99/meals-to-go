import React from 'react';
import {Searchbar} from 'react-native-paper';
import {StatusBar, StyleSheet, SafeAreaView, View} from 'react-native';
import {RestaurantInfo} from '../components/restaurantInfo.component';
import styled from 'styled-components';

const ScreenView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const ListView = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background: ${(props) => props.theme.colors.brand.primary};
`;

export const RestaurantsScreen = () => (
  <ScreenView>
    <SearchView>
      <Searchbar placeholder='Search' />
    </SearchView>
    <ListView>
      <RestaurantInfo />
    </ListView>
  </ScreenView>
);
