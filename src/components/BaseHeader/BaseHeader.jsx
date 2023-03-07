import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ArrowLeft from '../../assets/icons/arrow_left.svg';
import styles from './styles';

const BaseHeader = ({goBack, title}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => goBack()}>
          <ArrowLeft width={50} height={50}/>
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  )
};

export default BaseHeader;
