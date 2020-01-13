import {StyleSheet} from 'react-native';

const HomeViewStyles = StyleSheet.create({
  homeViewContainer: {
    alignItems: 'center',
  },

  welcomeHeader: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 40,
    color: '#000',
  },

  finishButtonText: {
    fontSize: 60,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#EA4C4C',
  },

  buttonsContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default HomeViewStyles;
