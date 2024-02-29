import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextComponent} from '.';

const NavigatorComponent = ({}) => {
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TextComponent styles={styles.text} text="Home"></TextComponent>
        </View>
        <View style={styles.content}>
          <TextComponent
            styles={styles.text}
            text="Notifications"></TextComponent>
        </View>
        <View style={styles.content}>
          <TextComponent styles={styles.text} text="Messages"></TextComponent>
        </View>
        <View style={styles.content}>
          <TextComponent styles={styles.text} text="Profile"></TextComponent>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1F1650',
    borderRadius: 15,
    width: 361,
    height: 63,
  },
  container: {
    paddingLeft: 5,
    paddingBottom: 14,
    paddingTop: 14,
    paddingRight: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  text: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '500',
  },
});

export default NavigatorComponent;
