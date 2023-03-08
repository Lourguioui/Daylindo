import { StyleSheet } from 'react-native';
import { fonts, colors } from '../../themes';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '24.75%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: colors.white,
    paddingHorizontal: 37,
    paddingVertical: 32,
  },
  option: {
    height: 48,
    borderBottomColor: '#0000001a',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors.text.primary,
    fontFamily: fonts.medium,
    fontSize: 16,
    lineHeight: 19,
    marginLeft: 14,
  },
});

export default styles;
