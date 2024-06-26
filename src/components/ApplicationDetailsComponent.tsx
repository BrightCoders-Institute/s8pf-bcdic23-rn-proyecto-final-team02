import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {aplications} from '../interface/CompanyAplicationsInterface';
import {RowComponent, TextComponent, IconComponent, ContainerComponent } from '../components';

interface Props {
    Aplications: aplications;
  }

const ApplicationDetails = ({Aplications}: Props) => {
    
    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 0; i < Math.floor(rating); i++) {
          stars.push(<IconComponent key={i} name="star" color="#F0AE02" />);
        }
        return <View style={styles.starContainer}>{stars}</View>;;
    };
    
    const photo = require('../assets/user-male-avatar.webp');

    return (
        <ContainerComponent isScroll styles={styles.card}>
            <View style={styles.container}>
                <View style={styles.section}>
                    <View>
                        <RowComponent styles={
                            {
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                            }
                        }>  
                            <Image source={photo} style={styles.image} />
                            <View style={{
                                marginLeft: 10,
                            }}>
                                <TextComponent text={Aplications.name} color='black' font='500' size={22}/>
                                <RowComponent styles={
                                    {
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                    }
                                }>
                                {renderStars(Aplications.stars)}
                                <TextComponent text={Aplications.stars} color='black' font='500' size={16} styles={{
                                    marginLeft: 10,
                                }}/>
                                </RowComponent>
                            </View>
                        </RowComponent>
                    </View> 
                    <View style={styles.content}>
                        <View
                        style={{
                        height: 2,
                        width: '100%',
                        backgroundColor: '#3825AE',
                        marginBottom: 10,
                        }}
                        />
                    </View>
                    <TextComponent text={`Date applied: ${Aplications.dateApplied}`} styles={{
                        marginTop: 8,
                    }}/>
                </View>
                <View style={styles.section}>
                    <RowComponent styles={{
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                    }}>
                        <TextComponent text='About' color='black' font='600' size={20}></TextComponent>
                    </RowComponent>
                    <RowComponent styles={{
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        }}>
                        <TextComponent text='Profile' color='black' font='500' size={16} styles={{
                            marginVertical: 18,
                        }}></TextComponent>
                    </RowComponent>
                    <RowComponent styles={{
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        marginBottom: 18,
                        padding: 0,
                    }}>
                    <TextComponent text={`Age: ${Aplications.age}`} styles={{
                        marginRight: 16,
                    }}></TextComponent>
                    <TextComponent text={Aplications.gender}></TextComponent>
                    </RowComponent>
                    <RowComponent styles={{
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start'
                    }}>
                    <TextComponent text={`From: ${Aplications.location}`} styles={{
                        marginRight: 16,
                    }}>
                    </TextComponent>
                    </RowComponent><RowComponent styles={{
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                    }}>
                        <TextComponent text='Highlights' color='black' font='500' size={16} styles={{
                            marginTop: 18,
                        }}></TextComponent>
                    </RowComponent>
                    
                    {Array.isArray(Aplications.highlights) && Aplications.highlights.map((highlights, index) => (
                    <TextComponent
                    key={index}
                    text={`\u2022 ${highlights.item}`}
                    styles={styles.bulletList}
                    />
                    ))}
                    <RowComponent styles={{
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                    }}>
                        <TextComponent text='Experience' color='black' font='500' size={16} styles={{
                            marginTop: 18,
                        }}>
                        </TextComponent>
                    </RowComponent>
                    {Array.isArray(Aplications.experience) && Aplications.experience.map((experience, index) => (
                    <TextComponent
                    key={index}
                    text={`\u2022 ${experience.item}`}
                    styles={styles.bulletList}
                    />
                    ))}
                    </View>
                    <RowComponent styles={{
                        justifyContent: 'space-between',
                    }}>
                        <TouchableOpacity style={styles.buttonAccept}>
                            <Text style={{
                                color: 'white',
                                width: 75,
                                textAlign: 'center',
                            }}>Accept</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonReject}>
                                <Text style={{
                                    color: 'white',
                                    width: 75,
                                    textAlign: 'center',
                                    }}>Reject
                                    </Text>
                            </TouchableOpacity>
                    </RowComponent>
            </View>
        </ContainerComponent>
  );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 5,
        flex: 1,
      },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    content: {
        marginHorizontal: 10,
        paddingTop: 4,
    },
    section: {
        marginBottom: 20,
    },
    rating: {
        fontSize: 18,
        color: '#ffd700',
    },
    buttonAccept: {
        backgroundColor: '#406405',
        padding: 10,
        borderRadius: 10,
    },
    buttonReject: {
        backgroundColor: '#8A2B2B',
        padding: 10,
        borderRadius: 10,
    },
    bulletList: {
        marginTop: 18,
        marginBottom: 4,
    },
    image: {
        width: 50,
        height: 50,
        marginBottom: 10,
        borderRadius: 100,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
  },
});

export default ApplicationDetails;