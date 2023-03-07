import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../themes';

const styles = StyleSheet.create({
  cardContainer: {
    width: '31.84%',
    height: 114,
    borderRadius: 8,
    marginVertical: 4,
    marginHorizontal: 2,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 8,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 8,
  },
  view: {
    width: '100%',
    padding: 8,
  },
  title: {
    fontFamily: fonts.medium,
    fontSize: 12,
    lineHeight: 14,
    color: colors.white,
  },
});

export default styles;
