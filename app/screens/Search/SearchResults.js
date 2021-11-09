import React from 'react';
import {isEmpty} from 'lodash';
import SearchList from '../../components/Search/SearchList';
import NotFound from '../../components/Search/NotFound';

const SearchResults = ({navigation, route}) => {
  const {payload} = route.params;
  return (
    <>
      {!isEmpty(payload) ? (
        <SearchList albums={payload} navigation={navigation} />
      ) : (
        <NotFound navigation={navigation} />
      )}
    </>
  );
};

export default SearchResults;
