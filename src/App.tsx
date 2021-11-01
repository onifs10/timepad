import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigator from './screens/BottomTab.navigtor';
const App = () => {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
};

export default App;
