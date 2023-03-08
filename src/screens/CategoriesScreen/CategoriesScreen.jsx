import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import styles from './styles';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import * as Screens from '../../navigation/navigation';

const CategoriesScreen = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        <CategoryCard
          title='Category 1'
          image={require('../../assets/img/Bg.png')}
          color='#E7DC90'
          goToDetails={() => navigation.navigate(Screens.ResourcesStack.CATEGORY)}
        />
        <CategoryCard
          title='Category 2'
          image={require('../../assets/img/Bg.png')}
          color='#FD5250'
          goToDetails={() => navigation.navigate(Screens.ResourcesStack.CATEGORY)}
        />
        <CategoryCard
          title='Category 3'
          image={require('../../assets/img/Bg.png')}
          color='#FFC107'
          goToDetails={() => navigation.navigate(Screens.ResourcesStack.CATEGORY)}
        />
        <CategoryCard
          title='Category 4'
          image={require('../../assets/img/Bg.png')}
          color='#2C85E8'
          goToDetails={() => navigation.navigate(Screens.ResourcesStack.CATEGORY)}
        />
        <CategoryCard
          title='Category 5'
          image={require('../../assets/img/Bg.png')}
          color='#B24B98'
          goToDetails={() => navigation.navigate(Screens.ResourcesStack.CATEGORY)}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default CategoriesScreen;
