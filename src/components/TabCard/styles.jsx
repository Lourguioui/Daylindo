import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../themes';

const styles = StyleSheet.create({
  container: {
    height: 64,
    width: '100%',
    marginVertical: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 16,
    shadowOpacity: 0.1,
    elevation: 20,
    backgroundColor: colors.white,
    borderRadius: 8,
  },
  mainView: {
    width: '90%',
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconView: {
    width: '10%',
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.text.primary,
    fontFamily: fonts.medium,
    fontSize: 16,
    lineHeight: 20,
  },
  subtititle: {
    color: colors.text.light,
    fontFamily: fonts.regular,
    fontSize: 14,
    lineHeight: 16,
  },
});

export default styles;
