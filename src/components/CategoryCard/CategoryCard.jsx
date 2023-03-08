import React from 'react';
import { TouchableOpacity, Text, ImageBackground, View } from 'react-native';
import CategoryBadge from '../CategoryBadge/CategoryBadge';
import styles from './styles';

const CategoryCard = ({title, image, color, goToDetails}) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => goToDetails()}>
      <ImageBackground
        source={image}
        resizeMode='cover'
        style={styles.imageContainer}
        imageStyle={styles.imageStyle}>
        <View style={styles.view}>
          <CategoryBadge color={color}/>
        </View>
        <View style={styles.view}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryCard;
