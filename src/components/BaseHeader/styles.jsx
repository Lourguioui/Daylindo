import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../themes';

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 72,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 8,
    backgroundColor: colors.white,
    borderBottomWidth: 1.29,
    borderBottomColor: colors.borders.primary,
  },
  iconContainer: {
    width: '11.17%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    width: '89.83%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.medium,
    fontSize: 20,
    lineHeight: 24,
    color: colors.text.primary,
  },
});

export default styles;
