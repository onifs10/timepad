import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigator from './screens/BottomTab.navigtor';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import theme from './theme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ModalScreen from './screens/modals/test.modal';

const RootStack = createNativeStackNavigator();
const App = () => {
  return (
    <SafeAreaProvider
      style={{
        backgroundColor: theme.lightGray,
      }}>
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <RootStack.Group>
            <RootStack.Screen name="App" component={BottomNavigator} />
          </RootStack.Group>
          <RootStack.Group screenOptions={{presentation: 'fullScreenModal'}}>
            <RootStack.Screen name="Test" component={ModalScreen} />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
