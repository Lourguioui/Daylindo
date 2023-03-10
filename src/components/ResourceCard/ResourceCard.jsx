import React from 'react';
import { TouchableOpacity, Text, ImageBackground, View } from 'react-native';
import styles from './styles';
import ResourceIcon from '../../assets/icons/resource.svg';
import Star from '../../assets/icons/rate_star.svg';
import Menu from '../../assets/icons/Union_md.svg';

const CardHeader = ({rate}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.container}>
        <TouchableOpacity>
          <ResourceIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.rateContainer}>
          <Star />
          <Text style={styles.rate}>{rate}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity>
          <Menu />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ResourceCard = ({title, rate, onPress}) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => onPress()}>
      <ImageBackground
        source={require('../../assets/img/Bg.png')}
        resizeMode='cover'
        style={styles.imageContainer}
        imageStyle={styles.imageStyle}>
        <CardHeader rate={rate}/>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{title}</Text>
        </View>
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonContent}>Diffuser</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ResourceCard;
