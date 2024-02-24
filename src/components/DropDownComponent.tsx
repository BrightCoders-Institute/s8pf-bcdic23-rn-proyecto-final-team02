import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const genders = [
  {label: 'Male', value: '1'},
  {label: 'Female', value: '2'},
  {label: 'Nonbinary', value: '3'},
];

const DropDownComponent = ({title}: {title: string}) => {
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Dropdown
        style={styles.input}
        selectedTextStyle={styles.selectedTextStyle}
        data={genders}
        labelField="label"
        valueField="value"
        placeholder=""
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    color: '#161616',
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#9F99FF',
    width: 361,
    height: 50,
    padding: 5,
  },
  selectedTextStyle: {
    fontSize: 18,
    color: 'black',
  },
});

export default DropDownComponent;
