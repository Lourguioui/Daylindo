import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import CategoriesScreen from '../screens/CategoriesScreen/CategoriesScreen';
import CategoryScreen from '../screens/CategoryScreen/CategoryScreen';
import TabNavigator from './tabNavigation';
import * as Screens from './navigation';
import BaseHeader from '../components/BaseHeader/BaseHeader';

const theme = DefaultTheme;
theme.colors.background = '#FFFFFF';

const Stack = createNativeStackNavigator();

const ResourcesStack = () => {
  return (
    <NavigationContainer theme={theme} independent={true}>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerShown: route.name === Screens.ResourcesStack.CATEGORIES,
          header: ({ navigation, route }) => {
            return (
              route.name === Screens.ResourcesStack.CATEGORIES && (
                <BaseHeader goBack={() => navigation.goBack()} title='Toutes les catégories' />
              )
            );
          },
        })}>
        <Stack.Screen name={Screens.ResourcesStack.TABS} component={TabNavigator} />
        <Stack.Screen name={Screens.ResourcesStack.CATEGORIES} component={CategoriesScreen} />
        <Stack.Screen name={Screens.ResourcesStack.CATEGORY} component={CategoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ResourcesStack;
