import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { colors, fonts } from '../../themes';
import styles from './styles';

const Tag = ({content, focused}) => {
  return (
    <TouchableOpacity style={[styles.tagContainer, {backgroundColor: focused ? colors.primary : colors.secondary }]}>
      <Text style={[styles.content, {color: focused ? colors.white : colors.primary}]}>{content}</Text>
    </TouchableOpacity>
  )
}

export default Tag;
