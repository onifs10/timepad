import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './screens/Home.screen';
import {RootStackParamList} from './types/navigation.types';
import Sample from './screens/Sample.screen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={'Sample'}>
        <RootStack.Screen name={'Home'} component={Home} />
        <RootStack.Screen name="Sample" component={Sample} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
