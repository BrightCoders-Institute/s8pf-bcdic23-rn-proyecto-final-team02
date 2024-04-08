import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {User} from '../interface/db/UserInterface';
import { TextComponent } from '.';

const genders = [
  {label: 'male', value: '1'},
  {label: 'female', value: '2'},
  {label: 'nonbinary', value: '3'},
];

const DropDownComponent = ({title, user}: {title: string; user: User}) => {
  const [isFocus, setIsFocus] = useState(false);
  let genderValue = '';

  return (
    <View style={styles.container}>
      <TextComponent styles={styles.title} text={title} />
      <Dropdown
        style={styles.input}
        itemTextStyle={{textTransform: 'capitalize'}}
        selectedTextStyle={styles.selectedTextStyle}
        data={genders}
        labelField="label"
        valueField="value"
        placeholder=""
        value={genderValue}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          genderValue = item.value;
          user.gender = item.label;
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
    marginBottom: 12,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#6C63FF',
    width: 376,
    height: 41,
    padding: 5,
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
  },
  selectedTextStyle: {
    fontSize: 18,
    color: 'black',
    textTransform: 'capitalize',
  },
});

export default DropDownComponent;
