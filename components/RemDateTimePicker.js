import React from 'react';
import { StyleSheet, View } from 'react-native';
import RemButton    from '../components/RemButton';
import RemTextInput from '../components/RemTextInput';
import strftime from 'strftime';

function adjustDate(in_date, {d = 0, h = 0, m = 0, abs_h, abs_m} = {}) {
  const out_date = new Date(in_date.getTime());
  out_date.setDate(out_date.getDate() + d);
  out_date.setHours  (abs_h !== undefined ? abs_h : out_date.getHours  () + h);
  out_date.setMinutes(abs_h !== undefined ? abs_m : out_date.getMinutes() + m);
  return out_date;
}

const RemDateTimePicker = ({ value, onChange }) => {
  return (
    <View style={styles.mainContainer}>
      <RemTextInput
          style={styles.input}
          onChange={onChange}
          value={strftime('%a %d, %B, %-I:%M%p', value)}
      />
      <View style={styles.buttonContainer}>
        <RemButton
            title="+1d"
            onPress={() => onChange(adjustDate(value, {d: 1}))}
        />
        <RemButton
            title="+1h"
            onPress={() => onChange(adjustDate(value, {h: 1}))}
        />
        <RemButton
            title="+12h"
            onPress={() => onChange(adjustDate(value, {h: 12}))}
        />
        <RemButton
            title="+10m"
            onPress={() => onChange(adjustDate(value, {m: 10}))}
        />
      </View>
      <View style={styles.buttonContainer}>
        <RemButton
            title="-1d"
            onPress={() => onChange(adjustDate(value, {d: -1}))}
        />
        <RemButton
            title="@11"
            onPress={() => onChange(adjustDate(value, {abs_h: 11, abs_m: 10}))}
        />
        <RemButton
            title="@4"
            onPress={() => onChange(adjustDate(value, {abs_h: 16, abs_m: 10}))}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    borderColor: "#385E2B",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    padding: 5,
  },
  input: {
    height: 40,
    borderColor: "#385E2B",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-around', // Optional: add some space between the buttons
  },
});

export default RemDateTimePicker;
