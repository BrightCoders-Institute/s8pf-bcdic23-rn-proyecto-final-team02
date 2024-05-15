import React from 'react';
import {View, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {CompanyWork} from '../interface/companyworkinterface';
import {
  ContainerComponent,
  IconComponent,
  RowComponent,
  TextComponent,
} from '../components';
import {globalStyles} from '../theme/globalTheme';

interface Props {
  companyWork: CompanyWork;
}

const CardCompanyJobsComponent = ({companyWork}: Props) => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{flex: 1}}>
      <ContainerComponent
        styles={Platform.OS === 'ios' ? {top: top} : {top: top + 20}}>
        <View style={[styles.card, globalStyles.shadow]}>
          <View style={styles.contentContainer}>
            <RowComponent
              styles={{
                flex: 1,
                justifyContent: 'space-between',
              }}
              isCenter>
              <View style={styles.info}>
                <TextComponent text={companyWork.job} font="bold" />
                <TextComponent
                  text={companyWork.jobDescription}
                  styles={{marginVertical: 5}}
                />
                {/* Cambiar a la fecha de creación */}
                <TextComponent text={companyWork.date} font="300" />
              </View>
              <RowComponent>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => console.log('edit')}>
                  <IconComponent
                    name="create-outline"
                    size={30}
                    styles={{marginHorizontal: 10}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => console.log('delete')}>
                  <IconComponent
                    name="trash-outline"
                    size={30}
                    styles={{marginHorizontal: 10}}
                  />
                </TouchableOpacity>
              </RowComponent>
            </RowComponent>
          </View>
        </View>
      </ContainerComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    marginBottom: 25,
    width: '100%',
    padding: 16,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  info: {
    width: 250,
  },
});

export default CardCompanyJobsComponent;
