import React, {useState} from 'react';
import {Text, SafeAreaView, TextInput, View} from 'react-native';
import FinishViewStyles from './FinishViewStyles';
import ResponsiveCentered from './ResponsiveCentered';
import ActionButton from './ActionButton';
import i18n from '../../i18n/i18n';
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';
import {ACTIVITY_STORAGE_KEY} from '../../config/consts';

const FinishView = props => {
  const timeSpent = props.navigation.getParam('timeSpent');
  const [name, setName] = useState('');

  const saveTime = async () => {
    let activities = await AsyncStorage.getItem(ACTIVITY_STORAGE_KEY);
    if (activities === null) {
      activities = [];
    } else {
      activities = JSON.parse(activities);
    }
    const date = new Date().getTime();
    activities.push({
      name,
      timeSpent,
      date,
    });
    await AsyncStorage.setItem(
      ACTIVITY_STORAGE_KEY,
      JSON.stringify(activities),
    );
    props.navigation.goBack();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 4, justifyContent: 'space-between'}}>
        <Text style={FinishViewStyles.mainHeader}>
          {i18n.FINISH.MAIN_HEADER}
        </Text>
        <Text style={FinishViewStyles.timerSubHeader}>
          {moment.utc(timeSpent).format(i18n.TIME_FORMAT)}
        </Text>
        <View style={{flex: 0.2}} />
      </View>

      <View style={{flex: 1}}>
        <ResponsiveCentered>
          <Text style={FinishViewStyles.activityNameLabel}>
            {i18n.FINISH.ACTIVITY_NAME_LABEL}
          </Text>
        </ResponsiveCentered>
        <ResponsiveCentered>
          <TextInput
            style={FinishViewStyles.activityNameInput}
            value={name}
            onChangeText={txt => {
              setName(txt);
            }}
          />
        </ResponsiveCentered>
      </View>
      <View style={{flex: 5}}>
        <ResponsiveCentered>
          <View style={FinishViewStyles.actionButtonsContainer}>
            <ActionButton
              onPress={() => {
                props.navigation.goBack();
              }}
              label={i18n.CANCEL}
              backgroundColor={'#F39527'}
              textColor={'#fff'}
            />
            <ActionButton
              onPress={saveTime}
              label={i18n.SAVE}
              backgroundColor={'#00CD5E'}
              textColor={'#fff'}
            />
          </View>
        </ResponsiveCentered>
      </View>
    </SafeAreaView>
  );
};
export default FinishView;
