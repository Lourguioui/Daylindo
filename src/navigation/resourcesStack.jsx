import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResourcesScreen from '../screens/ResourcesScreen/ResourcesScreen';
import CategoriesScreen from '../screens/CategoriesScreen/CategoriesScreen';
import CategoryScreen from '../screens/CategoryScreen/CategoryScreen';
import * as Screens from './navigation';


const ResourcesRootStack = createNativeStackNavigator();

const ResourcesStack = () => {
  return(
    <ResourcesRootStack.Navigator screenOptions={{ headerShown: false }}>
      <ResourcesRootStack.Screen name={Screens.ResourcesStack.RESOURCES} component={ResourcesScreen} />
      <ResourcesRootStack.Screen name={Screens.ResourcesStack.CATEGORIES} component={CategoriesScreen} />
      <ResourcesRootStack.Screen name={Screens.ResourcesStack.CATEGORY} component={CategoryScreen} />
    </ResourcesRootStack.Navigator>
  );
};

export default ResourcesStack;
