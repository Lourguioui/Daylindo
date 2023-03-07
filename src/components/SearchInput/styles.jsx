import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../themes';

const styles = StyleSheet.create({
  container: {
    // padding: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.backgrounds.secondary,
    borderRadius: 8,
    alignItems: 'center',
    height: 40,
  },
  input: {
    marginLeft: 20,
    width: '90%',
    color: colors.text.primary,
    fontFamily: fonts.regular,
    fontSize: 16,
    lineHeight: 20,
  },
});

export default styles;
