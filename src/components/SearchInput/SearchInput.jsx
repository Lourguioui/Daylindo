import * as React from "react";
import { View, TextInput } from "react-native";
import styles from "./styles";
import {colors, fonts} from '../../themes';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchrchInput = () => {
  return (
    <View style={styles.container}>
      <Icon name="Rechercher dans ressources" size={25} color={colors.text.light} />
      <TextInput style={styles.input} 
                 placeholder="Search" 
                 placeholderTextColor={colors.text.light}
        />
    </View>
  );
};

export default SearchrchInput;