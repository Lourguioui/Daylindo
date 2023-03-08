import { StyleSheet } from 'react-native';
import { fonts } from '../../themes';

const styles = StyleSheet.create({
  tagContainer: {
    height: 24,
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  content: {
    fontFamily: fonts.regular,
    fontSize: 14,
    lineHeight: 16,
  },
});

export default styles;
