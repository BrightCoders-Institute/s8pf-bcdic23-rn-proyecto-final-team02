import React from 'react';
import {
  View,
  Platform,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {WorkDetailsComponent} from '../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {globalStyles} from '../theme/globalTheme';
import {WorkDetails} from '../data/WorkDetails';
import {FlatList} from 'react-native-gesture-handler';

const WorkDetailScreen = () => {
    return (
        <View style={styles.container}>
            <View  style={{ marginLeft: 12, marginTop: 30 }}>
             <FlatList
                data = {WorkDetails}
                keyExtractor={workdetails => workdetails.id}
                renderItem={({ item }) => <WorkDetailsComponent workdetails = {item} />
            }
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