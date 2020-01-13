import {StyleSheet} from 'react-native';
const HistoryViewStyles = StyleSheet.create({
  historyPageHeader: {
    fontSize: 40,
    textAlign: 'center',
  },
  historyItemContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#EAEAEA',
    padding: 12,
    height: 68,
  },
  historyItemNameText: {fontSize: 18},
  historyItemDetailsContainer: {
    flex: 2,
    alignItems: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  historyItemDetailsText: {fontSize: 14},
});

export default HistoryViewStyles;
