import * as React from "react";
import { View, TextInput } from "react-native";
import styles from "./styles";
import {colors, fonts} from '../../themes';
import LoupeIcon from '../../assets/icons/ic_search.svg';

const SearchrchInput = () => {
  return (
    <View style={styles.container}>
      <LoupeIcon fill={colors.primary} />
      <TextInput style={styles.input} 
                 placeholder="Rechercher dans ressources" 
                 placeholderTextColor={colors.text.light}
        />
    </View>
  );
};

export default SearchrchInput;