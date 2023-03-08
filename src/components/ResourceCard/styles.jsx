import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../themes';

const styles = StyleSheet.create({
  cardContainer: {
    width: 160,
    height: 160,
    borderRadius: 8,
    marginVertical: 4,
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
  headerContainer: {
    width: '100%',
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flexDirection: 'row',
  },
  rateContainer: {
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00000066',
    borderRadius: 28,
    padding: 2,
    marginLeft: 2,
  },
  rate: {
    color: colors.text.yellow,
    fontFamily: fonts.regular,
    fontSize: 14,
    lineHeight: 16,
    marginLeft: 2,
  },
  labelContainer: {
    paddingHorizontal: 8,
  },
  label: {
    color: colors.white,
    fontFamily: fonts.medium,
    fontSize: 16,
    lineHeight: 20,
  },
  actionContainer: {
    padding: 8,
  },
  button: {
    width: '100%',
    height: 32,
    borderRadius: 8,
    backgroundColor: '#ffffff33',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContent: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: 14,
    lineHeight: 16,
  },
});

export default styles;
