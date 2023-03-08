import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  headerContainer: {
    height: '21.80%',
    width: '100%',
    position: 'absolute',
    top: 0,
    backgroundColor: 'red',
  },
  imageContainer: {
    flex: 1,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
  },
  detailsContainer: {
    position: 'absolute',
    top: '18.80%',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    backgroundColor: colors.white,
    width: '100%',
    height: '82.20%',
    padding: 27,
  },
  actionsContainer: {
    paddingHorizontal: 32,
    paddingVertical: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryContainer: {
    flexDirection: 'row',
    paddingHorizontal: 32,
    paddingVertical: 28,
  },
  title: {
    color: colors.white,
    fontFamily: fonts.medium,
    fontSize: 16,
    lineHeight: 20,
    marginLeft: 15,
  },
});

export default styles;
