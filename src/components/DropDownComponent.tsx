import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {User} from '../interface/db/UserInterface';

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
      <Text style={styles.title}>{title}</Text>
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
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#9F99FF',
    width: 361,
    height: 50,
    padding: 10,
  },
  selectedTextStyle: {
    fontSize: 18,
    color: 'black',
    textTransform: 'capitalize',
  },
});

export default DropDownComponent;
