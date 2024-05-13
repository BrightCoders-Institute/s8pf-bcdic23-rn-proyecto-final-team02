import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { TextComponent,RowComponent } from '../components';
import { CompanyWork } from '../interface/companyworkinterface';
import {globalStyles} from '../theme/globalTheme';

interface Props {
  companyWork: CompanyWork;
}

const CardWorkComponent = ({ companyWork }: Props) => {
  return (
    <View style={[styles.card, globalStyles.shadow]}>
      <View style={styles.container}>
        <Image style={styles.logo} source={companyWork.logo} />
        <TextComponent styles={styles.text} text={companyWork.company}  />
        <TextComponent styles={styles.text} text='-'/>
        <TextComponent styles={styles.text} text={companyWork.branch}  />
      </View>


      <View style={styles.container2}>
        <TextComponent styles={styles.text} text={companyWork.job}  />
        <RowComponent styles={styles.accepted} onPress={() => {}}>
          <TextComponent   text='Accepted' color='white' size={16} font='bold'/>
        </RowComponent>
      </View>

      <View style={styles.container2}>
        <TextComponent styles={styles.text} text={companyWork.job}  />
        <RowComponent styles={styles.pending} onPress={() => {}}>
          <TextComponent   text='Pending' color='white' size={16} font='bold'/>
        </RowComponent>
      </View>

      <View style={styles.container2}>
        <TextComponent styles={styles.text} text={companyWork.job}  />
        <RowComponent styles={styles.rejected} onPress={() => {}}>
          <TextComponent   text='Rejected' color='white' size={16} font='bold'/>
        </RowComponent>
      </View>

    
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    marginBottom: 25,
    marginLeft: 11,
    width: 361,
    height: 'auto',
    padding: 16,
  },
  container: {
    flexDirection: 'row', // Align items in a row
    alignItems: 'center', // Align items vertically in the center
    gap:5,
  },
  container2:{
    flexDirection: 'row', // Align items in a row
    alignItems: 'center', // Align items vertically in the center
    justifyContent: 'space-between',
    padding:10
  },
  logo: {
    width: 43,
    height: 43,
    marginRight: 10, // Add some margin between logo and text
  },
  text:{
    fontSize:16,
    fontWeight:'500',
  },
  accepted:{
    backgroundColor:'#406405',
    width:124,
    height:31,
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  pending:{
    backgroundColor:'#997006',
    width:124,
    height:31,
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  rejected:{
    backgroundColor:'#8A2B2B',
    width:124,
    height:31,
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default CardWorkComponent;
