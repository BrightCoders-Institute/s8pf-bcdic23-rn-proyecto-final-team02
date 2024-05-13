import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {WorkDetailsComponent} from '../components';
import {CompanyWorkData} from '../data/CompanyWorkData';
import {FlatList} from 'react-native-gesture-handler';

const WorkDetailScreen = () => {
    return (
        <View style={styles.container}>
            <View  style={{ marginLeft: 12, marginTop: 12 }}>
             <FlatList
                data={CompanyWorkData}
                keyExtractor={company => company.id}
                renderItem={({ item }) => <WorkDetailsComponent companyWork={item} />}
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