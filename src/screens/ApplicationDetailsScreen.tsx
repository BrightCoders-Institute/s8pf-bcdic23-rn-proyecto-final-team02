import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { ApplicationDetails } from '../components';
import {FlatList} from 'react-native-gesture-handler';
import { CompanyAplicationsData } from '../data/CompanyAplicationsData';

const ApplicationDetailsScreen = () => {
    return (
        <View style={styles.container}>
            <View>
             <FlatList
                data={CompanyAplicationsData}
                keyExtractor={company => company.id}
                renderItem={({ item }) => <ApplicationDetails Aplications={item} />}
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

export default ApplicationDetailsScreen;