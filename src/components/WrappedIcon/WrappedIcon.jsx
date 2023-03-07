import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const WrappedIcon = ({ icon }) => {
  return <View style={styles.wrappedIcon}>{icon}</View>;
};

export default WrappedIcon;
