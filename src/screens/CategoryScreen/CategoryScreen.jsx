import React from 'react';
import { SafeAreaView, Text, ImageBackground, View, TouchableOpacity, ScrollView } from 'react-native';
import ArrowLeft from '../../assets/icons/arrow_left_white.svg';
import MenuIcon from '../../assets/icons/Union.svg';
import CategoryBadge from '../../components/CategoryBadge/CategoryBadge';
import Tag from '../../components/Tag/Tag';
import { colors } from '../../themes';
import styles from './styles';

const CategoryScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <ImageBackground
          source={require('../../assets/img/Bg2.png')}
          resizeMode='cover'
          imageStyle={styles.imageStyle}
          style={styles.imageContainer}>
          <View style={styles.actionsContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeft />
            </TouchableOpacity>
            <TouchableOpacity>
              <MenuIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.categoryContainer}>
            <CategoryBadge color={colors.primary}/>
            <Text style={styles.title}>Category 1</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.detailsContainer}>
        <ScrollView horizontal={true}>
          <Tag content='Tous' focused={true}/>
          <Tag content='Bonne pratique'/>
          <Tag content='Plan d’action'/>
          <Tag content='Video'/>
          <Tag content='Lecture'/>
          <Tag content='Tous'/>
          <Tag content='Tous'/>
          <Tag content='Tous'/>
          <Tag content='Tous'/>
        </ScrollView>
        <Text>Test</Text>
      </View>
    </SafeAreaView>
  );
};

export default CategoryScreen;
