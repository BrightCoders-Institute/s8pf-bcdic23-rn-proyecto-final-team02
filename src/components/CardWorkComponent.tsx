import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {RowComponent, TextComponent} from '../components';
import {Work} from '../interface/workInterface';
import {globalStyles} from '../theme/globalTheme';
import { useNavigation } from '@react-navigation/native';

interface Props {
  work: Work;
}

const navigate = useNavigation()

const CardWorkComponent = ({work}: Props) => {
  return (
    <TouchableOpacity style={[styles.card, globalStyles.shadow]} onPress={() => navigate.navigate('WorkDetailScreen')}>
      <Image style={styles.imagen} source={work.picture} />
      <View style={styles.content}>
        <TextComponent text={work.work} color="black" font="500" size={16} />
        <TextComponent text={work.salary} color="black" font="500" size={14} />
        <RowComponent>
          <View style={styles.apply}>
            <TextComponent
              color="white"
              text="apply to"
              font="bold"
              size={10}
            />
          </View>

          <View style={styles.apply}>
            <TextComponent
              color="white"
              text="apply to"
              font="bold"
              size={10}
            />
          </View>
        </RowComponent>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 16,
    width: 150,
    height: 182,
  },
  imagen: {
    width: 152,
    height: 98,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  apply: {
    backgroundColor: '#3825AE',
    width: 60,
    height: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginHorizontal: 5,
  },
  content: {
    marginHorizontal: 10,
    paddingTop: 4,
  },
});

export default CardWorkComponent;
