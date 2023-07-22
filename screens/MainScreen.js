import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RemButton    from '../components/RemButton';
import RemTextInput from '../components/RemTextInput';
import RemindersModel from '../models/RemindersModel';
import LogModel       from '../models/LogModel';

const log   = new LogModel;
const model = new RemindersModel({log: log});

const MainScreen = () => {
  const [text, setText] = useState('');

  return <View style={styles.view}>
    <RemTextInput
      onChangeText={setText}
      value={text||'test'}
      placeholder="Remind me to..."
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