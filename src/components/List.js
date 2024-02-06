// import react from 'react';
import {StyleSheet, Text, View} from 'react-native';

const List = () => {
  return (
    <View style={styles.Search}>
      <Text>list</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Search: {
    backgroundColor: 'blue',
    padding: 16,
    flex: 1,
    width: '100%',
  },
});

export default List;
