import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import SearchrchInput from '../../components/SearchInput/SearchInput';
import TabCard from '../../components/TabCard/TabCard';
import SearchIcon from '../../assets/icons/loup.svg';
import StarIcon from '../../assets/icons/star_pri.svg';
import PlusIcon from '../../assets/icons/plus.svg';
import * as Screens from '../../navigation/navigation';
import styles from './styles';

const ResourcesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchrchInput />
      <TabCard
        title='Ressources par catégorie'
        icon={<SearchIcon height={17} width={17} />}
        onPress={() => navigation.navigate(Screens.ResourcesStack.CATEGORIES)}
      />
      <TabCard title='Ressources par type d’activité' icon={<SearchIcon height={17} width={17} />} />
      <TabCard title='Mes favoris' icon={<StarIcon height={17} width={17} />} subtitle='Mes activités et parcours favoris' />
      <TabCard title='Mes favoris' icon={<PlusIcon height={17} width={17} />} subtitle='Mes activités et parcours favoris' />
    </SafeAreaView>
  );
};

export default ResourcesScreen;
