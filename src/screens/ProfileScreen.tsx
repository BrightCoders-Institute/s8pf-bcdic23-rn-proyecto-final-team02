import React from 'react';
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

const ProfileScreen = () => {
  const {top} = useSafeAreaInsets();
  const photo = require('../assets/user-male-avatar.webp');

  return (
    <ContainerComponent isScroll>
      <View style={Platform.OS === 'ios' ? {top: top + 15} : {}}>
        <SectionComponent styles={{alignItems: 'center'}}>
          <TextComponent
            text="My Profile"
            font="bold"
            color="black"
            size={22}
          />
        </SectionComponent>

        {/* Imagen y calificación */}
        <SectionComponent styles={[styles.sections, globalStyles.shadow]}>
          <SectionComponent styles={{alignItems: 'center'}}>
            <Image source={photo} style={styles.image} />
            <RowComponent styles={styles.buttonStar} isCenter>
              <IconComponent name="star" color="white" />
              <TextComponent
                text="4.85"
                color="white"
                styles={{marginLeft: 16}}
              />
            </RowComponent>
          </SectionComponent>

          {/* Nombre y apellido */}
          <SectionComponent>
            <TouchableOpacity style={styles.buttons} activeOpacity={0.8}>
              <TextComponent text="Name" color="black" font="bold" size={16} />
              <RowComponent>
                <TextComponent text="Jonathan P" color="black" size={14} />
                <IconComponent name="chevron-forward" color="black" />
              </RowComponent>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} activeOpacity={0.8}>
              <TextComponent
                text="Last name"
                color="black"
                font="bold"
                size={16}
              />
              <RowComponent>
                <TextComponent text="Anderson" color="black" size={14} />
                <IconComponent name="chevron-forward" color="black" />
              </RowComponent>
            </TouchableOpacity>
          </SectionComponent>
        </SectionComponent>

        <RowComponent
          styles={[
            styles.sections,
            {height: 50, alignContent: 'center', alignItems: 'center'},
          ]}
          onPress={() => {}}>
          <TextComponent
            text="My CV"
            font="bold"
            size={16}
            styles={{marginLeft: 16}}
          />
          <IconComponent
            name="document-text-outline"
            color="black"
            styles={{marginRight: 16}}
          />
        </RowComponent>

        <RowComponent
          styles={[
            styles.sections,
            {height: 50, alignContent: 'center', alignItems: 'center'},
          ]}
          onPress={() => {}}>
          <TextComponent
            text="Date of Birth"
            font="bold"
            size={16}
            styles={{marginLeft: 16}}
          />
          <TextComponent text="24/05/2000" styles={{marginRight: 16}} />
        </RowComponent>

        {/* Sección para teléfono contraseña y correo */}
        <SectionComponent styles={[styles.sections, globalStyles.shadow]}>
          {/* Botón para el teléfono */}
          <TouchableOpacity style={styles.buttons} activeOpacity={0.8}>
            <TextComponent color="black" text="Telephone number" font="bold" />
            <RowComponent>
              <TextComponent text="333****45" color="black" size={14} />
              <IconComponent name="chevron-forward" color="black" />
            </RowComponent>
          </TouchableOpacity>
          {/* Botón para la contraseña */}
          <TouchableOpacity style={styles.buttons} activeOpacity={0.8}>
            <TextComponent text="Password" color="black" font="bold" />
            <RowComponent>
              <TextComponent text="*********" color="black" size={14} />
              <IconComponent name="chevron-forward" color="black" />
            </RowComponent>
          </TouchableOpacity>
          {/* Botón para el correo */}
          <TouchableOpacity style={styles.buttons} activeOpacity={0.8}>
            <TextComponent text="Email" font="bold" color="black" />
            <RowComponent>
              <TextComponent text="Joan*****" color="black" />
              <IconComponent name="chevron-forward" color="black" />
            </RowComponent>
          </TouchableOpacity>
        </SectionComponent>

        <RowComponent
          styles={[
            styles.sections,
            {height: 50, alignContent: 'center', alignItems: 'center'},
          ]}
          onPress={() => {}}>
          <TextComponent
            text="Sign out"
            font="bold"
            size={16}
            styles={{marginLeft: 16}}
          />
          <IconComponent
            name="log-out-outline"
            color="black"
            styles={{marginRight: 16}}
          />
        </RowComponent>

        <RowComponent
          styles={[
            styles.sections,
            {height: 50, alignContent: 'center', alignItems: 'center'},
          ]}
          onPress={() => {}}>
          <TextComponent
            text="Delate account"
            font="bold"
            size={16}
            styles={{marginLeft: 16}}
          />
          <IconComponent
            name="chevron-forward"
            color="black"
            styles={{marginRight: 16}}
          />
        </RowComponent>
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
    width: 50,
    height: 50,
    marginBottom: 10,
    borderRadius: 100,
  },
  buttonStar: {
    backgroundColor: '#3526a7',
    borderRadius: 10,
    width: 80,
    height: 30,
  },
  sectionName: {
    alignSelf: 'flex-start',
    marginHorizontal: 16,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 10,
    borderBottomWidth: 0.2,
  },
});

export default ProfileScreen;
