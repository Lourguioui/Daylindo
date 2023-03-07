import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text } from 'react-native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import NotificationsSccreen from '../screens/NotificationsScreen/NotificationsSccreen';
import ResourcesScreen from '../screens/ResourcesScreen/ResourcesScreen';
import StatsScreen from '../screens/StatsScreen/StatsScreen';
import ResourcesStack from './resourcesStack';
import * as Screens from './navigation';
import { colors, fonts } from '../themes/index';
import LogoIcon from '../assets/icons/logo_icon.svg';
import ProfileIcon from '../assets/icons/people.svg';
import SearchIcon from '../assets/icons/loup.svg';
import NotificationIcon from '../assets/icons/Icon_notifications_9.svg';
import StatsIcon from '../assets/icons/stats.svg';
import Header from '../components/Header/Header';

const theme = DefaultTheme;
theme.colors.background = '#FFFFFF';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === Screens.tabs.HOME) {
              return <LogoIcon color={color} fill={color} />;
            }
            if (route.name === Screens.tabs.RESOURCES) {
              return <SearchIcon color={color} fill={color} />;
            }
            if (route.name === Screens.tabs.ACCOUNT) {
              return <ProfileIcon color={color} />;
            }
            if (route.name === Screens.tabs.NOTIFICATIONS) {
              return <NotificationIcon color={color} />;
            }
            if (route.name === Screens.tabs.STATS) {
              return <StatsIcon color={color} />;
            }
          },
          tabBarLabel: ({ focused, color }) => {
            if (route.name === Screens.tabs.HOME && focused) {
              return <Text style={styles.tabBarLabel}>{Screens.tabs.HOME}</Text>;
            }
            if (route.name === Screens.tabs.RESOURCES && focused) {
              return <Text style={styles.tabBarLabel}>{Screens.tabs.RESOURCES}</Text>;
            }
            if (route.name === Screens.tabs.ACCOUNT && focused) {
              return <Text style={styles.tabBarLabel}>{Screens.tabs.ACCOUNT}</Text>;
            }
            if (route.name === Screens.tabs.NOTIFICATIONS && focused) {
              return <Text style={styles.tabBarLabel}>{Screens.tabs.NOTIFICATIONS}</Text>;
            }
            if (route.name === Screens.tabs.STATS && focused) {
              return <Text style={styles.tabBarLabel}>{Screens.tabs.STATS}</Text>;
            }
          },
          header: ({route}) => {
            if (route.name === Screens.tabs.RESOURCES){
              return <Header />
            }
          },
          tabBarActiveTintColor: colors.primary,
          tabBarStyle: styles.tabBar,
          headerShown: route.name === Screens.tabs.RESOURCES ? true : false,
        })}>
        <Tab.Screen name={Screens.tabs.HOME} component={HomeScreen} />
        <Tab.Screen name={Screens.tabs.RESOURCES} component={ResourcesStack} />
        <Tab.Screen name={Screens.tabs.ACCOUNT} component={ProfileScreen} />
        <Tab.Screen name={Screens.tabs.NOTIFICATIONS} component={NotificationsSccreen} />
        <Tab.Screen name={Screens.tabs.STATS} component={StatsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: '6.64%',
  },
  tabBarLabel: {
    fontFamily: fonts.regular,
    fontSize: 11,
    lineHeight: 16,
    color: colors.primary,
  },
});

export default TabNavigator;
