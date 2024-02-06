import React from 'react';
import {StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';
import styled from 'styled-components';

const RestaurantCard = styled(Card)`
  background: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  padding: ${(props) => props.theme.space[1]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfo = ({restaurant = {}}) => {
  const {
    name = 'Fancy Restaurant',
    icon,
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '123 Oak St',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <Card.Content>
        <Title>{name}</Title>
      </Card.Content>
      <RestaurantCardCover key={name} source={{uri: photos[0]}} />
    </RestaurantCard>
  );
};
