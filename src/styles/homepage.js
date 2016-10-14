import { StyleSheet } from 'react-native';

var homepage = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  masthead: {
    flex: 6,
    backgroundColor: '#666'
  },
  menu: {
    flex: 3,
    backgroundColor: '#444'
  },
  footer: {
    flex: 2,
    backgroundColor: '#333'
  },
  button: {
    flex: 1,
    backgroundColor: '#555555',
    borderColor: '#888888',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center',
    margin: 10
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  }
});

module.exports = homepage;
