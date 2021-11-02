import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home.screen';
import Add from './Add.screen';
import {BottomNavParamList} from '../types/navigation.types';
import Analytics from './Analytics.screen';
import BottomNav from './Bottom.nav';
import theme from '../theme';
import Header from './Header.nav';

const BottomTabs = createBottomTabNavigator<BottomNavParamList>();
const BottomNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="Add"
      tabBar={props => <BottomNav {...props} />}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.lightGray,
          position: 'absolute',
        },
        header: props => {
          return <Header {...props} />;
        },
      }}>
      <BottomTabs.Screen name={'Task'} component={Home} />
      <BottomTabs.Screen name="Add" component={Add} />
      <BottomTabs.Screen name="Analytics" component={Analytics} />
    </BottomTabs.Navigator>
  );
};

export default BottomNavigator;
