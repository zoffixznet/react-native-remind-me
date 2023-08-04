import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import RemButton    from '../components/RemButton';
import RemDateTimePicker    from '../components/RemDateTimePicker';
import RemTextInput from '../components/RemTextInput';
import RemindersModel from '../models/RemindersModel';
import LogModel       from '../models/LogModel';

const log   = new LogModel;
log.debug('Starting logging');
const model = new RemindersModel({log});

const MainScreen = () => {
  const [text, setText] = useState('');
  const [date, setDate] = useState(() => {
    let d = new Date();
    d.setMinutes(0);
    d.setSeconds(0);
    return d;
  })
  

  useEffect(() => { model.init_db(); }, []);

  return <View style={styles.view}>
    <RemTextInput
      onChangeText={setText}
      value={text||'test'}
      placeholder="Remind me to..."
    />
    <RemDateTimePicker
          value={date}
          onChange={setDate}
        />
    <RemButton
      title="Set reminder"
      onPress={() => model.create(text)}
    />
  </View>
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    }
});

export default MainScreen;