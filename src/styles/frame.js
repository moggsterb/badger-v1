import { StyleSheet } from 'react-native';

var frame = StyleSheet.create({
  container: {
    flex: 1,
		position: 'absolute',
		top: 0,
		bottom: 50,
		left: 0,
		right: 0,
		backgroundColor: '#800000'
  },
  badge: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
		backgroundColor: '#600000'
  },
  dash: {
		padding: 10,
		backgroundColor: '#400000'
  },
	dashRow: {
		flex: 1,
		flexDirection: 'row'
	}
});

module.exports = frame;
