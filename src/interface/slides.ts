import { ImageSourcePropType } from "react-native";

export interface Slide {
title: string;
desc: string;
img: ImageSourcePropType;
}

export interface SlideItemProps {
  item: Slide;
}
