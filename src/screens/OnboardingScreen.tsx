import React, {useRef, useState} from 'react';
import {
  View,
  Image,
  useWindowDimensions,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {IconComponent, TextComponent} from '../components';

import {SlideItemProps} from '../interface/slides';
import {items} from '../data/SlidesData';

const SlideItem = ({item}: SlideItemProps) => {
  const {width} = useWindowDimensions();
  const {title, desc, img} = item;

  return (
    <View style={[styles.screens, {width: width}]}>
      <Image
        source={img}
        style={{
          width: width * 0.9,
          height: width * 0.9,
          resizeMode: 'center',
          alignSelf: 'center',
        }}
      />
      <TextComponent text={desc} size={35} />
    </View>
  );
};

const OnboardingScreen = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const navigation = useNavigation();

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {contentOffset, layoutMeasurement} = event.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

    setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);
  };

  const scrollToSlide = (index: number) => {
    if (!flatListRef.current) return;

    flatListRef.current.scrollToIndex({
      animated: true,
      index,
    });
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={item => item.title}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        // scrollEnabled={false}
        onScroll={onScroll}
        showsHorizontalScrollIndicator={false}
      />

      {currentSlideIndex === items.length - 1 ? (
        <TouchableOpacity
          style={styles.buttonNext}
          onPress={() =>
            navigation.reset({index: 0, routes: [{name: 'SignIn'}]})
          }>
          <TextComponent text="Start" size={18} color="white" />
          <IconComponent name="caret-forward" color="white" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.buttonNext}
          onPress={() => scrollToSlide(currentSlideIndex + 1)}>
          <TextComponent text="Next" size={18} color="white" />
          <IconComponent name="caret-forward" color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export const styles = StyleSheet.create({
  buttonNext: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 50,
    right: 16,
    width: 100,
    height: 35,
    backgroundColor: '#6C63FF',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  screens: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 40,
    justifyContent: 'center',
  },
});

export default OnboardingScreen;
