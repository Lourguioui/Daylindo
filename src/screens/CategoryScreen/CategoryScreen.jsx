import React, { useState } from 'react';
import { SafeAreaView, Text, ImageBackground, View, TouchableOpacity, ScrollView } from 'react-native';
import ArrowLeft from '../../assets/icons/arrow_left_white.svg';
import MenuIcon from '../../assets/icons/Union.svg';
import CategoryBadge from '../../components/CategoryBadge/CategoryBadge';
import ResourceCard from '../../components/ResourceCard/ResourceCard';
import Tag from '../../components/Tag/Tag';
import Modal from 'react-native-modal';
import { colors } from '../../themes';
import styles from './styles';
import ResourceOptions from '../../components/ResourceOptions/ResourceOptions';

const TagPanel = () => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.tagsContainer}>
          <Tag content='Tous' focused={true} />
          <Tag content='Bonne pratique' />
          <Tag content='Plan d’action' />
          <Tag content='Video' />
          <Tag content='Lecture' />
          <Tag content='Tous' />
          <Tag content='Tous' />
          <Tag content='Tous' />
          <Tag content='Tous' />
        </View>
      </ScrollView>
    </View>
  );
};

const CategoryScreen = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <ImageBackground
          source={require('../../assets/img/Bg2.png')}
          resizeMode='cover'
          imageStyle={styles.imageStyle}
          style={styles.imageContainer}>
          <View style={styles.actionsContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeft />
            </TouchableOpacity>
            <TouchableOpacity>
              <MenuIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.categoryContainer}>
            <CategoryBadge color={colors.primary} />
            <Text style={styles.title}>Category 1</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.detailsContainer}>
        <TagPanel />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.resourcesContainer}>
            <ResourceCard onPress={() => setIsModalVisible(true)} />
            <ResourceCard onPress={() => setIsModalVisible(true)} />
            <ResourceCard onPress={() => setIsModalVisible(true)} />
            <ResourceCard onPress={() => setIsModalVisible(true)} />
          </View>
        </ScrollView>
      </View>
      <Modal
        isVisible={isModalVisible}
        onSwipeComplete={() => setIsModalVisible(false)}
        swipeDirection={['down']}
        onBackdropPress={() => setIsModalVisible(false)}
        onBackButtonPress={() => setIsModalVisible(false)}
        style={styles.modal}>
        <ResourceOptions />
      </Modal>
    </SafeAreaView>
  );
};

export default CategoryScreen;
