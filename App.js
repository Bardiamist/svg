/* eslint-disable prettier/prettier */
import React, {
  useState,
  useCallback,
} from 'react';
import {
  View,
  Button,
} from 'react-native'

import {
  ChartsComponent,
} from './Charts';

const App = () => {
  const [isLineChart, setIsLineChart] = useState(false);

  const toggle = useCallback(() => {
    setIsLineChart(!isLineChart);
  }, [isLineChart]);

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <ChartsComponent
        isLineChart={isLineChart}
      />
      <Button title="Toggle" onPress={toggle} />
    </View>
  );
};

export default App;
