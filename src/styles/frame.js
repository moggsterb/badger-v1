import { StyleSheet } from 'react-native';

var frame = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: '#444',
    flexDirection: 'column',
  },
  badgeWrapper: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingTop: 70
  },
  badge: {
    height: 320,
    width: 320,
  },
  tabContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingBottom: 48,
    justifyContent: 'flex-end',

  },
  dash: {
		padding: 10,
    backgroundColor: '#333',
  },
	dashRow: {
		flex: 1,
		flexDirection: 'row'
	}
});

module.exports = frame;
