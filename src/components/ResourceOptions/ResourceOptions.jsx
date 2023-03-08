import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import StarIcon from '../../assets/icons/star_black.svg';
import ShareIcon from '../../assets/icons/share.svg';
import ProfileIcon from '../../assets/icons/profile.svg';

const ResourceOptions = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option}>
        <StarIcon />
        <Text style={styles.title}>Favoris</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <ShareIcon />
        <Text style={styles.title}>Partager</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <ProfileIcon />
        <Text style={styles.title}>Diffuser à moi meme</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResourceOptions;
