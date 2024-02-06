// import react from 'react';
import * as React from 'react';
import {Searchbar} from 'react-native-paper';

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <Searchbar
      style={styles.search}
      placeholder='Search'
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

const styles = StyleSheet.create({
  search: {
    padding: 16,
  },
});

export default SearchBox;
