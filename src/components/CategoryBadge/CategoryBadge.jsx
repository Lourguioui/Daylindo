import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const CategoryBadge = ({color}) => {
  return <View style={[styles.badge, {backgroundColor: color}]} />;
};

export default CategoryBadge;
