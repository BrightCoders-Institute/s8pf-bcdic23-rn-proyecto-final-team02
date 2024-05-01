import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  input: {
    color: '#161616',
    fontSize: 20,
    marginBottom: 8,
  },
  primaryBtn: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 20,
    backgroundColor: '#6C63FF',
    width: 361,
    height: 38,
  },
});
