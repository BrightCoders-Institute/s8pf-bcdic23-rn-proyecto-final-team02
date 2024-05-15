import React, { useEffect, useState } from 'react';
import {
  View,
  Platform,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  ContainerComponent,
  IconComponent,
  RowComponent,
  SectionComponent,
  TextComponent,
} from '../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {globalStyles} from '../theme/globalTheme';

interface UserData {
  name: string;
  last_name: string;
  age: number;
  location: string;
  rating: number;
  phone:string;
  gender:string;
  about:string;
  documents: string[];
}

const NormalProfileScreen = () => {
    const {top} = useSafeAreaInsets();
    const photo = require('../assets/user-male-avatar.webp');
  
    return (
      <ContainerComponent isScroll>
        <View style={Platform.OS === 'ios' ? {top: top + 15} : {}}>
          <SectionComponent styles={{alignItems: 'center'}}>
            <TextComponent
              text="Profile"
              font="bold"
              color="black"
              size={30}
            />
          </SectionComponent>
  
          <SectionComponent styles={[styles.sections, globalStyles.shadow]}>
            <SectionComponent styles={{
                alignItems: 'flex-start',
                marginLeft: 16
            }}>
              <Image source={photo} style={styles.image}/>

            <RowComponent>
                <TextComponent text="Name" font="600" size={22} />
                <TextComponent text="Last name" font="600" size={22} styles={{
                    marginLeft: 8,
                }} />
            </RowComponent>
            <RowComponent>
                <TextComponent text="STARS PLACEHOLDER" color="black" size={16} />
                <TouchableOpacity>
                    <View style={styles.config}>
                        <IconComponent name="settings-outline" color="black" size={30}/>
                        </View>
                </TouchableOpacity>
            </RowComponent> 
            <RowComponent>
                <TextComponent text="Location, Location." color="black" size={16} />
            </RowComponent>
                <RowComponent>
                <TextComponent text="Age years old" color="black" size={14} />
                <TextComponent text="Gender" color="black" size={14} styles={{
                    marginLeft: 8,
                }} />
                </RowComponent>
                </SectionComponent>
                </SectionComponent>
                <SectionComponent styles={{
                    paddingVertical: 0,
                }}>
                    <SectionComponent styles={{
                        alignItems: 'flex-start',
                        marginLeft: 16,
                        paddingVertical: 0,
                    }}>
                        <TextComponent text="About" font="600" size={22} />
                        <TextComponent text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac diam ac sem congue tempor id vel nisi."
                        color="black" size={16} />
                        <TextComponent text="Documents" font="600" size={22} />
                        <TouchableOpacity>
                            <View style={styles.card}>
                                <View style={{
                                    justifyContent: 'space-around',
                                    flex: 1,
                                }}>
                                <TextComponent text="CV" font="600" size={22} styles={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}/>
                                <RowComponent>
                                <IconComponent name="document-outline" color='black' size={30}>
                                </IconComponent>
                                <View style={styles.button}>
                                    <TextComponent text="Read" color="white" size={14} />
                                </View>
                                </RowComponent>
                            </View>
                        </View>
                        </TouchableOpacity>
                    </SectionComponent>
                </SectionComponent>
                </View>
        </ContainerComponent>
    );
  };
  
  export const styles = StyleSheet.create({
    sections: {
      backgroundColor: 'white',
      borderRadius: 10,
      marginBottom: 20,
    },
    image: {
      width: 70,
      height: 70,
      marginBottom: 10,
      borderRadius: 100,
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000',
        width: 150,
        height: 100,
        marginTop: 5,
        marginRight: 16,
        alignItems: 'center',
      },      
  button:{
    backgroundColor:'#3825AE',
    width:50,
    height:30,
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  config:{
    borderRadius:15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 150,
  }
  });
  
  export default NormalProfileScreen;
  