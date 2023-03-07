import React from 'react';
import { View, Text } from 'react-native';
import Logo from '../../assets/icons/Logo.svg';
import FileIcon from '../../assets/icons/file.svg';
import MessageIcon from '../../assets/icons/msg.svg';
import AvatarIcon from '../../assets/icons/Avatar.svg';

import styles from './styles';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleView}>
        <Logo width={30} height={30} />
        <Text style={styles.title}>Resources</Text>
      </View>
      <View style={styles.actionsView}>
        <FileIcon />
        <MessageIcon />
        <AvatarIcon />
      </View>
    </View>
  );
};

export default Header;
