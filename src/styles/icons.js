import { StyleSheet } from 'react-native';

var icons = StyleSheet.create({
  button: {
	  height: 36,
	  flex: 1,
	  flexDirection: 'row',
	  backgroundColor: '#555555',
	  borderColor: '#888888',
	  borderWidth: 1,
	  borderRadius: 8,
	  margin: 2,
	  alignSelf: 'center',
	  justifyContent: 'center'
	},
  buttonActive: {
    backgroundColor: '#222',
  },
	buttonText: {
		fontSize: 10,
		color: '#999',
		alignSelf: 'center'
	},
  buttonTextActive: {
    color: '#fff',
  }
});

module.exports = icons;
