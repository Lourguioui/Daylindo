import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../themes';

const styles = StyleSheet.create({
  headerContainer: {
    height: 72,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 24,
    borderBottomWidth: 1.29,
    borderBottomColor: colors.borders.primary,
  },
  titleView: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionsView: {
    width: '50%',
    flexDirection: 'row',
    paddingLeft: '20%',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.text.primary,
    fontFamily: fonts.medium,
    fontSize: 20,
    lineHeight: 24,
    paddingLeft: 16,
  },
});

export default styles;
