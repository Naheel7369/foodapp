import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screen} from 'react-native-screens';
import MealsOverview from './screens/mealsOverview';
import MealDetails from './screens/MealDetails';
import {createDrawerNavigator} from '@react-navigation/drawer';
import favorites from './screens/Favorites';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Provider} from 'react-redux';

import IconButton from './assets/Components/IconButton';
import Favorites from './screens/Favorites';
// import FavoritesContextProvider from './store/context/favorites-context';
import {store} from './store/redux/store';
import Category from './screens/Category';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  function DrawerNavigator() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#351401'},
          headerTintColor: 'white',
          sceneContainerStyle: {backgroundColor: '#3f2f25'},
          drawerContentStyle: {backgroundColor: '#351401'},
          drawerInactiveTintColor: 'white',
          drawerActiveTintColor: '#351401',
          drawerActiveBackgroundColor: '#e4baa1',
        }}>
        <Drawer.Screen
          name="Categories"
          component={Category}
          options={{
            title: 'All Categories',
            drawerIcon: ({color, size}) => (
              <Ionicons name="list" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Favorites"
          component={Favorites}
          options={{
            drawerIcon: ({color, size}) => (
              <Ionicons name="star" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#351401" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: '#351401'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#3f2f25'},
            }}>
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="mealsOverview" component={MealsOverview} />
            <Stack.Screen
              name="MealDetails"
              component={MealDetails}
              options={{
                title: 'About The Meal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24180f',
  },
});

export default App;
