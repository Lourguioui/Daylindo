import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import WrappedIcon from '../WrappedIcon/WrappedIcon';
import ArrowRight from '../../assets/icons/arrow_right.svg';
import styles from './styles';

export const TabCard = ({ title, icon, subtitle, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress && onPress()}>
      <View style={styles.mainView}>
        <WrappedIcon icon={icon} />
        <View>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtititle}>{subtitle}</Text>}
        </View>
      </View>
      <View style={styles.iconView}>
        <ArrowRight />
      </View>
    </TouchableOpacity>
  );
};

export default TabCard;
