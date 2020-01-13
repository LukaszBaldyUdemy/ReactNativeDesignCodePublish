import {Animated, Text, TouchableOpacity} from 'react-native';
import i18n from '../../i18n/i18n';
import React from 'react';
import moment from 'moment';
import StopWatchButtonsStyles from './StopWatchButtonsStyles';

const StopWatchButton = ({
  time,
  startOnPressAction,
  timerOnPressAction,
  paused,
}) => {
  const timerOpacity = new Animated.Value(1);
  const BLINK_DELAY = 500;
  const blinker = toValue => {
    if (paused) {
      Animated.timing(timerOpacity, {
        toValue,
        duration: BLINK_DELAY,
      }).start(() => {
        blinker(toValue === 1 ? 0 : 1);
      });
    } else {
      Animated.timing(timerOpacity, {
        toValue: 1,
        duration: BLINK_DELAY,
      }).start();
    }
  };

  blinker(0);

  if (time > 0) {
    return (
      <TouchableOpacity
        style={StopWatchButtonsStyles.mainActionButton}
        onPress={timerOnPressAction}>
        <Animated.View
          style={[
            StopWatchButtonsStyles.mainActionButton,
            {opacity: timerOpacity},
          ]}>
          <Text style={StopWatchButtonsStyles.mainActionButtonText}>
            {moment.utc(time).format(i18n.TIME_FORMAT)}
          </Text>
          <Text
            style={[
              StopWatchButtonsStyles.mainActionButtonText,
              StopWatchButtonsStyles.mainActionButtonPauseText,
            ]}>
            {i18n.STOP_WATCH.PAUSE}
          </Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={StopWatchButtonsStyles.mainActionButton}
      onPress={startOnPressAction}>
      <Text style={StopWatchButtonsStyles.mainActionButtonText}>
        {i18n.STOP_WATCH.START}
      </Text>
    </TouchableOpacity>
  );
};

export default StopWatchButton;
