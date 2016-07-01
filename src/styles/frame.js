import { StyleSheet } from 'react-native';

var frame = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: '#444'
  },
  badgeWrapper: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
		backgroundColor: 'transparent',
    paddingTop: 70,
  },
  badge: {
    height: 320,
    width: 320,
  },
  dash: {
		padding: 10,
		backgroundColor: '#333',
    position: 'absolute',
    bottom: 50,
    width: 320
  },
	dashRow: {
		flex: 1,
		flexDirection: 'row'
	}
});

module.exports = frame;
