import React from 'react';
import { View, Image,StyleSheet } from 'react-native';
import { TextComponent } from '../components';
import { Work } from '../interface/workInterface'

interface Props {
    work: Work;
}

const CardWorkCompoment = ({work}:Props) => {
    return (
    <View style={styles.card}>

      <Image style={styles.imagen} source={work.picture}/>

     <View style={styles.content}>
       <TextComponent  text={work.work}  color='black' font="500" size={16} />
       <TextComponent  text={work.salary}  color='black' font="500" size={14} />

     <View style={styles.apply}> 
       <TextComponent color='white' text='apply to' font='bold' size={10}/>
     </View>

      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowColor: '#000',
      marginRight:32,
      width:152,
      height:182,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0,
      shadowRadius: 0,
      
      elevation: 0,
    },
    imagen:{
      width:152,
      height:98,
      borderTopLeftRadius: 10, 
      borderTopRightRadius: 10, 
    },
    separator:{
      marginTop: -10,
      backgroundColor:'#3825AE',
      width:152,
      height:17,
    },
    apply:{
      backgroundColor:'#3825AE',
      width:50,
      height:16,
      borderRadius:5,
      paddingLeft:5,
      marginTop:3,
    },
    content:{
      paddingLeft:11,
      paddingBottom:14,
      paddingTop:4,
    }
});

export default CardWorkCompoment;