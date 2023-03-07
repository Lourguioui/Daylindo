import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import styles from './styles';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

const CategoriesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CategoryCard title='Category 1' image={require('../../assets/img/Bg.png')} color='#E7DC90' />
      <CategoryCard title='Category 2' image={require('../../assets/img/Bg.png')} color='#FD5250' />
      <CategoryCard title='Category 3' image={require('../../assets/img/Bg.png')} color='#FFC107' />
      <CategoryCard title='Category 4' image={require('../../assets/img/Bg.png')} color='#2C85E8' />
      <CategoryCard title='Category 5' image={require('../../assets/img/Bg.png')} color='#B24B98' />
    </SafeAreaView>
  );
};

export default CategoriesScreen;
