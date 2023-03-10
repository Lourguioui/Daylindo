import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import styles from './styles';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import { useGetCategories } from '../../hooks/useGetCategories';
import * as Screens from '../../navigation/navigation';

const CategoriesScreen = ({ navigation }) => {
  const { categories, loading } = useGetCategories();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        {!loading && categories.map((item, index) => (
          <CategoryCard
            key={item.id}
            title={item.title}
            color={item.color}
            image={require('../../assets/img/Bg.png')}
            goToDetails={() => navigation.navigate(Screens.ResourcesStack.CATEGORY, { id: item.id })}
          />
        ))}
      </SafeAreaView>
    </ScrollView>
  );
};

export default CategoriesScreen;
