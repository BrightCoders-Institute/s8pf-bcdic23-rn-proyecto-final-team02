import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {WorkDetailsComponent} from '../components';
import { WorkData } from '../data/WorkData';
import {WorkDetails} from '../data/WorkDetails';
import {FlatList} from 'react-native-gesture-handler';

const WorkDetailScreen = () => {
    return (
        <View style={styles.container}>
            <View  style={{ marginLeft: 12, marginTop: 30 }}>
             <FlatList
                data={WorkDetails}
                keyExtractor={workdetails => workdetails.id}
                renderItem={({ item }) => <WorkDetailsComponent workdetails={item} />}
            />
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