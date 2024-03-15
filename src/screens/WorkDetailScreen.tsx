import React from 'react';
import { View, Image, StyleSheet,  FlatList } from 'react-native';
import { NavigatorComponent, TextComponent } from '../components';
import {CardWorkCompoment,CardCompanyCompoment} from '../components';
import { WorkData } from '../data/WorkData';
import { CompanyData } from '../data/CompanyData';
import { WorkDetails } from '../data/WorkDetails';

const WorkDetailScreen = () => {
    return (
        <View style={styles.container}>
            <View  style={{ marginLeft: 12, marginTop: 30 }}>
    
             <FlatList
                data = {WorkDetails}
                keyExtractor={work => work.id}
                renderItem={({ item }) => <CardWorkCompoment work = {item} />}
                />
    
            <NavigatorComponent  />
            </View>
    
    
    
        </View>
        );
};

const styles = StyleSheet.create({
    container: {
        margin:16
    },
});

export default WorkDetailScreen;